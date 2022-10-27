let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header_menu');
let body = document.querySelector('body');
let header_list = document.querySelector('.header_list');



header_burger.addEventListener('click', function (event) {
    
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('lock');
    header_list.classList.remove('active');
    
    
});