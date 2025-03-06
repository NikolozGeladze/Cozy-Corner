var menu = document.querySelector('.menu');
var navBars = document.querySelector('.navigation-bars')

navBars.style.top = document.querySelector('nav').getBoundingClientRect().height - 3 + 'px';
menu.addEventListener('click', function () {
    navBars.classList.toggle('active');
});