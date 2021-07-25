//responsive navbar 
const navBar = document.querySelector('.navbar');
const hamBurger = document.querySelector('.navbar__hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
hamBurger.addEventListener('click', () => {
    if (navBar.classList.contains('open')) {
        navBar.classList.remove('open');
        body.classList.remove('no-scroll');

    } else {
        navBar.classList.add('open');
        body.classList.add('no-scroll');
    }
})

// scroll to fixed navbar

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        header.classList.add('fixed-nav');
    } else {
        header.classList.remove('fixed-nav');
    }
})

;