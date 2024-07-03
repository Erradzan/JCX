document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('menu').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('darkModeToggle');
    const logo = document.getElementById('logo');
    const favicon = document.getElementById('icon');
    const currentMode = localStorage.getItem('mode') || 'light';
    setMode(currentMode);

    modeToggle.addEventListener('click', () => {
        const newMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        setMode(newMode);
    });

    function setMode(mode) {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
            modeToggle.textContent = 'Light Mode';
            logo.src = 'Support/Dark Logo.png';
            favicon.href = 'Support/Dark Icon.png';
        } else {
            document.body.classList.remove('dark-mode');
            modeToggle.textContent = 'Dark Mode';
            logo.src = 'Support/Light Logo.png';
            favicon.href = 'Support/Light Icon.png';
        }
        localStorage.setItem('mode', mode);
    }
});