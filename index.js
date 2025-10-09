// mobile menu toggle + active link mark
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('is-open'));
}

// set active link by pathname
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
        a.setAttribute('aria-current','page');
    }
});
