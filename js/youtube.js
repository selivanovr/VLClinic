//--------------------------------------YOUTUBE(id="player" for iframe)--------------------------------------------------------------//
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//----------------------------------------------------------------------------------------------------//
 
 let player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {

     playerVars: { 'autoplay': 0, 'controls': 1, 'playsinline': 1, 'rel': 0 },
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }
 
 function onPlayerReady(event) {         // Выволнение в моменте ожидания
   // event.target.playVideo();
   
 }

 let done = false;
 function onPlayerStateChange(event) {                // Выволнение при изменении
   if (event.data == YT.PlayerState.PLAYING && !done) {
   //   setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }
 //--------------------------------------------------YOUTUBE--------------------------------------------------//

