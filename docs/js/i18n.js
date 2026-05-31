const translations = {
    en: {
        title: "XReality - Complete XR Solution Based on Monado",
        nav_home: "Home",
        nav_blog: "Blog",
        nav_features: "Core Features",
        nav_advantages: "Advantages",
        nav_contact: "Contact Us",
        lang_switch: "Language",
        hero_title: "XReality",
        hero_subtitle: "Complete XR solution based on open-source Monado engine with native OpenXR support, delivering ultra-low latency and high-precision XR experience for Android platforms",
        hero_cta: "Explore Features",
        overview_title: "Architecture Overview",
        features_title: "Core Technical Features",
        feature1_title: "Single Buffer Rendering",
        feature1_desc: "<ul class='feature-list'><li>Renders directly to display buffers</li><li>Ultra-low latency display output</li><li>Smoother and more responsive XR experience</li></ul>",
        feature2_title: "3DOF/6DOF Pose Tracking",
        feature2_desc: "<ul class='feature-list'><li><span class='feature-list-label'>3DOF:</span> Precise pose prediction with magnetic fusion and IMU online calibration</li><li><span class='feature-list-label'>6DOF:</span> Monocular, binocular, or quad-camera SLAM</li><li>Microsecond-level camera synchronization</li><li>Millimeter-level tracking precision</li><li>Mobile hardware acceleration with low CPU and power usage</li></ul>",
        feature3_title: "Comprehensive Debugging Tools",
        feature3_desc: "<ul class='feature-list'><li>Perfetto-based Systrace capture and analysis</li><li>In-depth system runtime flow profiling</li><li>Powerful performance tuning and diagnostics</li></ul>",
        feature4_title: "Precise Distortion Correction",
        feature4_desc: "<ul class='feature-list'><li>Comprehensive distortion correction methods</li><li>Accurate optical distortion compensation</li><li>Detailed documentation with implementation guides</li></ul>",
        feature5_title: "Enhanced Rendering Pipeline",
        feature5_desc: "<ul class='feature-list'><li>Optimized rendering pipeline with spatiotemporal reprojection</li><li>Significantly reduced motion-to-photon latency</li><li>Eliminates ghosting and judder artifacts</li><li>Effectively prevents motion sickness</li></ul>",
        feature6_title: "Multi-Process Architecture",
        feature6_desc: "<ul class='feature-list'><li>Out-of-Process multi-process architecture</li><li>Resolved Android compatibility and stability issues</li><li>Concurrent multi-process support</li><li>Overlay Sessions and complex scenario support</li></ul>",
        feature7_title: "SOC Platform Optimization",
        feature7_desc: "<ul class='feature-list'><li>GPU optimizations for Qualcomm and mainstream platforms</li><li>Significantly reduced Runtime power overhead</li><li>Improved system energy efficiency</li><li>Extended battery life for mobile XR</li></ul>",
        feature8_title: "Comprehensive Technical Documentation",
        feature8_desc: "<ul class='feature-list'><li>Complete Monado workflow documentation</li><li>Threading model and architecture guides</li><li>Quick-start and deep customization tutorials</li></ul>",
        feature9_title: "Dual Display Modes",
        feature9_desc: "<ul class='feature-list'><li>Binocular concurrent display (same content)</li><li>Binocular independent display (different content)</li><li>Full Android native application support</li></ul>",
        feature11_title: "Hand Gesture Interaction",
        feature11_desc: "<ul class='feature-list'><li>21-joint 3D hand tracking</li><li>Joint point visualization and marking</li><li>Real-time performance on mobile platforms</li><li>Monocular, binocular, and multi-camera configurations</li></ul>",
        advantages_title: "Technical Advantages",
        advantage1_title: "Native OpenXR Support",
        advantage1_desc: "Fully compatible with OpenXR standards, ensuring seamless integration with mainstream XR applications and frameworks",
        advantage2_title: "Android Platform Optimization",
        advantage2_desc: "Deeply optimized for Android ecosystem, fully leveraging mobile platform hardware capabilities",
        advantage3_title: "Open Source & Customizable",
        advantage3_desc: "Based on open-source Monado project, supports source-level customization for different scenario requirements",
        advantage4_title: "Continuous Innovation",
        advantage4_desc: "Continuous improvements and optimizations, maintaining technological leadership while providing optimal XR experience",
        stat1_desc: "Ultra-low Display Latency",
        stat2_desc: "Pose Tracking Accuracy",
        stat3_desc: "Power Optimization Improvement",
        stat4_desc: "OpenXR Compatibility",
        contact_title: "Start Your XR Journey",
        contact_subtitle: "Ready to experience the next-generation XReality solution? Contact us for technical support and customization services.",
        contact_cta: "Get Started",
        footer_text: "© 2025 XReality. Based on open-source Monado engine, empowering the XR ecosystem.",
        comments_title: "Comments"
    },
    zh: {
        title: "XReality - 基于 Monado 的完整 XR 解决方案",
        nav_home: "首页",
        nav_blog: "博客",
        nav_features: "核心特性",
        nav_advantages: "优势",
        nav_contact: "联系我们",
        lang_switch: "语言",
        hero_title: "XReality",
        hero_subtitle: "基于开源 Monado 引擎的完整 XR 解决方案，支持原生 OpenXR，为安卓平台带来超低延迟和高精度的 XR 体验",
        hero_cta: "探索特性",
        overview_title: "架构总览",
        features_title: "核心技术特性",
        feature1_title: "单缓冲渲染",
        feature1_desc: "<ul class='feature-list'><li>直接渲染到显示缓冲区</li><li>超低延迟显示输出</li><li>更流畅的 XR 交互体验</li></ul>",
        feature2_title: "3DOF/6DOF 姿态追踪",
        feature2_desc: "<ul class='feature-list'><li><span class='feature-list-label'>3DOF：</span>精准位姿预测，支持磁融合和 IMU 在线校准</li><li><span class='feature-list-label'>6DOF：</span>支持单目、双目或四目摄像头 SLAM</li><li>微秒级摄像头同步</li><li>毫米级追踪精度</li><li>移动平台硬件加速，低 CPU 占用和功耗开销</li></ul>",
        feature3_title: "完善的调试工具",
        feature3_desc: "<ul class='feature-list'><li>基于 Perfetto 的 Systrace 抓取与分析</li><li>深入剖析系统运行流程</li><li>强大的性能调优和诊断能力</li></ul>",
        feature4_title: "精确的畸变校正",
        feature4_desc: "<ul class='feature-list'><li>完善的畸变校正方法</li><li>精确的光学畸变补偿</li><li>详细的文档和实现指南</li></ul>",
        feature5_title: "增强的渲染管线",
        feature5_desc: "<ul class='feature-list'><li>优化的渲染管线与时空再投影算法</li><li>显著降低运动到光子延迟</li><li>消除鬼影和抖动伪影</li><li>有效防止晕动症</li></ul>",
        feature6_title: "多进程架构",
        feature6_desc: "<ul class='feature-list'><li>Out-of-Process 多进程架构</li><li>解决安卓平台兼容性和稳定性问题</li><li>支持多进程并发使用</li><li>支持 Overlay Sessions 等复杂场景</li></ul>",
        feature7_title: "SOC 平台优化",
        feature7_desc: "<ul class='feature-list'><li>针对高通等主流平台的 GPU 优化</li><li>显著降低 Runtime 功耗开销</li><li>提升系统整体能效</li><li>延长移动 XR 续航时间</li></ul>",
        feature8_title: "全面的技术文档",
        feature8_desc: "<ul class='feature-list'><li>完整的 Monado 工作流程文档</li><li>线程模型和架构指南</li><li>快速上手和深度定制教程</li></ul>",
        feature9_title: "双目显示模式",
        feature9_desc: "<ul class='feature-list'><li>双目同显模式（相同内容）</li><li>双目异显模式（不同内容）</li><li>完全兼容 Android 原生应用</li></ul>",
        feature11_title: "手势交互",
        feature11_desc: "<ul class='feature-list'><li>21 关节 3D 手部跟踪</li><li>关节点标记可视化</li><li>移动平台实时运行</li><li>支持单目、双目等多摄像头配置</li></ul>",
        advantages_title: "技术优势",
        advantage1_title: "原生 OpenXR 支持",
        advantage1_desc: "完全兼容 OpenXR 标准，确保与主流 XR 应用和框架无缝集成",
        advantage2_title: "安卓平台优化",
        advantage2_desc: "针对安卓生态系统深度优化，充分发挥移动平台硬件能力",
        advantage3_title: "开源与可定制",
        advantage3_desc: "基于开源 Monado 项目，支持源码级定制，满足不同场景需求",
        advantage4_title: "持续创新",
        advantage4_desc: "持续进行改进和优化，保持技术领先，提供最佳 XR 体验",
        stat1_desc: "超低显示延迟",
        stat2_desc: "姿态跟踪精度",
        stat3_desc: "功耗优化提升",
        stat4_desc: "OpenXR 兼容性",
        contact_title: "开启您的 XR 之旅",
        contact_subtitle: "准备好体验下一代 XReality 解决方案了吗？联系我们获取技术支持和定制服务。",
        contact_cta: "开始使用",
        footer_text: "© 2025 XReality. 基于开源 Monado 引擎，赋能 XR 生态。",
        comments_title: "评论"
    }
};

const setLanguage = (lang) => {
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    window.dispatchEvent(event);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    document.getElementById('lang-en').addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });

    document.getElementById('lang-zh').addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('zh');
    });
});