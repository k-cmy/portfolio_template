const contactForm = document.getElementById('contactForm');

function showToast(message) {
    const oldToast = document.querySelector('.toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2200);
}

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        showToast('Thanks! Your message has been captured. Connect this form to your email backend.');
        contactForm.reset();
    });
}

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealItems.forEach(item => revealObserver.observe(item));
