document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('menu').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('darkModeToggle');
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
        } else {
            document.body.classList.remove('dark-mode');
            modeToggle.textContent = 'Dark Mode';
        }
        localStorage.setItem('mode', mode);
    }
});
