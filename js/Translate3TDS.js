// ========== DICIONÁRIO DE TRADUÇÃO ========== 
const translations = {
    pt: {
        back: "Voltar",
        theme: "Tema",
        
        // Títulos dos Projetos (Carousel e Cards)
        controlTechTitle: "Gerenciamento de Estoque",
        ioTurnTitle: "Sua operação mais inteligente",
        stockBotTitle: "Gerenciamento de almoxarifado",
        lyriaTitle: "Assistente comunicativo com IA",
        communityTitle: "Rede Social do SENAI",
        lingoLensTitle: "Tradutor de Libras inteligente",
        faceShieldTitle: "Gestão inteligente de empréstimos com reconhecimento facial e buscas rápidas.",
        
        // Seção
        ourProjects: "Nossos Projetos",
        
        // Descrições
        controlTechDesc: "ControlTech é um sistema de gerenciamento de estoque inteligente, no qual utiliza o crachá para seu acesso.",
        ioTurnDesc: "Sistema que usa sensores de longo alcance e inteligência artificial para coletar, analisar e apoiar decisões em tempo real.",
        stockBotDesc: "O StockBot visa preencher lacunas em seu estoque, sem a existência de falhas utilizando um sistema pratico.",
        lyriaDesc: "Lyria tem como objetivo facilitar o cotidiano, com chatbot e robô capazes de adotar diferentes personalidades.",
        communityDesc: "Rede social exclusiva para conectar alunos do SENAI a projetos e vagas de emprego.",
        lingoLensDesc: "Tradutor de Libras em tempo real que captura gestos e converte em texto.",
        faceShieldDesc: "Sistema de gerenciamento de empréstimos de ferramentas com reconhecimento facial, CRUD e buscas detalhadas.",
        
        // Botões dos Cards
        working: "Funcionamento",
        commercial: "Comercial",
        visitSite: "Visitar site",
        
        // Footer
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Centro de referência em formação técnica e tecnológica, preparando profissionais para os desafios da Indústria 4.0.",
        footerAboutSlogan: "Formando o futuro da tecnologia",
        
        footerClassesTitle: "Turmas 2024/2025",
        class3TDSTitle: "3º Técnico em Desenvolvimento de Sistemas",
        footerClass2IMECB: "2º Integrado em Mecatrônica Turma B",
        footerClass2IMECC: "2º Integrado em Mecatrônica Turma C",
        class2IDSTitle: "2º Integrado em Desenvolvimento de Sistemas",
        
        footerDeveloperTitle: "Equipe de Desenvolvimento",
        techLead: "Tech Lead",
        developers: "Desenvolvedores:",
        footerIndustry: "Serviço Nacional de Aprendizagem Industrial",
        footerRights: "© 2025 Todos os direitos reservados",
        footerDevelopedBy: "Desenvolvido por"
    },
    en: {
        back: "Back",
        theme: "Theme",
        
        // Project Titles
        controlTechTitle: "Stock Management",
        ioTurnTitle: "Your operation, smarter",
        stockBotTitle: "Warehouse Management",
        lyriaTitle: "Communicative AI Assistant",
        communityTitle: "SENAI Social Network",
        lingoLensTitle: "Smart Sign Language Translator",
        faceShieldTitle: "Intelligent loan management with facial recognition and quick searches.",
        
        // Section
        ourProjects: "Our Projects",
        
        // Descriptions
        controlTechDesc: "ControlTech is an intelligent inventory management system that uses a badge for access.",
        ioTurnDesc: "System that uses long-range sensors and artificial intelligence to collect, analyze, and support real-time decisions.",
        stockBotDesc: "StockBot aims to fill inventory gaps without failures using a practical system.",
        lyriaDesc: "Lyria aims to facilitate daily life, with a chatbot and robot capable of adopting different personalities.",
        communityDesc: "Exclusive social network connecting SENAI students to projects and job openings.",
        lingoLensDesc: "Real-time Sign Language translator that captures gestures and converts them to text.",
        faceShieldDesc: "Tool loan management system with facial recognition, CRUD, and detailed searches.",
        
        // Card Buttons
        working: "How it works",
        commercial: "Commercial",
        visitSite: "Visit site",
        
        // Footer
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Reference center in technical and technological training, preparing professionals for Industry 4.0 challenges.",
        footerAboutSlogan: "Shaping the future of technology",
        
        footerClassesTitle: "Classes 2024/2025",
        class3TDSTitle: "3rd Systems Development Technician",
        footerClass2IMECB: "2nd Mechatronics Integrated Class B",
        footerClass2IMECC: "2nd Mechatronics Integrated Class C",
        class2IDSTitle: "2nd Systems Development Integrated",
        
        footerDeveloperTitle: "Development Team",
        techLead: "Tech Lead",
        developers: "Developers:",
        footerIndustry: "National Service for Industrial Training",
        footerRights: "© 2025 All rights reserved",
        footerDevelopedBy: "Developed by"
    }
};

// ========== FUNÇÕES DE TRADUÇÃO ========== 
// Nota: O seu código original usava 'siteLang', trocamos para 'language'
let currentLang = localStorage.getItem('language') || 'pt';

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[currentLang] && translations[currentLang][key]) {
            // Se for um input placeholder, usa placeholder, senão usa textContent
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
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
    // SALVA o novo idioma
    localStorage.setItem('language', currentLang); 
    translatePage();
}

// ========== INICIALIZAÇÃO ========== 
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tradução (aplicará o idioma salvo/padrão)
    translatePage();
    
    // Event listener para botão de idioma
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
});