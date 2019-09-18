feather.replace({ class: 'icons' });

function setTheme(theme) {
    var newTheme = theme === 'dark' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
}

var currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
setTheme(currentTheme);

var toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    var newTheme = document.body.className === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});
