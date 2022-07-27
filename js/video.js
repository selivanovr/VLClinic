
function video() {
   const videoBtn = document.querySelector('.videoblock__link');
   const videoClose = document.querySelector('.videoblock__closebtn');
   const videoPopap = document.querySelector('.videoblock__videopopap');
   const videoBlock = document.querySelector('.videoblock');
   const videoItem = document.querySelector('.videoblock__video');

   function removeOpen() {
      if(videoPopap.classList.contains('open')) {
         videoPopap.classList.remove('open');
         videoClose.classList.remove('open');
         videoItem.classList.remove('open');
         
         document.querySelector('body').classList.remove('lock');
         // videoItem.remove();

         player.stopVideo();

      };
   
   };

   videoBtn.addEventListener('click', function() {
      videoPopap.classList.toggle('open');
      videoClose.classList.add('open');
      videoItem.classList.add('open');
      document.querySelector('body').classList.add('lock');

      player.playVideo();
      // videoPopap.appendChild(videoItem);
   });

   videoClose.addEventListener(('click'), removeOpen);
   videoPopap.addEventListener(('click'), removeOpen);
};
video();