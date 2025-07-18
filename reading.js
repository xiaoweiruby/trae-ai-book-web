/**
 * 阅读页面JavaScript功能
 * 处理章节内容加载、视频播放和页面交互
 */

// 章节数据配置（与主页面保持一致）
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
 * 页面加载完成后初始化
 */
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

/**
 * 初始化页面
 */
function initializePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterIndex = urlParams.get('chapter');
    
    if (chapterIndex !== null && chapterIndex >= 0 && chapterIndex < chaptersData.length) {
        const chapter = chaptersData[parseInt(chapterIndex)];
        loadChapter(chapter);
    } else {
        // 如果没有指定章节或章节无效，显示错误信息
        showError('未找到指定章节', '请返回首页选择要阅读的章节。');
    }
}

/**
 * 加载章节内容
 * @param {Object} chapter - 章节数据
 */
function loadChapter(chapter) {
    // 设置页面标题
    document.title = `${chapter.number} - ${chapter.title} | Trae AI 学习之路`;
    
    // 设置章节标题
    const readingTitle = document.getElementById('readingTitle');
    if (readingTitle) {
        readingTitle.textContent = `${chapter.number} - ${chapter.title}`;
    }
    
    // 加载视频
    loadVideo(chapter);
    
    // 加载文档内容
    loadContent(chapter);
}

/**
 * 加载视频
 * @param {Object} chapter - 章节数据
 */
function loadVideo(chapter) {
    const videoFrame = document.getElementById('videoFrame');
    if (!videoFrame) {
        console.error('视频框架元素未找到');
        return;
    }
    
    try {
        // 从B站URL中提取BV号
        const bvMatch = chapter.bilibiliUrl.match(/BV[a-zA-Z0-9]+/);
        if (bvMatch) {
            const bvid = bvMatch[0];
            // 构建嵌入式播放器URL
            videoFrame.src = `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&autoplay=0&high_quality=1&danmaku=0`;
        } else {
            // 如果无法提取BV号，直接使用原URL
            videoFrame.src = chapter.bilibiliUrl;
        }
    } catch (error) {
        console.error('视频加载失败:', error);
        // 显示视频加载错误
        const videoContainer = videoFrame.parentElement;
        if (videoContainer) {
            videoContainer.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>视频加载失败</h3>
                    <p>无法加载配套视频，请稍后重试。</p>
                    <a href="${chapter.bilibiliUrl}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-bilibili"></i>
                        在B站观看
                    </a>
                </div>
            `;
        }
    }
}

/**
 * 加载章节内容
 * @param {Object} chapter - 章节数据
 */
function loadContent(chapter) {
    const contentArea = document.getElementById('contentArea');
    if (!contentArea) {
        console.error('内容区域元素未找到');
        return;
    }
    
    // 显示加载状态
    contentArea.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            正在加载章节内容...
        </div>
    `;
    
    // 加载Markdown文件
    loadChapterContent(chapter.fileName)
        .then(content => {
            contentArea.innerHTML = content;
            // 高亮代码块
            highlightCodeBlocks();
        })
        .catch(error => {
            console.error('内容加载失败:', error);
            contentArea.innerHTML = `
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
 * 加载章节内容文件
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
    // 检查是否有marked.js库
    if (typeof marked !== 'undefined') {
        // 配置marked.js选项
        marked.setOptions({
            highlight: function(code, lang) {
                // 使用highlight.js进行代码高亮
                if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(code, { language: lang }).value;
                    } catch (err) {
                        console.warn('代码高亮失败:', err);
                    }
                }
                return typeof hljs !== 'undefined' ? hljs.highlightAuto(code).value : code;
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
            return marked.parse(markdown);
        } catch (error) {
            console.error('Markdown解析失败:', error);
            // 降级到简单解析
            return formatMarkdownContentFallback(markdown);
        }
    } else {
        // 如果没有marked.js，使用降级解析
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
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    return `<p>${html}</p>`;
}

/**
 * 高亮代码块
 */
function highlightCodeBlocks() {
    if (typeof hljs !== 'undefined') {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }
}

/**
 * 显示错误信息
 * @param {string} title - 错误标题
 * @param {string} message - 错误消息
 */
function showError(title, message) {
    const contentArea = document.getElementById('contentArea');
    const readingTitle = document.getElementById('readingTitle');
    
    if (readingTitle) {
        readingTitle.textContent = title;
    }
    
    if (contentArea) {
        contentArea.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>${title}</h3>
                <p>${message}</p>
                <button class="btn btn-primary" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                    返回首页
                </button>
            </div>
        `;
    }
}

/**
 * 返回首页
 */
function goBack() {
    // 检查是否有历史记录
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // 如果没有历史记录，直接跳转到首页
        window.location.href = 'index.html';
    }
}

// 导出函数供HTML调用
window.goBack = goBack;

console.log('🧣 阅读页面已加载完成！');