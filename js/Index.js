        // Smooth scroll
        document.querySelector('.scroll-indicator').addEventListener('click', () => {
            document.querySelector('.classes-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });

        // Parallax effect on cards
        document.querySelectorAll('.class-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });

        // Scroll reveal animation
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

        document.querySelectorAll('.class-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.8s ease';
            observer.observe(card);
        });