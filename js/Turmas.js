document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // LOGICA DO CARROSSEL (RESTAURADA)
    // ==========================================
    const slides = document.querySelectorAll('.carousel-slide');
    const groupTabs = document.querySelectorAll('.group-tab');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        groupTabs.forEach(tab => tab.classList.remove('active'));
        
        slides[index].classList.add('active');
        if(groupTabs[index]) groupTabs[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Iniciar autoplay
    autoPlayInterval = setInterval(nextSlide, 4000);

    // Botões do Carrossel
    document.querySelector('.carousel-arrow.next')?.addEventListener('click', () => {
        nextSlide();
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 4000);
    });

    document.querySelector('.carousel-arrow.prev')?.addEventListener('click', () => {
        prevSlide();
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 4000);
    });

    // Tabs do Topo
    groupTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentSlide = index;
            showSlide(index);
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, 4000);
        });
    });

    // ==========================================
    // LOGICA DO TEMA (DARK/LIGHT)
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            
            if (isLight) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        });
    }

    // ==========================================
    // LOGICA DE IDIOMA (SIMULADA)
    // ==========================================
    const langToggle = document.getElementById('language-toggle');
    const langText = document.getElementById('current-lang');
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            if (langText.innerText === 'PT') {
                langText.innerText = 'EN';
                // Placeholder: Quando você me mandar o código de tradução, ele entra aqui
                console.log('Alterado para Inglês');
            } else {
                langText.innerText = 'PT';
                // Placeholder: E aqui
                console.log('Alterado para Português');
            }
        });
    }

    // ==========================================
    // SCROLL SUAVE (SETA)
    // ==========================================
    document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
        document.querySelector('.projects-section')?.scrollIntoView({ behavior: 'smooth' });
    });
});