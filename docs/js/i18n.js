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
        features_title: "Core Technical Features",
        feature1_title: "Single Buffer Rendering",
        feature1_desc: "Supports Single Buffer Rendering technology, rendering directly to display buffers for ultra-low latency rendering, minimizing display latency for smoother XR experiences.",
        feature2_title: "Real-time 3DOF Pose Fusion",
        feature2_desc: "Provides more precise pose prediction than Monado's default effects, supports magnetic fusion and IMU online calibration, ensuring accuracy and stability of head tracking.",
        feature3_title: "Comprehensive Debugging Tools",
        feature3_desc: "Supports capturing Systrace through Perfetto tools for in-depth analysis of entire system runtime flow, providing powerful performance tuning and diagnostic capabilities.",
        feature4_title: "Precise Distortion Correction",
        feature4_desc: "Provides comprehensive distortion correction methods with detailed documentation, combined with Monado's built-in algorithms for accurate optical distortion compensation.",
        feature5_title: "Enhanced Rendering Pipeline",
        feature5_desc: "Optimized rendering pipeline and spatiotemporal reprojection prediction algorithms, maintaining high frame rates while significantly reducing motion-to-photon latency, eliminating ghosting and judder, effectively preventing motion sickness for comfortable and stable immersive experiences.",
        feature6_title: "Multi-Process Architecture",
        feature6_desc: "Supports Out-of-Process multi-process architecture, resolving Android platform compatibility and stability issues, supporting concurrent multi-process usage and complex scenarios like Overlay Sessions.",
        feature7_title: "SOC Platform Optimization",
        feature7_desc: "GPU performance optimizations for mainstream platforms like Qualcomm, significantly reducing Runtime power overhead and improving overall system energy efficiency and battery life.",
        feature8_title: "Comprehensive Technical Documentation",
        feature8_desc: "Provides complete technical documentation covering Monado's overall workflow, threading model, and other key technical aspects, helping developers get started quickly and customize deeply.",
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
        footer_text: "© 2025 XReality. Based on open-source Monado engine, empowering the XR ecosystem."
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
        features_title: "核心技术特性",
        feature1_title: "单缓冲渲染",
        feature1_desc: "支持单缓冲渲染技术，直接渲染到显示缓冲区，实现超低延迟渲染，最大程度减少显示延迟，带来更流畅的 XR 体验。",
        feature2_title: "实时 3DOF 姿态融合",
        feature2_desc: "提供比 Monado 默认效果更精准的位姿预测，支持磁融合和 IMU 在线校准，确保头部追踪的准确性和稳定性。",
        feature3_title: "完善的调试工具",
        feature3_desc: "支持通过 Perfetto 工具抓取 Systrace，深入分析整个系统运行流程，提供强大的性能调优和诊断能力。",
        feature4_title: "精确的畸变校正",
        feature4_desc: "提供完善的畸变校正方法和详细文档，结合 Monado 内置算法，实现精确的光学畸变补偿。",
        feature5_title: "增强的渲染管线",
        feature5_desc: "优化的渲染管线和时空再投影预测算法，在维持高帧率的同时，显著降低运动到光子延迟，消除鬼影和抖动，有效防止晕动症，提供舒适稳定的沉浸式体验。",
        feature6_title: "多进程架构",
        feature6_desc: "支持 Out-of-Process 多进程架构，解决安卓平台的兼容性和稳定性问题，支持多进程并发使用和 Overlay Sessions 等复杂场景。",
        feature7_title: "SOC 平台优化",
        feature7_desc: "针对高通等主流平台的 GPU 性能优化，显著降低 Runtime 功耗开销，提升系统整体能效和续航。",
        feature8_title: "全面的技术文档",
        feature8_desc: "提供完整的技术文档，涵盖 Monado 整体工作流程、线程模型等关键技术，帮助开发者快速上手和深度定制。",
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
        footer_text: "© 2025 XReality. 基于开源 Monado 引擎，赋能 XR 生态。"
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