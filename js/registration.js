

function registration() {
   const timeElement = document.querySelectorAll('.calendar__item--hour');
   const cancelСhoice = document.querySelector('.expert-column__disable');
   const choiceExpert = document.querySelector('.expert-column__chanche');
   const regPopup = document.getElementById('experts-select');
   const regPopupContent = regPopup.querySelector('.popup__content');
   const popupCloseBtn = regPopup.querySelector('.popup__closebtn');
   const itemCloseBtn = document.querySelectorAll('.pop-content__item');

   
   timeElement.forEach(el => {
      if(!el.classList.contains('busy')) {
         el.addEventListener('click', function() {
            if(!el.classList.contains('addbusy')) {
               el.classList.add('addbusy');
            }
            
         });
      }
   });
   
   cancelСhoice.addEventListener('click', el => {
      el.preventDefault();
      cleanTime();
   });

   choiceExpert.addEventListener('click', el => {
      el.preventDefault();
      open();
   });
   popupCloseBtn.addEventListener('click', () => close());

   itemCloseBtn.forEach(el => {
      el.addEventListener('click', () => {
         if(regPopup.classList.contains('open')) {
            window.location.hash = el.getAttribute('data-expertchoose');
            close();
         } else {return}
      })
   })

   function open() {
      regPopup.classList.add('open');
      regPopupContent.classList.add('open');
      document.querySelector('body').classList.add('lock');
   };
   
   function close() {
      regPopup.classList.remove('open');
      regPopupContent.classList.remove('open');
      document.querySelector('body').classList.remove('lock');
      cleanTime();
   };

   function cleanTime() {
      timeElement.forEach(el => {
         el.classList.remove('addbusy')
      });
   };


};




registration();
