function scrollTo(header = '.nav-menu', link = '.nav-link') {
   const head = document.querySelector(header);
   const links = document.querySelectorAll(link);
   let offsetTop;

   if(head) {
      offsetTop = head.offsetHeight;
      } else {
      offsetTop = 0;
   }
   
   if(links.length > 0) {
      links.forEach(el => {
         el.addEventListener('click', e => {
            const linkAtr = el.getAttribute('href').substring(1);
            const elemToScroll = document.getElementById(linkAtr);
            
            if(elemToScroll) {
               const elemPosition = elemToScroll.getBoundingClientRect().top
               window.scrollBy({
                  top: elemPosition - offsetTop,
                  behavior: 'smooth',
               });
            }
            e.preventDefault();
         });
      });
   } 
};

scrollTo();