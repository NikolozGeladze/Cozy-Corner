var menu = document.querySelector('.menu');
var navBars = document.querySelector('.navigation-bars')

menu.addEventListener('click', function () {
    navBars.classList.toggle('active');
    if (navBars.classList.contains('active')) {
        navBars.style.top = document.querySelector('nav').getBoundingClientRect().height - 3 + 'px';
    }
});