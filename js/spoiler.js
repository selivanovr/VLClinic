//-----------------------spoler----------------------------------


function customSpoiler() {
   const spoilerButton = document.querySelector('.vl-content__link');
   const spoilerInfo = document.querySelector('.vl-content__info');
   const spoilerBodyDecor = document.querySelector('.vl__decor');
   const spoilerDecorLine = document.querySelector('.vl-content__decorline');

   let startHightDecor = document.querySelector('.vl-content__text').offsetHeight;
   spoilerDecorLine.style.height = startHightDecor + 'px';

   spoilerButton.addEventListener('click', function() {
      spoilerButton.classList.toggle('open');
      spoilerInfo.classList.toggle('open');
      spoilerBodyDecor.classList.toggle('open');
      if (spoilerInfo.classList.contains('open')) {
         spoilerDecorLine.style.height = 100 + '%';
      } else {spoilerDecorLine.style.height = startHightDecor + 'px';}
   })
};

customSpoiler();
//-----------------------spoler----------------------------------
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


//---------------------------------------Custom-Tabs------------------------------------------------------//
function customTab(btn, tab, btnData, tabData) {
   console.log('customTab - loaded');
   const btnItems = document.querySelectorAll(`.${btn}`);
   const tabItems = document.querySelectorAll(`.${tab}`);

   btnItems.forEach(function(item) {
      item.addEventListener('click', function() {
         if( ! item.classList.contains('active')) {
            btnItems.forEach(function(item) {
               item.classList.remove('active')
            });

            item.classList.add('active');

            let btnId = item.getAttribute(`${btnData}`);
            
            tabItems.forEach(function (el){
               el.classList.remove('active')
               let tabId = el.getAttribute(`${tabData}`);
               if(btnId === tabId && ! el.classList.contains('active')){
                  el.classList.add('active');
               } return
            });
         }
      });
   });
   document.querySelector(`.${btn}:nth-child(2)`).click();
};

customTab('map__street', 'map__map', 'data-street', 'data-map');
//---------------------------------------Custom-Tabs------------------------------------------------------//

