// ---------------------mobile menu

let menuBtn = document.querySelector('.header__burgerIcon');
let menu = document.querySelector('.header__menu-mobile');
let menuLinks = document.querySelectorAll('.header__menu-link');

menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleMenu();
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});
function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}
window.addEventListener('scroll', () => {
    document.body.classList.remove('lock');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ----------------------end mobile menu


// ----- accordion -----
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion');
    const imageElement = document.getElementById('accordion-image');

    const firstAccordion = accordions[0];
    const firstButton = firstAccordion.querySelector('.accordion-header');
    const firstBody = firstAccordion.querySelector('.accordion-body');
    firstBody.classList.add('active');
    firstAccordion.classList.add('open');
    imageElement.src = `images/${firstButton.getAttribute('data-image')}`;

    document.addEventListener('click', function (event) {
        const button = event.target.closest('.accordion-header');
        if (!button) return;

        const accordion = button.closest('.accordion');
        const body = accordion.querySelector('.accordion-body');
        const imageUrl = button.getAttribute('data-image');

        imageElement.src = `images/${imageUrl}`;

        accordions.forEach(acc => {
            const accBody = acc.querySelector('.accordion-body');
            if (acc !== accordion) {
                accBody.classList.remove('active');
                acc.classList.remove('open');
            }
        });

        body.classList.toggle('active');
        accordion.classList.toggle('open');
    });
});


// ----- and accordion -----