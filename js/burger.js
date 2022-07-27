const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyScroll = document.querySelector('body');
const headerList = document.querySelector('.header__list');

headerBurger.onclick = function(){
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   bodyScroll.classList.toggle('lock');
   if(headerBurger.classList.contains('active')) {
      document.querySelector('.mainservice__openbtn').style.display = 'none';
   } else {
      document.querySelector('.mainservice__openbtn').style.display = 'block';
   }
}
headerMenu.onclick = function () {
   headerMenu.classList.remove('active');
   headerBurger.classList.remove('active');
   bodyScroll.classList.remove('lock');
   
}
