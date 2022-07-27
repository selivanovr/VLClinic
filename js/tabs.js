const tabBtn = document.querySelectorAll('.tab__btn'); 
const tabItem = document.querySelectorAll('.tab__item');



tabBtn.forEach(tabBtnClick); 

   function tabBtnClick(item) {
      item.addEventListener('click', function() {
         let currentBtn = item;
         let tabId = currentBtn.getAttribute('data-tab');
         let currentTab = document.querySelector(tabId);


         if( ! currentBtn.classList.contains('active')){

            tabItem.forEach(function(item) {
               item.classList.remove('active');
            });
      
            tabBtn.forEach(function(item) {
               item.classList.remove('active');
            });
      
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
         };
      });
   };


document.querySelector('.tab__btn:nth-child(1)').click();