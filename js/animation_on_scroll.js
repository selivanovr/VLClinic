function animationOnScroll(timeout) {

   window.addEventListener('scroll', startAnimation); 
   
   setTimeout(() => {
      startAnimation(); 
   }, timeout); 

   function startAnimation() {
   const animatedItems = document.querySelectorAll('.anim-item');
   if(animatedItems.length > 0) {
      animatedItems.forEach(function(item) {
         let heightOfAnimItem = item.offsetHeight;
         let offsetOfAnimItem = offset(item).top;
         let animStart = 3.5;    

         let pointOfAnim = window.innerHeight - heightOfAnimItem / animStart;
         if(heightOfAnimItem > window.innerHeight) {
            pointOfAnim = window.innerHeight - window.innerHeight / animStart;
         }

         if((scrollY > offsetOfAnimItem - pointOfAnim) && scrollY < (offsetOfAnimItem + heightOfAnimItem)) {
            item.classList.add('active');
         } else {
            if (item.classList.contains('repeat-anim')) {
               item.classList.remove('active');
            };
         }
      });
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
   };
   };
   
};

animationOnScroll(400);   // (Таймаут при загрузке страницы) .anim-item, repeat-anim