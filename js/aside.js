function servicesOpen () {
   const servicesOpenBtn = document.querySelector('.mainservice__openbtn');

   servicesOpenBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.mainservice__aside').classList.toggle('open');
      servicesOpenBtn.classList.toggle('open');
      document.body.classList.toggle('lock');
      burgerShow();
      if(servicesOpenBtn.classList.contains('open')) {
         
         const servicesItems = document.querySelectorAll('.main-services__nestedlink');

         servicesItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
               e.preventDefault();
               document.querySelector('.mainservice__aside').classList.remove('open');
               servicesOpenBtn.classList.remove('open');
               document.body.classList.remove('lock');
               burgerShow();
            });
         });
      };


      
      function burgerShow() {
         if(servicesOpenBtn.classList.contains('open')) {
            document.querySelector('.header__burger').style.display = 'none';
         } else {
            document.querySelector('.header__burger').style.display = 'block';
         }
      }
   });
};


servicesOpen();


//-----------------------spoler-footer---------------------------------
const footerBtns = document.querySelectorAll('.footer__linksspoler');
const footerLinks = document.querySelectorAll('.footer__linkslist');

footerBtns.forEach(function(item) {
   item.addEventListener('click', function(){
      let spoiler = item.getAttribute('data-tab');
      footerLinks.forEach(function(el) {
         let spoilerInfo = el.id;
         if(spoilerInfo === spoiler) {
            el.classList.toggle('active');
         } 
      });
   });
});
//-----------------------spoler-footer---------------------------------