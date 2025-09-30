The Monado Android version has relatively high frame latency. This article will analyze Monado's frame prediction mechanism and attempt to improve its latency.

# Pose Acquisition Interface

The device driver provides an interface to obtain predicted poses. All frame prediction in Monado is achieved by calling the following interface to get the pose at the desired time.

```c
	/*!
	 * @brief Get relationship of a tracked device to the tracking origin
	 * space as the base space.
	 *
	 * It is the responsibility of the device driver to do any prediction,
	 * there are helper functions available for this.
	 *
	 * The timestamps are system monotonic timestamps, such as returned by
	 * os_monotonic_get_ns().
	 *
	 * @param[in] xdev           The device.
	 * @param[in] name           Some devices may have multiple poses on
	 *                           them, select the one using this field. For
	 *                           HMDs use @p XRT_INPUT_GENERIC_HEAD_POSE.
	 *                           For Unbounded Reference Space you can use
	 *                           @p XRT_INPUT_GENERIC_UNBOUNDED_SPACE_POSE
	 *                           to get the origin of that space.
	 * @param[in] at_timestamp_ns If the device can predict or has a history
	 *                            of positions, this is when the caller
	 *                            wants the pose to be from.
	 * @param[out] out_relation The relation read from the device.
	 *
	 * @see xrt_input_name
	 */
	xrt_result_t (*get_tracked_pose)(struct xrt_device *xdev,
	                                 enum xrt_input_name name,
	                                 int64_t at_timestamp_ns,
	                                 struct xrt_space_relation *out_relation);
```

This interface is typically called in two scenarios:
1. APP obtains poses through IPC calls
2. Compositor obtains poses during composition

## APP obtains poses through IPC calls

When rendering frames, the APP calls xrLocateSpace or xrLocateViews to obtain poses, while passing in the prediction time.
![app frame prediction](app-frame-prediction.png)

Unity uses a multi-threaded model. The UnityMain thread calls the locateSpace interface to get the pose at the beginning of the frame. At this point, the prediction time is relatively long, about 42ms.

In the Render thread when submitting the frame, it obtains the pose again through locateView, with a prediction time of 29.7ms. This means that after 11ms of CPU processing time, it re-predicts the pose for frame submission, which also helps reduce latency. In other words, the render thread submits frames with a prediction time of about 30ms.
![Unity prediction model](11ms-between-2-prediction.png)

For native applications like HelloXR, there is only one main thread, and pose acquisition is completed within a single thread.
![HelloXR prediction model](loclateViews-space.png)

## Compositor obtains poses during composition

![compositor prediction model](compositor-get-pose.png)

Compositor render thread, prediction time 7.9ms
![compositor prediction time](compositor-prediction-time.png)

# Frame Pacing - Frame Time Management

The Frame Pacing module controls frame rhythm/timing. Frames mainly have the following states:

1. Sleep timing points
Event | Time variable | Description
--- | --- | ---
Predicted sleep start | f->when.predicted_ns | Monado predicts when the CPU should enter sleep (based on historical frame data for power optimization)
Actual wake time | f->when.wait_woke_ns | When the CPU is actually awakened (may be later than predicted due to system scheduling delays)

2. CPU processing stage (application logic)
Event | Time variable | Description
--- | --- | ---
CPU starts work | cpu_start_ns | Starts processing immediately after waking (wait_woke_ns + 1 to avoid time overlap)
CPU finishes work | f->when.begin_ns | CPU completes frame data processing (such as application logic, submitting render commands)

3. GPU drawing stage
Event | Time variable | Description
--- | --- | ---
GPU starts drawing | f->when.begin_ns | After CPU submits draw commands, GPU starts rendering
GPU expected completion | f->predicted_gpu_done_time_ns | Monado predicts when GPU should complete rendering (used to determine if delayed)
GPU actual completion | f->when.delivered_ns | When GPU actually completes rendering (if later than predicted, marked as "late")

4. Wait stage (GPU synchronization)
Event | Time variable | Description
--- | --- | ---
Start waiting for GPU | f->when.delivered_ns | After GPU rendering completes, waiting for results to sync to display subsystem
GPU final completion | f->when.gpu_done_ns | Final time when all GPU work (including display submission) is completed

![sleep-draw-wait](sleep-draw-wait.png)

PA Sleep ----> oxr_xrWaitFrame
PA Draw --> Time duration from oxr_xrBeginFrame to oxr_xrEndFrame
![sleep-draw](sleep-draw.png)

oxr_xrEndFrame marks the end of draw
![end-draw](draw.png)

PA wait is the time waiting for GPU drawing. After GPU drawing completes, the fence wakes up and wait ends. Note that this wait thread is named "unity main" but is actually the compositor waiter thread.
![wait](wait.png)

## Compositor frame synchronization

The compositor has a similar process: PC sleep -> PC draw -> PC present, where present is the predicted screen scanout time.
![compositor](compositor_timeline.png)

# Complete frame latency

The diagram below shows the entire process from when the application starts rendering a frame to submission for composition, and finally to screen display after composition.

The first flag to the second flag is from drawing to starting submission. The second to third flag is from submission to composition to screen display.

First flag: Frame start, CPU runs to prepare rendering data, calls xrt_device_get_tracked_pose interface for pose prediction. The xrt device driver prints a prediction time of 30ms.

Second flag: Compositor finishes displaying the previous frame and starts retrieving the currently submitted frame for composition.

Third flag: Compositor completes composition of the new frame and finishes screen display. Using systrace measurement, the time from the first flag to the third flag is 30ms, matching the predicted display time.
![full frame delay](full-frame-delay.png)

# Summary

For latency tuning, evaluation can be done from both subjective and objective aspects.

Subjective aspects:
1. If the image dragging sensation is strong, the latency is high and prediction time needs to be increased (this was the initial situation with Monado)
2. Run hello_xr and observe the cube in the center of the field of view - if there is ghosting, there is a prediction problem, likely due to frame jitter, such as one frame predicting longer and the next frame having inconsistent prediction duration. When the cube has no ghosting at all, the prediction is correct.
3. With correct latency, there should be no dizziness when turning left and right, and the image should be very responsive during rotation.

Objective aspects:
Test MTP latency, such as using OptoFidelity® BUDDY for MTP measurement. Good results should show 0 latency.
Detailed reference: https://www.optofidelity.com/insights/blogs/measuring-head-mounted-displays-hmd-motion-to-photon-mtp-latency