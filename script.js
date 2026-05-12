document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission to Mailto
    const ideaForm = document.getElementById('ideaForm');
    if (ideaForm) {
        ideaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            const idea = document.getElementById('userIdea').value;
            
            const subject = encodeURIComponent(`New Innovative Idea from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\n\nIdea Description:\n${idea}`);
            
            // Redirect to mailto link
            window.location.href = `mailto:Suryaneons@gmail.com?subject=${subject}&body=${body}`;
            
            // Optional: Reset form after a slight delay
            setTimeout(() => {
                ideaForm.reset();
            }, 1000);
        });
    }

    // Scroll reveal animation for service cards and trust items
    const revealElements = document.querySelectorAll('.service-card, .trust-item, .portfolio-item');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        revealOnScroll.observe(el);
    });
});
