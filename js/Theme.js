// ========== THEME MANAGEMENT ==========

(function() {
    // Function to apply the saved theme
    function applyTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }
    }

    // Function to initialize the theme toggle button
    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        const isLight = document.body.classList.contains('light-theme');
        
        // Initialize icons based on the current theme
        if (sunIcon && moonIcon) {
             if (isLight) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }

        if (!themeToggle || !sunIcon || !moonIcon) return;

        // Add click event listener
        // Check if event listener is already added to avoid duplicates if called multiple times
        // Since we are using an anonymous function, we can't easily check. 
        // But this script should only be included once.
        
        themeToggle.onclick = () => { // Using onclick to replace any existing handler if necessary, though addEventListener is better practice usually.
            document.body.classList.toggle('light-theme');
            const isLightNow = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLightNow ? 'light' : 'dark');
            
            if (isLightNow) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        };
    }

    // Apply theme immediately. 
    // This script is expected to be loaded with 'defer', so document.body should be available.
    if (document.body) {
        applyTheme();
    } else {
        // Fallback if script is in head without defer (should not happen based on plan)
        document.addEventListener('DOMContentLoaded', applyTheme);
    }
    
    // Initialize toggle logic when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
})();