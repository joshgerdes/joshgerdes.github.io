// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        const body = document.body;
        const html = document.documentElement;
        
        // Get initial theme from localStorage or system preference
        const getInitialTheme = () => {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        };
        
        // Set theme
        const setTheme = (theme) => {
            body.classList.remove('light', 'dark');
            html.classList.remove('light', 'dark');
            body.classList.add(theme);
            html.classList.add(theme);
            localStorage.setItem('theme', theme);
            
            // Re-render feather icons after theme change
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        };
        
        // Initialize theme
        const currentTheme = getInitialTheme();
        setTheme(currentTheme);
        
        // Toggle theme on click
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
            setTheme(newTheme);
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});