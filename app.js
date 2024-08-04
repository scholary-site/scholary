const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// typed script
var typed = new Typed('.auto-typing', {
    strings: ["Scholarships", "Internships", "Summer Programs"],
    typeSpeed: 140,
    backSpeed: 140,
    loop: true
})