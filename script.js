// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all experience items, skill cards, and education items
document.querySelectorAll('.experience-item, .skill-card, .education-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-light)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// Smooth color transition on load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Interactive button effects
document.querySelectorAll('.profile-actions .btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent.trim();
        if (action.includes('LinkedIn')) {
            window.open('https://linkedin.com', '_blank');
        } else if (action.includes('연락처')) {
            window.location.href = 'mailto:jihae.lee@example.com';
        }
    });
});

console.log('🚀 Professional Homepage loaded successfully!');
console.log('🎨 Modern color scheme with gradient design');
console.log('✨ 2024 Latest UI/UX trends applied');