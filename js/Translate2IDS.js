// ========== DICIONÁRIO DE TRADUÇÃO ========== 
const translations = {
    pt: {
        back: "Voltar",
        theme: "Tema",
        ourProjects: "Nossos Projetos", 
        working: "Funcionamento",
        commercial: "Comercial",
        visitSite: "Visitar site",
        
        // Abas dos Grupos (Tabs)
        group1: "GC&D",
        group2: "SenAI",
        group3: "SPARK",
        group4: "Tool Search",
        group5: "OilMap",
        group6: "Feed-Educ",
        group7: "Grupo 7",

        // Footer
        footerCity: "SENAI São Carlos",
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Centro de referência em formação técnica e tecnológica, preparando profissionais para os desafios da Indústria 4.0.",
        footerAboutSlogan: "Formando o futuro da tecnologia",
        footerClassesTitle: "Turmas 2024/2025",
        class3TDSTitle: "3º Técnico em Desenvolvimento de Sistemas",
        footerClass2IMECB: "2º Integrado em Mecatrônica Turma B",
        footerClass2IMECC: "2º Integrado em Mecatrônica Turma C",
        class2IDSTitle: "2º Integrado em Desenvolvimento de Sistemas",
        footerDeveloperTitle: "Equipe de Desenvolvimento",
        footerDevelopedBy: "Desenvolvido por",
        techLead: "Tech Lead",
        developers: "Desenvolvedores:",
        footerIndustry: "Serviço Nacional de Aprendizagem Industrial",
        footerRights: "© 2025 SENAI São-Carlos - Todos os direitos reservados",

        // Títulos e Descrições dos Projetos (2IDS)
        ids_p1_title: "Sistema de gestão de ferramentas e defeitos para laboratórios educacionais",
        ids_p1_desc: "O GCD é um app em React Native para gerenciar ferramentas, salas e defeitos em laboratórios SENAI.",
        ids_p2_title: "Chatbot inteligente desenvolvido para o SENAI São Carlos.",
        ids_p2_desc: "Assistente virtual do SENAI São Carlos, com integração LM Studio e interface web intuitiva para informações institucionais.",
        ids_p3_title: "Monitoramento Energético em Tempo Real",
        ids_p3_desc: "Sistema embarcado com ESP32, sensores SCT-013-00 e ACS712 para monitoramento e eficiência energética industrial.",
        ids_p4_title: "Organize, controle e encontre ferramentas com precisão",
        ids_p4_desc: "Sistema inteligente para organizar, controlar e localizar ferramentas em tempo real.",
        ids_p5_title: "Análise e unificação de dados geoespaciais",
        ids_p5_desc: "Plataforma web unifica dados geoespaciais para agilizar decisões e otimizar exploração na Petrobras.",
        ids_p6_title: "Sistema de feedback anônimo",
        ids_p6_desc: "Sistema torna comunicação mais ágil e organizada, permitindo ações rápidas e assertivas no ambiente institucional.",
        ids_p7_title: "Sistema de Segurança Inteligente",
        ids_p7_desc: "Solução completa de segurança utilizando reconhecimento facial, alertas em tempo real e integração com dispositivos móveis para proteção residencial."
    },
    en: {
        back: "Back",
        theme: "Theme",
        ourProjects: "2IDS Projects", 
        working: "How it works",
        commercial: "Commercial",
        visitSite: "Visit site",

        // Group Tabs (EN)
        group1: "GC&D",
        group2: "SenAI",
        group3: "SPARK",
        group4: "Tool Search",
        group5: "OilMap",
        group6: "Feed-Educ",
        group7: "Group 7",
        
        // Footer (EN)
        footerCity: "SENAI São Carlos",
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Reference center in technical and technological education, preparing professionals for Industry 4.0 challenges.",
        footerAboutSlogan: "Shaping the future of technology",
        footerClassesTitle: "Classes 2024/2025",
        class3TDSTitle: "3rd Systems Development Technician",
        footerClass2IMECB: "2nd Integrated Mechatronics Class B",
        footerClass2IMECC: "2nd Integrated Mechatronics Class C",
        class2IDSTitle: "2nd Integrated Systems Development",
        footerDeveloperTitle: "Development Team",
        footerDevelopedBy: "Developed by",
        techLead: "Tech Lead",
        developers: "Developers:",
        footerIndustry: "National Service for Industrial Training",
        footerRights: "© 2025 SENAI São-Carlos - All rights reserved",

        // Títulos e Descrições dos Projetos (EN)
        ids_p1_title: "Tool and defect management system for educational laboratories",
        ids_p1_desc: "GCD is a React Native app to manage tools, rooms, and defects in SENAI laboratories.",
        ids_p2_title: "Intelligent chatbot developed for SENAI São Carlos.",
        ids_p2_desc: "Virtual assistant for SENAI São Carlos, with LM Studio integration and intuitive web interface for institutional information.",
        ids_p3_title: "Real-Time Energy Monitoring",
        ids_p3_desc: "Embedded system with ESP32, SCT-013-00 and ACS712 sensors for industrial energy monitoring and efficiency.",
        ids_p4_title: "Organize, control, and find tools with precision",
        ids_p4_desc: "Intelligent system to organize, control, and locate tools in real-time.",
        ids_p5_title: "Analysis and unification of geospatial data",
        ids_p5_desc: "Web platform unifies geospatial data to speed up decisions and optimize exploration at Petrobras.",
        ids_p6_title: "Anonymous Feedback System",
        ids_p6_desc: "System makes communication faster and more organized, allowing for quick and assertive actions within the institutional environment.",
        ids_p7_title: "Smart Security System",
        ids_p7_desc: "Complete security solution using facial recognition, real-time alerts, and integration with mobile devices for residential protection."
    }
};

// ========== FUNÇÕES DE TRADUÇÃO ========== 
let currentLang = localStorage.getItem('language') || 'pt';

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[currentLang] && translations[currentLang][key]) {
            // Lógica de elementos complexos (botão voltar com SVG)
            if (element.children.length > 0 && element.tagName !== 'P' && element.tagName !== 'H2' && element.tagName !== 'H3') {
                 const span = element.querySelector('span');
                 if(span) span.textContent = translations[currentLang][key];
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