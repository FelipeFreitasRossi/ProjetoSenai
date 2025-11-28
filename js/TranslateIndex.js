// ========== SISTEMA DE TRADUÇÃO i18n COMPLETO ========== 
const translations = {
    pt: {
        // Botões
        theme: "Tema",
        
        // Hero
        heroTitle: "Projetos SENAI 2025",
        heroSubtitle: "São Carlos - Inovação e Tecnologia",
        
        // Seção de Turmas
        classesTitle: "Turmas SENAI São Carlos 2025",
        projects: "Projetos",
        students: "Alunos",
        viewProjects: "Ver Projetos",
        
        // Turma 3TDS
        class3TDSTitle: "3º Técnico em Desenvolvimento de Sistemas",
        class3TDSDesc: "Turma de formandos com projetos inovadores em desenvolvimento web full-stack, IoT, automação e sistemas inteligentes.",
        
        // Turma 2IMEC (Genérico do Card)
        class2IMECBTitle: "2º Integrado em Mecatrônica",
        class2IMECBDesc: "Projetos integrando robótica, automação industrial, eletrônica e programação embarcada para soluções mecatrônicas.",

        // Footer Específicos (para diferenciar turmas)
        footerClass2IMECB: "2º Integrado em Mecatrônica Turma B",
        footerClass2IMECC: "2º Integrado em Mecatrônica Turma C",

        // Turma 2IDS
        class2IDSTitle: "2º Integrado em Desenvolvimento de Sistemas",
        class2IDSDesc: "Turma do ensino integrado com foco em aplicações web modernas, mobile, banco de dados e arquitetura de software escalável.",
        
        // Seção Sobre
        aboutTitle: "Sobre o SENAI São Carlos",
        aboutText: "O SENAI São Carlos é referência em formação técnica e tecnológica na região, preparando profissionais para os desafios da Indústria 4.0. Nossos alunos desenvolvem projetos inovadores que conectam teoria e prática, criando soluções reais para problemas do mercado de trabalho.",
        projectsDeveloped: "Projetos Desenvolvidos",
        studentsParticipating: "Alunos Participantes",
        participatingClasses: "Turmas Participantes",
        dedicationInnovation: "Dedicação e Inovação",
        
        // Footer
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Centro de referência em formação técnica e tecnológica, preparando profissionais para os desafios da Indústria 4.0.",
        footerAboutSlogan: "Formando o futuro da tecnologia",
        footerClassesTitle: "Turmas 2024/2025",
        footerDeveloperTitle: "Desenvolvedor",
        footerDevelopedBy: "Desenvolvido por",
        footerRights: "© 2025 Todos os direitos reservados",
        footerIndustry: "Serviço Nacional de Aprendizagem Industrial",
        
        // Páginas de Projetos (se usadas externamente)
        ourProjects: "Nossos Projetos",
        watchVideo: "Funcionamento",
        watchVideoComercial: "Comercial",
        projects3TDSTitle: "Projetos 3TDS",
        projects2IMECBTitle: "Projetos 2IMEC-B",
        projects2IMECCTitle: "Projetos 2IMEC-C",
        projects2IDSTitle: "Projetos 2IDS",
        linkSite: "Visitar Site",
    },
    en: {
        // Buttons
        theme: "Theme",
        
        // Hero
        heroTitle: "SENAI Projects 2025",
        heroSubtitle: "São Carlos - Innovation and Technology",
        
        // Classes Section
        classesTitle: "SENAI São Carlos Classes 2025",
        projects: "Projects",
        students: "Students",
        viewProjects: "View Projects",
        
        // Class 3TDS
        class3TDSTitle: "3rd Technical in Systems Development",
        class3TDSDesc: "Graduating class with innovative projects in full-stack web development, IoT, automation and intelligent systems.",
        
        // Class 2IMEC (Generic Card)
        class2IMECBTitle: "2nd Integrated Mechatronics",
        class2IMECBDesc: "Projects integrating robotics, industrial automation, electronics and embedded programming for mechatronic solutions.",
        
        // Footer Specifics
        footerClass2IMECB: "2nd Integrated Mechatronics Class B",
        footerClass2IMECC: "2nd Integrated Mechatronics Class C",
        
        // Class 2IDS
        class2IDSTitle: "2nd Integrated Systems Development",
        class2IDSDesc: "Full-time integrated class focused on modern web applications, mobile, databases and scalable software architecture.",
        
        // About Section
        aboutTitle: "About SENAI São Carlos",
        aboutText: "SENAI São Carlos is a reference in technical and technological training in the region, preparing professionals for Industry 4.0 challenges. Our students develop innovative projects that connect theory and practice, creating real solutions for labor market problems.",
        projectsDeveloped: "Developed Projects",
        studentsParticipating: "Participating Students",
        participatingClasses: "Participating Classes",
        dedicationInnovation: "Dedication and Innovation",
        
        // Footer
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Reference center in technical and technological training, preparing professionals for Industry 4.0 challenges.",
        footerAboutSlogan: "Shaping the future of technology",
        footerClassesTitle: "Classes 2024/2025",
        footerDeveloperTitle: "Developer",
        footerDevelopedBy: "Developed by",
        footerRights: "© 2025 All rights reserved",
        footerIndustry: "National Industrial Apprenticeship Service",
        
        // Project Pages
        ourProjects: "Our Projects",
        watchVideo: "Operation",
        watchVideoComercial: "Commercial",
        projects3TDSTitle: "3TDS Projects",
        projects2IMECBTitle: "2IMEC-B Projects",
        projects2IMECCTitle: "2IMEC-C Projects",
        projects2IDSTitle: "2IDS Projects",
        linkSite: "Visit Website"
    }
};

// ========== FUNÇÕES DE TRADUÇÃO ========== 
let currentLang = localStorage.getItem('language') || 'pt';

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        // @ts-ignore
        if (translations[currentLang][key]) {
            // @ts-ignore
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Atualizar botão de idioma
    const langButton = document.getElementById('current-lang');
    if (langButton) {
        langButton.textContent = currentLang.toUpperCase();
    }
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', currentLang);
    translatePage();
}

// ========== TROCA DE TEMA ========== 
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (!themeToggle || !sunIcon || !moonIcon) return;

    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    // Toggle de tema
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Trocar ícones
        if (isLight) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    });
}

// ========== INICIALIZAÇÃO ========== 
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tradução
    translatePage();
    
    // Inicializar tema
    initThemeToggle();
    
    // Event listener para botão de idioma
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
});