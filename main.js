let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal Configuration
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Apply ScrollReveal to the new elements
sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 200, origin: 'left' });
sr.reveal('.heading', { delay: 200, origin: 'top' });
sr.reveal('.donate', { delay: 600, origin: 'top' });
sr.reveal('.volunteers', { delay: 200, origin: 'top' });
sr.reveal('.about', { delay: 200, origin: 'top' });
sr.reveal('.impact', { delay: 200, origin: 'top' });
sr.reveal('.review', { delay: 200, origin: 'top' });
sr.reveal('.newsletter', { delay: 400, origin: 'bottom' });