// ==========================================================
// ======== ARQUIVO JAVASCRIPT PRINCIPAL (CONSOLIDADO) ========
// ==========================================================

// --- Variáveis Globais (Carrossel, Partículas) ---
// @ts-ignore
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const groupTabs = document.querySelectorAll('.group-tab');
const totalSlides = slides.length;
const videoButton = document.getElementById('botaoVideo'); // Seleção do botão de vídeo

const canvas = document.getElementById('particles-canvas');
// @ts-ignore
const ctx = canvas.getContext('2d');
// @ts-ignore
const particles = [];
// @ts-ignore
const particleCount = 100;

// ==========================================================
// ======== FUNÇÕES PRINCIPAIS (CARROSSEL) ========
// ==========================================================

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    groupTabs.forEach(tab => tab.classList.remove('active'));
    
    slides[index].classList.add('active');
    groupTabs[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// ==========================================================
// ======== SISTEMA DE PARTÍCULAS (BACKGROUND) ========
// ==========================================================

// @ts-ignore
class Particle {
    constructor() {
        // @ts-ignore
        this.x = Math.random() * canvas.width;
        // @ts-ignore
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // @ts-ignore
        if (this.x > canvas.width) this.x = 0;
        // @ts-ignore
        if (this.x < 0) this.x = canvas.width;
        // @ts-ignore
        if (this.y > canvas.height) this.y = 0;
        // @ts-ignore
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    // @ts-ignore
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

// ==========================================================
// ======== INICIALIZAÇÃO E EVENT LISTENERS ========
// ==========================================================

// Inicializa Partículas
initParticles();
animateParticles();

// Auto-play carousel (3 seconds)
let autoPlay = setInterval(nextSlide, 3000);

// --- Controles de Carrossel ---
// Arrow button controls
// @ts-ignore
document.querySelector('.carousel-arrow.next').addEventListener('click', nextSlide);
// @ts-ignore
document.querySelector('.carousel-arrow.prev').addEventListener('click', prevSlide);

// Group tab controls
groupTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Pause on hover
// @ts-ignore
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
});

// @ts-ignore
document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextSlide, 3000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});


// --- Efeitos Visuais e Interação ---

// 🚀 NOVO: EVENTO PARA O BOTÃO DE VÍDEO
if (videoButton) {
    videoButton.addEventListener('click', (e) => {
        // Ação: Pausa o carrossel quando o botão de vídeo é clicado
        clearInterval(autoPlay);
        console.log('Botão de vídeo acionado! Carrossel pausado.');
    });
}

// Smooth scroll for scroll indicator
// @ts-ignore
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    // @ts-ignore
    document.querySelector('.projects-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// --- Mouse Parallax Effect for Project Cards ---
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        // @ts-ignore
        const x = e.clientX - rect.left;
        // @ts-ignore
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        // @ts-ignore
        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        // @ts-ignore
        card.style.transform = '';
    });
});

// --- Smooth Scroll Reveal Animation (Intersection Observer) ---
// @ts-ignore
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

// @ts-ignore
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});


// --- Lógica de Redimensionamento e Scroll ---

// Resize canvas on window resize
window.addEventListener('resize', () => {
    // @ts-ignore
    canvas.width = window.innerWidth;
    // @ts-ignore
    canvas.height = document.documentElement.scrollHeight;
});

// Update canvas height on scroll (for long pages)
// @ts-ignore
let resizeTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // @ts-ignore
        canvas.height = document.documentElement.scrollHeight;
    }, 100);
});

// ==========================================================
// ======== NOVO: LÓGICA DE VÍDEO NO HOVER DO CARD ========
// ==========================================================
// Seleciona todos os CARDS que possuem um vídeo com a classe .video-hover (na verdade o video-hover é o container da imagem)
document.querySelectorAll('.project-card').forEach(card => {
    // Procura o container da imagem que tem a classe video-hover
    const videoContainer = card.querySelector('.project-image.video-hover');
    
    if (videoContainer) {
        // Procura o elemento de vídeo dentro desse container
        const video = videoContainer.querySelector('video');
        
        if (video) {
            // Quando entra com o mouse no CARD INTEIRO, dá play
            card.addEventListener('mouseenter', () => {
                var playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        // Play automático começou
                    })
                    .catch(error => {
                        console.log("Autoplay bloqueado ou erro:", error);
                    });
                }
            });

            // Quando sai com o mouse do CARD INTEIRO, pausa
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // Opcional: faz o vídeo voltar ao início sempre
            });
        }
    }
});