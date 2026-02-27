/* ═══════════════════════════════════════════
   i18n Translations
   ═══════════════════════════════════════════ */
const translations = {
    en: {
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.certifications": "Certifications",
        "nav.awards": "Awards",
        "nav.about": "About",
        "nav.contact": "Contact",

        "hero.greeting": "Hello, I'm",
        "hero.desc": "CS graduate and ex-Huawei Cloud intern with hands-on experience in MLOps, full-stack development, and AI-powered applications. I build end-to-end solutions from deep learning models to cloud-deployed APIs.",
        "hero.cta.work": "View My Work",
        "hero.cta.contact": "Get In Touch",

        "exp.eyebrow": "Experience",
        "exp.title": "Work Experience",
        "exp.role": "Cloud Solutions Architect Intern",
        "exp.company": "Huawei Cloud Malaysia",
        "exp.desc1": "Designed and deployed end-to-end MLOps automation pipelines on Huawei Cloud, enabling clients to predict future pricing by simply uploading data. Productionized an XGBoost model using ModelArts Workflow to automate training, model registration, and real-time service deployment across OBS, SWR, and ECS.",
        "exp.desc2": "Built a serverless file transfer system using FunctionGraph that auto-triggers on OBS uploads, securely transfers files to SFTP servers via Paramiko, and handles credential management and retry logic for fault tolerance.",
        "exp.certLink": "Completion Certificate",

        "proj.eyebrow": "Projects",
        "proj.title": "Things I've Built",
        "proj.bank.badge": "In Progress",
        "proj.bank.desc": "Secure backend digital banking REST API with JWT-based stateless authentication, role-based access control (Admin, Customer, Auditor), user profile management, and async email notifications with custom Thymeleaf templates.",
        "proj.rag.desc": "Backend API that ingests financial documents (PDF/TXT/MD), chunks and embeds them into a vector database, and answers questions through a Retrieval-Augmented Generation pipeline powered by Gemini LLM.",
        "proj.ccr.name": "Effective Color Cast Removal",
        "proj.ccr.date": "Mar 2025 – Jun 2025 · Final Year Project",
        "proj.ccr.desc": "Full-stack web application for automatic color cast removal from images using a custom deep learning model trained with TensorFlow/Keras. Features a React dashboard with image comparison, RGB histogram visualization, and processing history, backed by a Flask API deployed on Google Cloud Run.",
        "proj.btn.model": "Model",
        "proj.btn.frontend": "Frontend",
        "proj.btn.backend": "Backend",
        "proj.btn.live": "Live Site",
        "proj.awas.date": "May 2025 · FIT3182 Big Data",
        "proj.awas.desc": "Real-time speed enforcement platform simulating a three-camera highway segment. Kafka producers stream vehicle events into Spark Structured Streaming for violation detection (instantaneous and average speed), with results stored in MongoDB and visualized via interactive dashboards.",
        "proj.tetris.name": "Tetris Game",
        "proj.tetris.date": "Aug 2023 – Sep 2023 · FIT 2102 Programming Paradigms",
        "proj.tetris.desc": "Reactive rendition of the classic Tetris game built with Functional Reactive Programming principles. Uses RxJS observables for game state management, keyboard input streams, and tick-based rendering for a clean, declarative codebase.",

        "brand.name": "Min Yi Chung (Kimberley)",

        "skills.eyebrow": "Skills",
        "skills.title": "Technologies & Tools",
        "skills.cat.lang": "Languages",
        "skills.cat.ai": "AI & Machine Learning",
        "skills.cat.data": "Data & Analytics",
        "skills.cat.frameworks": "Frameworks & Backend",
        "skills.cat.cloud": "Cloud & MLOps",
        "skills.cat.tools": "Developer Tools",

        "cert.eyebrow": "Certifications",
        "cert.title": "Continuous Learning",
        "cert.hcia.issuer": "Huawei Certified ICT Associate",
        "cert.powerbi.name": "Complete Guide to Power BI for Data Analysts",

        "awards.eyebrow": "Awards",
        "awards.title": "Recognition",
        "awards.fyp.name": "1st Runner Up — SOIT Outstanding FYP Award",
        "awards.fyp.org": "Monash University Malaysia",
        "awards.fyp.detail": "Awarded second prize at the Computer Science and Data Science Final Year Project (FYP) Award Day, organized by the School of Information Technology (SOIT) in collaboration with Ant International.",
        "awards.fyp.certLink": "View Certificate",

        "about.eyebrow": "About",
        "about.title": "A Little About Me",
        "about.p1": "Hi! I'm Kimberley -- a Computer Science (Data Science) graduate from Monash University Malaysia and former Cloud Solutions Architect intern at Huawei. I've built everything from RAG-powered AI APIs and deep learning models to real-time big data streaming pipelines and full-stack web applications deployed on the cloud.",
        "about.p2": "I'm currently seeking roles in full-stack development, backend engineering, cloud architecture, AI/ML engineering, or data science -- anywhere I can solve real problems with code and continue growing as an engineer.",
        "about.p3": '<strong>Fun fact:</strong> Before I got into tech, I was a Malaysian national-trained <a href="https://www.gymnastics.sport/site/athletes/bio_detail.php?id=44301&type=licence" target="_blank" rel="noopener" style="color:var(--accent)">rhythmic gymnast</a> -- so I\'m no stranger to discipline, precision, and pushing past limits.',
        "about.hl.degree": "BSc Computer Science in Data Science",
        "about.hl.remote": "Open to On-Site/Remote/Hybrid",
        "about.hl.roles": "Open to Full-Time Graduate/Junior Roles",
        "about.hl.focus": "Full-Stack, Cloud, Data & AI",

        "contact.eyebrow": "Contact",
        "contact.title": "Get In Touch",
        "contact.blurb": "I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi -- my inbox is always open!",
        "contact.ph.name": "Your name",
        "contact.ph.email": "Your email",
        "contact.ph.msg": "Your message",
        "contact.send": "Send Message",

        "footer.credit": "Designed & Built by Min Yi Chung (Kimberley)",

        "toast.success": "Message sent! I'll get back to you soon.",
        "toast.error": "Something went wrong. Please try again.",

        "typing": [
            "Computer Science Graduate",
            "Programmer",
            "Full-Stack Developer",
            "AI Enthusiast",
            "Ex-Huawei Cloud Intern"
        ]
    },

    zh: {
        "nav.experience": "工作经历",
        "nav.projects": "项目",
        "nav.skills": "技能",
        "nav.certifications": "证书",
        "nav.awards": "奖项",
        "nav.about": "关于我",
        "nav.contact": "联系我",

        "hero.greeting": "你好，我是",
        "hero.desc": "计算机科学毕业生，前华为云实习生，在MLOps、全栈开发和AI应用方面拥有实践经验。我构建从深度学习模型到云端部署API的端到端解决方案。",
        "hero.cta.work": "查看我的作品",
        "hero.cta.contact": "联系我",

        "exp.eyebrow": "工作经历",
        "exp.title": "工作经验",
        "exp.role": "云解决方案架构师实习生",
        "exp.company": "华为云马来西亚",
        "exp.desc1": "在华为云上设计并部署了端到端的MLOps自动化流水线，使客户只需上传数据即可预测未来价格走势。使用ModelArts Workflow将XGBoost模型产品化，实现跨OBS、SWR和ECS的自动化训练、模型注册和实时服务部署。",
        "exp.desc2": "使用FunctionGraph构建了无服务器文件传输系统，在OBS上传时自动触发，通过Paramiko安全地将文件传输到SFTP服务器，并处理凭据管理和重试逻辑以实现容错。",
        "exp.certLink": "实习完成证书",

        "proj.eyebrow": "项目",
        "proj.title": "我构建的项目",
        "proj.bank.badge": "进行中",
        "proj.bank.desc": "安全的后端数字银行REST API，具有基于JWT的无状态认证、基于角色的访问控制（管理员、客户、审计员）、用户资料管理，以及使用自定义Thymeleaf模板的异步邮件通知。",
        "proj.rag.desc": "后端API，可摄取财务文档（PDF/TXT/MD），将其分块并嵌入向量数据库，通过由Gemini LLM驱动的检索增强生成（RAG）流水线回答问题。",
        "proj.ccr.name": "高效色偏去除",
        "proj.ccr.date": "2025年3月 – 2025年6月 · 毕业设计",
        "proj.ccr.desc": "全栈Web应用程序，使用TensorFlow/Keras训练的自定义深度学习模型自动去除图像色偏。具备React仪表板，支持图像对比、RGB直方图可视化和处理历史记录，后端由部署在Google Cloud Run上的Flask API提供支持。",
        "proj.btn.model": "模型",
        "proj.btn.frontend": "前端",
        "proj.btn.backend": "后端",
        "proj.btn.live": "在线演示",
        "proj.awas.date": "2025年5月 · FIT3182 大数据",
        "proj.awas.desc": "实时超速执法平台，模拟三摄像头高速公路路段。Kafka生产者将车辆事件流式传输到Spark Structured Streaming进行违规检测（瞬时速度和平均速度），结果存储在MongoDB中并通过交互式仪表板可视化。",
        "proj.tetris.name": "俄罗斯方块游戏",
        "proj.tetris.date": "2023年8月 – 2023年9月 · FIT 2102 编程范式",
        "proj.tetris.desc": "使用函数式响应编程原则构建的经典俄罗斯方块游戏。使用RxJS可观察对象进行游戏状态管理、键盘输入流和基于时钟的渲染，实现简洁的声明式代码库。",

        "brand.name": "曾敏苡 (Kimberley)",

        "skills.eyebrow": "技能",
        "skills.title": "技术与工具",
        "skills.cat.lang": "编程语言",
        "skills.cat.ai": "AI 与机器学习",
        "skills.cat.data": "数据与分析",
        "skills.cat.frameworks": "框架与后端",
        "skills.cat.cloud": "云计算与MLOps",
        "skills.cat.tools": "开发工具",

        "cert.eyebrow": "证书",
        "cert.title": "持续学习",
        "cert.hcia.issuer": "华为认证ICT工程师",
        "cert.powerbi.name": "数据分析师Power BI完全指南",

        "awards.eyebrow": "奖项",
        "awards.title": "所获荣誉",
        "awards.fyp.name": "亚军 — SOIT杰出毕业设计奖",
        "awards.fyp.org": "莫纳什大学马来西亚分校",
        "awards.fyp.detail": "在信息技术学院（SOIT）与蚂蚁国际合作举办的计算机科学与数据科学毕业设计（FYP）颁奖日上获得二等奖。",
        "awards.fyp.certLink": "查看证书",

        "about.eyebrow": "关于",
        "about.title": "关于我",
        "about.p1": "你好！我是Kimberley——莫纳什大学马来西亚分校计算机科学（数据科学）毕业生，前华为云解决方案架构师实习生。我构建过RAG驱动的AI API、深度学习模型、实时大数据流处理管道，以及部署在云端的全栈Web应用。",
        "about.p2": "我目前正在寻找全栈开发、后端工程、云架构、AI/ML工程或数据科学方面的职位——任何能让我用代码解决实际问题并持续成长的机会。",
        "about.p3": '<strong>趣闻：</strong>在进入科技行业之前，我曾是马来西亚国家队训练的<a href="https://www.gymnastics.sport/site/athletes/bio_detail.php?id=44301&type=licence" target="_blank" rel="noopener" style="color:var(--accent)">艺术体操运动员</a>——所以我对纪律、精确和突破极限并不陌生。',
        "about.hl.degree": "计算机科学（数据科学）学士",
        "about.hl.remote": "接受现场/远程/混合办公",
        "about.hl.roles": "寻求全职应届/初级职位",
        "about.hl.focus": "全栈、云计算、数据与AI",

        "contact.eyebrow": "联系",
        "contact.title": "联系我",
        "contact.blurb": "我目前正在寻找新的机会。无论您有问题、项目想法，还是只想打个招呼——我的邮箱随时欢迎您！",
        "contact.ph.name": "您的姓名",
        "contact.ph.email": "您的邮箱",
        "contact.ph.msg": "您的留言",
        "contact.send": "发送消息",

        "footer.credit": "由曾敏苡 (Kimberley) 设计与开发",

        "toast.success": "消息已发送！我会尽快回复您。",
        "toast.error": "出了点问题，请重试。",

        "typing": [
            "计算机科学毕业生",
            "程序员",
            "全栈开发者",
            "AI爱好者",
            "前华为云实习生"
        ]
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

/* ═══════════════════════════════════════════
   DOM References
   ═══════════════════════════════════════════ */
const dom = {
    contactForm: document.getElementById('contactForm'),
    typingText: document.getElementById('typingText'),
    mobileToggle: document.querySelector('.mobile-toggle'),
    nav: document.querySelector('header nav'),
    cursorGlow: document.getElementById('cursorGlow'),
    particleCanvas: document.getElementById('particleCanvas'),
    topNav: document.getElementById('topNav'),
    langToggle: document.getElementById('langToggle')
};

/* ═══════════════════════════════════════════
   Language Switching
   ═══════════════════════════════════════════ */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    if (dom.langToggle) {
        dom.langToggle.textContent = lang === 'en' ? '中文' : 'EN';
    }

    resetTypingAnimation();
}

if (dom.langToggle) {
    dom.langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'zh' : 'en');
    });
}

/* ═══════════════════════════════════════════
   Mouse Tracking State
   ═══════════════════════════════════════════ */
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const smoothMouse = { x: mouse.x, y: mouse.y };
const isTouch = 'ontouchstart' in window;

document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

/* ═══════════════════════════════════════════
   Cursor Glow (follows mouse with smooth lag)
   ═══════════════════════════════════════════ */
function updateCursorGlow() {
    if (isTouch || !dom.cursorGlow) return;

    smoothMouse.x += (mouse.x - smoothMouse.x) * 0.12;
    smoothMouse.y += (mouse.y - smoothMouse.y) * 0.12;

    dom.cursorGlow.style.left = smoothMouse.x + 'px';
    dom.cursorGlow.style.top = smoothMouse.y + 'px';
}

/* ═══════════════════════════════════════════
   Parallax Background Orbs
   ═══════════════════════════════════════════ */
const orbs = document.querySelectorAll('.bg-orb');
const orbSpeeds = [0.03, -0.02, 0.015];

function updateOrbParallax() {
    if (isTouch) return;
    const cx = (mouse.x / window.innerWidth - 0.5) * 2;
    const cy = (mouse.y / window.innerHeight - 0.5) * 2;

    orbs.forEach((orb, i) => {
        const speed = orbSpeeds[i] || 0.02;
        const moveX = cx * speed * 200;
        const moveY = cy * speed * 200;
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

/* ═══════════════════════════════════════════
   Floating Particle System (canvas)
   ═══════════════════════════════════════════ */
const particles = [];
const PARTICLE_COUNT = 50;

function initParticles() {
    const canvas = dom.particleCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
            alpha: Math.random() * 0.4 + 0.1,
            pulse: Math.random() * Math.PI * 2
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            p.pulse += 0.01;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            const distX = mouse.x - p.x;
            const distY = mouse.y - p.y;
            const dist = Math.sqrt(distX * distX + distY * distY);

            if (dist < 200 && !isTouch) {
                p.x -= distX * 0.005;
                p.y -= distY * 0.005;
            }

            const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(114, 219, 255, ${Math.max(0, currentAlpha)})`;
            ctx.fill();
        });

        requestAnimationFrame(drawParticles);
    }

    drawParticles();
}

initParticles();

/* ═══════════════════════════════════════════
   Main Animation Loop
   ═══════════════════════════════════════════ */
function mainLoop() {
    updateCursorGlow();
    updateOrbParallax();
    requestAnimationFrame(mainLoop);
}
mainLoop();

/* ═══════════════════════════════════════════
   3D Card Tilt Effect
   ═══════════════════════════════════════════ */
document.querySelectorAll('.tilt-card').forEach(card => {
    const glowEl = card.querySelector('.card-glow');

    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 180;
        card.style.setProperty('--glow-angle', angle + 'deg');

        if (glowEl) {
            glowEl.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(114, 219, 255, 0.12) 0%, transparent 60%)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        if (glowEl) glowEl.style.background = 'transparent';
    });
});

/* ═══════════════════════════════════════════
   Magnetic Buttons
   ═══════════════════════════════════════════ */
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

/* ═══════════════════════════════════════════
   Nav Scroll Effect
   ═══════════════════════════════════════════ */
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    if (dom.topNav) {
        dom.topNav.classList.toggle('scrolled', window.scrollY > 60);
    }
    lastScrollY = window.scrollY;
}, { passive: true });

/* ═══════════════════════════════════════════
   Typing Animation
   ═══════════════════════════════════════════ */
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimer = null;
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

function getTypingPhrases() {
    return translations[currentLang].typing;
}

function typeEffect() {
    const phrases = getTypingPhrases();
    const currentPhrase = phrases[phraseIndex];
    if (!dom.typingText) return;

    if (!isDeleting) {
        dom.typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            typingTimer = setTimeout(typeEffect, PAUSE_AFTER_TYPING);
            return;
        }
        typingTimer = setTimeout(typeEffect, TYPING_SPEED);
    } else {
        dom.typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingTimer = setTimeout(typeEffect, PAUSE_AFTER_DELETING);
            return;
        }
        typingTimer = setTimeout(typeEffect, DELETING_SPEED);
    }
}

function resetTypingAnimation() {
    if (typingTimer) clearTimeout(typingTimer);
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (dom.typingText) dom.typingText.textContent = '';
    typeEffect();
}

/* ═══════════════════════════════════════════
   Scroll Reveal (with stagger via CSS)
   ═══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════
   Active Nav Link
   ═══════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a:not(.nav-indicator)');

function updateActiveNav() {
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ═══════════════════════════════════════════
   Mobile Toggle
   ═══════════════════════════════════════════ */
if (dom.mobileToggle && dom.nav) {
    dom.mobileToggle.addEventListener('click', () => {
        dom.nav.classList.toggle('open');
    });

    dom.nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => dom.nav.classList.remove('open'));
    });
}

/* ═══════════════════════════════════════════
   Toast & Contact Form
   ═══════════════════════════════════════════ */
function showToast(message) {
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2500);
}

if (dom.contactForm) {
    dom.contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(dom.contactForm);

        fetch(dom.contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(res => {
            if (res.ok) {
                showToast(translations[currentLang]['toast.success']);
                dom.contactForm.reset();
            } else {
                showToast(translations[currentLang]['toast.error']);
            }
        })
        .catch(() => {
            showToast(translations[currentLang]['toast.error']);
        });
    });
}

/* ═══════════════════════════════════════════
   Initialize Language
   ═══════════════════════════════════════════ */
setLanguage(currentLang);

/* ═══════════════════════════════════════════
   Language Hint Tooltip (once per session)
   ═══════════════════════════════════════════ */
(function showLangHint() {
    if (currentLang !== 'en') return;
    if (sessionStorage.getItem('langHintSeen')) return;

    const hint = document.getElementById('langHint');
    if (!hint) return;

    sessionStorage.setItem('langHintSeen', '1');

    setTimeout(() => hint.classList.add('visible'), 1200);

    function dismiss() {
        hint.classList.add('hiding');
        hint.classList.remove('visible');
        setTimeout(() => hint.remove(), 400);
    }

    hint.addEventListener('click', dismiss);
    setTimeout(dismiss, 10200);
})();
