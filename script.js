/**
 * Trae AI 电子书网站主要JavaScript功能
 * 包含章节数据、导航、模态框和交互功能
 */

// 章节数据配置
const chaptersData = [
    {
        number: "前言",
        title: "Trae AI 从小白到大神的学习之路 🧣",
        description: "围巾哥萧尘的成长故事，Trae AI 的魅力介绍，以及本书的目标与结构。了解如何从零基础成长为 AI 编程专家。",
        readTime: "8分钟",
        status: "已完成",
        fileName: "前言 Trae AI 从小白到大神的学习之路.md",
        color: "#e74c3c",
        bilibiliUrl: "https://www.bilibili.com/video/BV1Wp3tzhEfM"
    },
    {
        number: "第一章",
        title: "Trae AI 软件介绍",
        description: "深入了解 Trae AI 的核心功能、安装方法、国际版与国内版的区别，以及 Pro 版本的购买与激活流程。",
        readTime: "15分钟",
        status: "已完成",
        fileName: "第一章 Trae AI 软件介绍.md",
        color: "#3498db",
        bilibiliUrl: "https://www.bilibili.com/video/BV1FyGJzMEC9"
    },
    {
        number: "第二章",
        title: "代码仓库管理",
        description: "学习使用 Trae AI 的 Git 智能体进行代码版本管理，掌握团队协作的最佳实践和工作流程。",
        readTime: "20分钟",
        status: "已完成",
        fileName: "第二章：代码仓库管理.md",
        color: "#2ecc71",
        bilibiliUrl: "https://www.bilibili.com/video/BV1FoGxzWEE5"
    },
    {
        number: "第三章",
        title: "项目部署基础",
        description: "掌握 EdgeoneMCP 和 Vercel 的配置与使用，学会部署网页和 H5 游戏，实现项目的线上发布。",
        readTime: "25分钟",
        status: "已完成",
        fileName: "第三章：项目部署基础.MD",
        color: "#f39c12",
        bilibiliUrl: "https://www.bilibili.com/video/BV1unMozyE7M"
    },
    {
        number: "第四章",
        title: "MCP 环境搭建",
        description: "深入探讨 MCP 的配置与使用，涵盖各种 MCP 工具的安装和实战应用，为高级开发做准备。",
        readTime: "30分钟",
        status: "已完成",
        fileName: "第四章：MCP 环境搭建.md",
        color: "#9b59b6",
        bilibiliUrl: "https://www.bilibili.com/video/BV1gE3CzJEGa"
    },
    {
        number: "第五章",
        title: "构建你的智能体",
        description: "学习智能体的生成、调试与使用，掌握 AI 助手的定制化开发，提升开发效率和代码质量。",
        readTime: "35分钟",
        status: "已完成",
        fileName: "第五章：构建你的智能体.md",
        color: "#1abc9c",
        bilibiliUrl: "https://www.bilibili.com/video/BV1b6gwzFEe9"
    },
    {
        number: "第六章",
        title: "网页的开发",
        description: "从零开始学习网页开发，包括 HTML、CSS、JavaScript 的实战应用，以及响应式设计的最佳实践。",
        readTime: "40分钟",
        status: "已完成",
        fileName: "第六章 网页的开发.md",
        color: "#e67e22",
        bilibiliUrl: "https://www.bilibili.com/video/BV17ugTzdENF"
    },
    {
        number: "第七章",
        title: "谷歌插件开发与发布",
        description: "详细讲解 Chrome 插件的开发流程，从创意到发布的完整过程，包括实战案例'文图宝'插件的开发。",
        readTime: "45分钟",
        status: "已完成",
        fileName: "第七章：谷歌插件开发与发布.md",
        color: "#34495e",
        bilibiliUrl: "https://www.bilibili.com/video/BV1NAM9z8EY6"
    },
    {
        number: "第八章",
        title: "微信小程序的开发与发布",
        description: "学习微信小程序开发，从环境搭建到发布上线，包括'呼吸卡片'小程序的完整开发案例。",
        readTime: "50分钟",
        status: "已完成",
        fileName: "第八章：微信小程序的开发与发布.md",
        color: "#16a085",
        bilibiliUrl: "https://www.bilibili.com/video/BV1AMQhY8EDx"
    },
    {
        number: "第九章",
        title: "桌面软件的打造",
        description: "探索桌面应用开发，学习使用现代技术栈构建跨平台桌面软件，提升用户体验和功能完整性。",
        readTime: "55分钟",
        status: "已完成",
        fileName: "第九章：桌面软件的打造.md",
        color: "#8e44ad",
        bilibiliUrl: "https://www.bilibili.com/video/BV12yGqzcEAv"
    }
];

/**
 * 页面加载完成后初始化所有功能
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadChapters();
    initializeScrollEffects();
    initializeAnimations();
});

/**
 * 初始化导航功能
 * 包括平滑滚动和活动状态切换
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // 为导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // 平滑滚动到目标区域
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 更新活动状态
                updateActiveNavLink(this);
            }
        });
    });
    
    // 监听滚动事件，自动更新导航状态
    window.addEventListener('scroll', throttle(updateNavOnScroll, 100));
}

/**
 * 更新导航链接的活动状态
 * @param {Element} activeLink - 当前活动的导航链接
 */
function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

/**
 * 根据滚动位置更新导航状态
 */
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLinks[index]) {
                navLinks[index].classList.add('active');
            }
        }
    });
}

/**
 * 动态加载章节内容到页面
 */
function loadChapters() {
    const chaptersGrid = document.getElementById('chaptersGrid');
    
    if (!chaptersGrid) {
        console.error('章节容器未找到');
        return;
    }
    
    chaptersGrid.innerHTML = '';
    
    chaptersData.forEach((chapter, index) => {
        const chapterCard = createChapterCard(chapter, index);
        chaptersGrid.appendChild(chapterCard);
    });
}

/**
 * 创建章节卡片元素
 * @param {Object} chapter - 章节数据
 * @param {number} index - 章节索引
 * @returns {Element} 章节卡片DOM元素
 */
function createChapterCard(chapter, index) {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.borderLeft = `4px solid ${chapter.color}`;
    
    card.innerHTML = `
        <div class="chapter-number" style="background-color: ${chapter.color}">${chapter.number}</div>
        <h3 class="chapter-title" style="color: ${chapter.color}">${chapter.title}</h3>
        <p class="chapter-description">${chapter.description}</p>
        <div class="chapter-meta">
            <div class="chapter-status">
                <i class="fas fa-check-circle" style="color: ${chapter.color};"></i>
                <span>${chapter.status}</span>
            </div>
            <div class="chapter-time">
                <i class="fas fa-clock" style="color: ${chapter.color};"></i>
                <span>${chapter.readTime}</span>
            </div>
        </div>
        <div class="chapter-actions">
            <div class="action-hint">
                <i class="fas fa-mouse-pointer"></i>
                <span>点击进入阅读模式</span>
            </div>
        </div>
    `;
    
    // 添加点击事件跳转到新的阅读页面
    card.addEventListener('click', () => openReadingPage(chapter, index));
    
    return card;
}

/**
 * 打开章节阅读模态框
 * @param {Object} chapter - 章节数据
 */
function openChapterModal(chapter) {
    const modal = document.getElementById('chapterModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalTitle || !modalContent) {
        console.error('模态框元素未找到');
        return;
    }
    
    modalTitle.textContent = `${chapter.number}: ${chapter.title}`;
    modalContent.innerHTML = '<div class="loading">正在加载章节内容...</div>';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 模拟加载章节内容
    loadChapterContent(chapter.fileName)
        .then(content => {
            modalContent.innerHTML = content;
        })
        .catch(error => {
            modalContent.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>内容加载失败</h3>
                    <p>抱歉，无法加载章节内容。请稍后重试。</p>
                    <p class="error-details">错误信息: ${error.message}</p>
                </div>
            `;
        });
}

/**
 * 加载章节内容
 * @param {string} fileName - 文件名
 * @returns {Promise<string>} 章节内容
 */
async function loadChapterContent(fileName) {
    try {
        const response = await fetch(`./book/${fileName}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const content = await response.text();
        return formatMarkdownContent(content);
    } catch (error) {
        console.error('加载章节内容失败:', error);
        throw error;
    }
}

/**
 * 格式化Markdown内容为HTML
 * @param {string} markdown - Markdown文本
 * @returns {string} 格式化后的HTML
 */
function formatMarkdownContent(markdown) {
    // 配置marked.js选项
    marked.setOptions({
        highlight: function(code, lang) {
            // 使用highlight.js进行代码高亮
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(code, { language: lang }).value;
                } catch (err) {
                    console.warn('代码高亮失败:', err);
                }
            }
            return hljs.highlightAuto(code).value;
        },
        breaks: true,        // 支持换行
        gfm: true,          // 支持GitHub风格的Markdown
        tables: true,       // 支持表格
        sanitize: false,    // 允许HTML标签
        smartLists: true,   // 智能列表
        smartypants: true   // 智能标点符号
    });
    
    try {
        // 使用marked.js解析Markdown
        const html = marked.parse(markdown);
        return `<div class="chapter-content">${html}</div>`;
    } catch (error) {
        console.error('Markdown解析失败:', error);
        // 降级到简单解析
        return formatMarkdownContentFallback(markdown);
    }
}

/**
 * 降级的Markdown解析函数
 * @param {string} markdown - Markdown文本
 * @returns {string} 格式化后的HTML
 */
function formatMarkdownContentFallback(markdown) {
    let html = markdown
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    return `<div class="chapter-content"><p>${html}</p></div>`;
}

/**
 * 跳转到新的阅读页面
 * @param {Object} chapter - 章节数据
 * @param {number} index - 章节索引
 */
function openReadingPage(chapter, index) {
    // 跳转到新的阅读页面，传递章节索引作为参数
    window.location.href = `reading.html?chapter=${index}`;
}

/**
 * 打开阅读模式（保留原有功能用于兼容）
 * @param {Object} chapter - 章节数据
 */
function openReadingMode(chapter) {
    const chaptersView = document.getElementById('chaptersView');
    const readingView = document.getElementById('readingView');
    const readingTitle = document.getElementById('readingTitle');
    const contentArea = document.getElementById('contentArea');
    const videoFrame = document.getElementById('readingVideoFrame');
    
    if (chaptersView && readingView && readingTitle && contentArea && videoFrame) {
        // 隐藏章节目录视图，显示阅读视图
        chaptersView.style.display = 'none';
        readingView.style.display = 'block';
        
        // 设置标题
        readingTitle.textContent = `${chapter.number} - ${chapter.title}`;
        
        // 加载章节内容
        contentArea.innerHTML = '<div class="loading">正在加载章节内容...</div>';
        
        loadChapterContent(chapter.fileName)
            .then(content => {
                contentArea.innerHTML = content;
            })
            .catch(error => {
                contentArea.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>内容加载失败</h3>
                        <p>抱歉，无法加载章节内容。请稍后重试。</p>
                        <p class="error-details">错误信息: ${error.message}</p>
                    </div>
                `;
            });
        
        // 设置视频
        const bvMatch = chapter.bilibiliUrl.match(/BV[a-zA-Z0-9]+/);
        if (bvMatch) {
            const bvid = bvMatch[0];
            videoFrame.src = `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&autoplay=0&high_quality=1&danmaku=0`;
        } else {
            videoFrame.src = chapter.bilibiliUrl;
        }
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * 返回章节目录
 */
function backToChapters() {
    const chaptersView = document.getElementById('chaptersView');
    const readingView = document.getElementById('readingView');
    const videoFrame = document.getElementById('readingVideoFrame');
    
    if (chaptersView && readingView) {
        // 显示章节目录视图，隐藏阅读视图
        chaptersView.style.display = 'block';
        readingView.style.display = 'none';
        
        // 停止视频播放
        if (videoFrame) {
            videoFrame.src = '';
        }
        
        // 滚动到章节部分
        scrollToChapters();
    }
}

/**
 * 关闭模态框
 */
function closeModal() {
    const chapterModal = document.getElementById('chapterModal');
    const videoModal = document.getElementById('videoModal');
    
    if (chapterModal) {
        chapterModal.style.display = 'none';
    }
    
    if (videoModal) {
        videoModal.style.display = 'none';
        // 停止视频播放
        const videoFrame = document.getElementById('videoFrame');
        if (videoFrame) {
            videoFrame.src = '';
        }
    }
    
    document.body.style.overflow = 'auto';
}

/**
 * 关闭视频模态框
 */
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // 停止视频播放
        const videoFrame = document.getElementById('videoFrame');
        if (videoFrame) {
            videoFrame.src = '';
        }
    }
}

/**
 * 滚动到章节部分
 */
function scrollToChapters() {
    const chaptersSection = document.getElementById('chapters');
    if (chaptersSection) {
        chaptersSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * 初始化滚动效果
 */
function initializeScrollEffects() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }, 100));
    
    // 元素进入视口动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察章节卡片
    document.querySelectorAll('.chapter-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * 初始化动画效果
 */
function initializeAnimations() {
    // 为章节卡片添加悬停效果
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.chapter-card')) {
            const card = e.target.closest('.chapter-card');
            card.style.transform = 'translateY(-5px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.chapter-card')) {
            const card = e.target.closest('.chapter-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
}

/**
 * 节流函数，限制函数执行频率
 * @param {Function} func - 要执行的函数
 * @param {number} limit - 限制时间间隔（毫秒）
 * @returns {Function} 节流后的函数
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 处理移动端导航菜单
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// 点击模态框外部关闭模态框
window.addEventListener('click', (e) => {
    const modal = document.getElementById('chapterModal');
    if (e.target === modal) {
        closeModal();
    }
});

// ESC键关闭模态框
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// 导出函数供HTML调用
window.scrollToChapters = scrollToChapters;
window.closeModal = closeModal;
window.closeVideoModal = closeVideoModal;
window.openReadingMode = openReadingMode;
window.backToChapters = backToChapters;
window.toggleMobileMenu = toggleMobileMenu;

// 页面性能优化
window.addEventListener('load', () => {
    // 预加载关键资源
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});

console.log('🧣 Trae AI 电子书网站已加载完成！');