function initNav() {
    const links = document.querySelectorAll('.main-nav a');
    const current = window.location.pathname.split('/').pop();

    links.forEach(link => {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });

    const btn = document.getElementById('darkModeToggle');

    if (btn) {
        const saved = localStorage.getItem('darkMode');
        if (saved === 'true') {
            document.body.classList.add('dark');
        }

        updateButtonText(btn);

        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark');

            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);

            updateButtonText(btn);
        });
    }
}

function updateButtonText(btn) {
    btn.textContent = document.body.classList.contains('dark')
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
}

document.addEventListener('DOMContentLoaded', initNav);