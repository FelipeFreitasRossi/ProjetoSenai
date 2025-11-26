// ========== MENU HAMBÚRGUER ==========
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const languageToggleMobile = document.getElementById('language-toggle-mobile');
    const themeToggleDesktop = document.getElementById('theme-toggle');
    const languageToggleDesktop = document.getElementById('language-toggle');

    // Toggle do menu hambúrguer
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Fechar menu ao clicar em qualquer botão do menu
        const mobileMenuBtns = mobileMenu.querySelectorAll('.mobile-menu-btn');
        mobileMenuBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // ========== SINCRONIZAR TEMA MOBILE E DESKTOP ==========
    function syncTheme() {
        const body = document.body;
        const sunIconDesktop = document.getElementById('sun-icon');
        const moonIconDesktop = document.getElementById('moon-icon');
        const sunIconMobile = document.querySelector('.icon-sun-mobile');
        const moonIconMobile = document.querySelector('.icon-moon-mobile');

        if (body.classList.contains('light-theme')) {
            // Ícones Desktop
            if (sunIconDesktop) sunIconDesktop.style.display = 'none';
            if (moonIconDesktop) moonIconDesktop.style.display = 'block';
            // Ícones Mobile
            if (sunIconMobile) sunIconMobile.style.display = 'none';
            if (moonIconMobile) moonIconMobile.style.display = 'block';
        } else {
            // Ícones Desktop
            if (sunIconDesktop) sunIconDesktop.style.display = 'block';
            if (moonIconDesktop) moonIconDesktop.style.display = 'none';
            // Ícones Mobile
            if (sunIconMobile) sunIconMobile.style.display = 'block';
            if (moonIconMobile) moonIconMobile.style.display = 'none';
        }
    }

    // Botão de tema mobile
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            syncTheme();
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        });
    }

    // Botão de tema desktop (se já não existir no seu JS)
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            syncTheme();
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        });
    }

    // ========== SINCRONIZAR IDIOMA MOBILE E DESKTOP ==========
    function syncLanguage(lang) {
        const currentLangDesktop = document.getElementById('current-lang');
        const currentLangMobile = document.getElementById('current-lang-mobile');
        
        if (currentLangDesktop) currentLangDesktop.textContent = lang;
        if (currentLangMobile) currentLangMobile.textContent = lang;
    }

    // Botão de idioma mobile
    if (languageToggleMobile) {
        languageToggleMobile.addEventListener('click', function() {
            const currentLang = document.getElementById('current-lang-mobile').textContent;
            const newLang = currentLang === 'PT' ? 'EN' : 'PT';
            syncLanguage(newLang);
            
            // Disparar evento de mudança de idioma para o i18n
            const event = new CustomEvent('languageChange', { detail: newLang });
            window.dispatchEvent(event);
        });
    }

    // Botão de idioma desktop (se já não existir no seu JS)
    if (languageToggleDesktop) {
        languageToggleDesktop.addEventListener('click', function() {
            const currentLang = document.getElementById('current-lang').textContent;
            const newLang = currentLang === 'PT' ? 'EN' : 'PT';
            syncLanguage(newLang);
            
            // Disparar evento de mudança de idioma para o i18n
            const event = new CustomEvent('languageChange', { detail: newLang });
            window.dispatchEvent(event);
        });
    }

    // ========== CARREGAR TEMA E IDIOMA SALVOS ==========
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    syncTheme();

    const savedLang = localStorage.getItem('language') || 'PT';
    syncLanguage(savedLang);
});