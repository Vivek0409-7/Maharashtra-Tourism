// Shared script for the 8 Ashtavinayak temple pages: dark/light theme (same key as the main page)
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const body = document.body;
    const store = {
        get: () => { try { return localStorage.getItem('theme'); } catch (e) { return null; } },
        set: v => { try { localStorage.setItem('theme', v); } catch (e) {} }
    };
    const apply = theme => {
        if (theme === 'dark') body.setAttribute('data-theme', 'dark'); else body.removeAttribute('data-theme');
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    };
    apply(store.get());
    btn.addEventListener('click', () => {
        const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        apply(next); store.set(next);
    });
});