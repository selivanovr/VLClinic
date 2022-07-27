
function customTab(btn, tab, btnData, tabData, inObject) {
   console.log(btn + ' loaded');
   const btnItems = document.querySelectorAll(`.${btn}`);
   const tabItems = document.querySelectorAll(`.${tab}`);
   const internalObject = document.querySelectorAll(`.${inObject}`);

   const hash = window.location.hash.replace('#', ''); //Получаем id нажатой ссылки без #;

   btnItems.forEach(function(item) {
      let btnId = item.getAttribute(`${btnData}`);

      // При переходе по ссылке с другой странице------------
      if(btnId === hash) {
         item.classList.add('active');
         
         tabItems.forEach((el) => {
            if (btnId === el.getAttribute(`${tabData}`)) {
               el.classList.add('active');
            }
         });
      }
      //------------------------------------------------------ 
      
      item.addEventListener('click', function(e) {
         e.preventDefault();
         if( ! item.classList.contains('active')) {
            btnItems.forEach(function(item) {
               item.classList.remove('active');
            });

            item.classList.add('active');

            tabItems.forEach(function (el){
               el.classList.remove('active')
               let tabId = el.getAttribute(`${tabData}`);
               if(btnId === tabId && ! el.classList.contains('active')){
                  el.classList.add('active');
                  
               } return
            });
            if(inObject) {
               internalObject.forEach(function(item) {
                  item.classList.remove('active');
               });
            }
         }
      });
   });

   // document.querySelector(`.${btn}:nth-child(2)`).click();
};
//---------------------------------------Custom-Tabs------------------------------------------------------//
customTab('map__street', 'map__map', 'data-street', 'data-map');
customTab('main-services__link', 'main-services__nestedlist', 'data-services', 'data-services-body', 'main-services__nestedlink');
customTab('main-services__nestedlink', 'mainservice-content', 'data-services', 'data-services-body');
customTab('news__link', 'news__news-item', 'data-news', 'data-news');
customTab('place__item', 'service-one__text', 'data-service', 'data-service');
customTab('pop-content__item', 'expert-column__item', 'data-expertchoose', 'data-expertchoose');
customTab('slider-experts__foto', 'expert-column__item', 'data-expertchoose', 'data-expertchoose');
