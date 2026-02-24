const dom = {
    contactForm: document.getElementById('contactForm'),
    typingText: document.getElementById('typingText'),
    mobileToggle: document.querySelector('.mobile-toggle'),
    nav: document.querySelector('header nav'),
    cursorGlow: document.getElementById('cursorGlow'),
    particleCanvas: document.getElementById('particleCanvas'),
    topNav: document.getElementById('topNav')
};

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
const typingPhrases = [
    'Computer Science Graduate',
    'Programmer',
    'Full-Stack Developer',
    'AI Enthusiast',
    'Ex-Huawei Cloud Intern'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

function typeEffect() {
    const currentPhrase = typingPhrases[phraseIndex];
    if (!dom.typingText) return;

    if (!isDeleting) {
        dom.typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, PAUSE_AFTER_TYPING);
            return;
        }
        setTimeout(typeEffect, TYPING_SPEED);
    } else {
        dom.typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % typingPhrases.length;
            setTimeout(typeEffect, PAUSE_AFTER_DELETING);
            return;
        }
        setTimeout(typeEffect, DELETING_SPEED);
    }
}

typeEffect();

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
                showToast('Message sent! I\'ll get back to you soon.');
                dom.contactForm.reset();
            } else {
                showToast('Something went wrong. Please try again.');
            }
        })
        .catch(() => {
            showToast('Something went wrong. Please try again.');
        });
    });
}
