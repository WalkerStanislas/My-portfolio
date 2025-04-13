// Navigation et défilement fluide
document.addEventListener('DOMContentLoaded', () => {
    // Menu actif sur défilement
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.parentElement.classList.add('active');
            }
        });
    });
    
    // Animation sur défilement
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .certifications-container, .projects-container, .services-container, .contact form, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('show-animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Vérifier au chargement initial
    
    // Formulaire de contact
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi du formulaire
            const submitBtn = this.querySelector('input[type="submit"]');
            const originalText = submitBtn.value;
            
            submitBtn.value = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                const inputs = this.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
                inputs.forEach(input => input.value = '');
                
                submitBtn.value = 'Message Envoyé !';
                
                setTimeout(() => {
                    submitBtn.value = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // Animation de texte
    const animateText = () => {
        const dynamicText = document.querySelector('.home-info h2');
        if (dynamicText) {
            const spans = dynamicText.querySelectorAll('span');
            let index = 0;
            
            setInterval(() => {
                spans.forEach(span => span.style.color = 'transparent');
                spans[index].style.color = '#7cf03d';
                
                index = (index + 1) % spans.length;
            }, 2000);
        }
    };
    
    animateText();
});

// Ajout de classes pour les animations CSS
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .about-content, .certifications-container, .projects-container, 
        .services-container, .contact form, .contact-info {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .show-animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});