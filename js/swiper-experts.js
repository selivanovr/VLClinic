
function slider(sliderName, sliderBtnPrev, sliderBtnNext, progressBar, repeatSlides, fractionIdCurrent , fractionIdTotal, progressBarColor, showSlidesInSlider, autoScrolling, centeredActiveSlide) {
   let startSlide;
   let currentSlider = document.querySelector(sliderName);
   let slidesArr = currentSlider.querySelectorAll('.swiper-slide').length;  // получаем количество слайдов

   let swiperCurrentSlideNumber = document.getElementById(fractionIdCurrent); 
   let swiperTotalSlides = document.getElementById(fractionIdTotal);
   
   if((showSlidesInSlider - 1) > 0) {
      showSlidesInSliderTab = showSlidesInSlider - 1
   } else {showSlidesInSliderTab = 1};
   if((showSlidesInSlider - 2) > 0) {
      showSlidesInSliderPhone = showSlidesInSlider - 2
   } else{showSlidesInSliderPhone = 1};
   if((showSlidesInSlider - 3) > 0) {
      showSlidesInSliderSmallPhone = showSlidesInSlider - 3
   } else{showSlidesInSliderSmallPhone = 1};

   let mySlider = new Swiper(sliderName, {

      slidesPerView: showSlidesInSliderSmallPhone,
      loop: repeatSlides, 
      slideToClickedSlide: false,
      observer: true, 
      observeParents: true, 
      observeSlideChildren: true, 
      centeredSlides: centeredActiveSlideOnBreakpoints(showSlidesInSliderSmallPhone),
      spaceBetween: 0,
      initialSlide: startSlideOnBreakpoints(showSlidesInSliderSmallPhone),

      navigation: {
        nextEl: sliderBtnNext,
        prevEl: sliderBtnPrev,
      },

      autoplay: {
         delay: 3500,
         stopOnLastSlide: true,
         disableOnInteraction: false,
       },
       
       pagination: {
         el: progressBar,
         type: 'progressbar',
       },

       on: {
         init() {
            if(autoScrolling) {
               this.el.addEventListener('mouseenter', () => {
                  this.autoplay.stop();
               });
               this.el.addEventListener('mouseleave', () => {
                  this.autoplay.start();
               });
            }
         }
       },

      breakpoints: {
         991.98: {
           slidesPerView: showSlidesInSlider,
           spaceBetween: 10,
           centeredSlides: centeredActiveSlideOnBreakpoints(showSlidesInSlider),
           initialSlide: startSlideOnBreakpoints(showSlidesInSlider),
         },
         767.98: {
           slidesPerView: showSlidesInSliderTab ,
           spaceBetween: 10,
           centeredSlides: centeredActiveSlideOnBreakpoints(showSlidesInSliderTab),
           initialSlide: startSlideOnBreakpoints(showSlidesInSliderTab),
         },
         479.98: {
           slidesPerView: showSlidesInSliderPhone,
           spaceBetween: 10,
           centeredSlides: centeredActiveSlideOnBreakpoints(showSlidesInSliderPhone),
           initialSlide: startSlideOnBreakpoints(showSlidesInSliderPhone),
         }
       }
   });
   
   function drowTotalSlides() {swiperTotalSlides.innerHTML = slidesArr;};
   function drowCurrentSlide() {swiperCurrentSlideNumber.innerHTML = ++mySlider.realIndex;};

   function centeredActiveSlideOnBreakpoints(el) {
      if (el % 2 == 0 || el < 2) {
         return false
      } else {return showSlidesInSlider};
   };
   
   function startSlideOnBreakpoints(el) {
      if (startSlide) {
         return startSlide
      } else {
         if(el % 2 == 0 || el == 1) {
            return 0
         } else {
            return parseInt(el/2)
         }
      };
   };

   if(fractionIdCurrent) {
      drowTotalSlides();
      drowCurrentSlide();
   }
   
   if(autoScrolling) {
      mySlider.autoplay.start();
   } else {mySlider.autoplay.stop();}

   if(progressBar) {
      document.querySelector(progressBar).style.position = 'relative';
      document.querySelector('.swiper-pagination-progressbar-fill').style.backgroundColor = progressBarColor;
   }

   mySlider.on('slideChange', function() {             // футкция срабатывает при переключении слайда
   if(fractionIdCurrent) {
      drowCurrentSlide();
      }
   });
};

slider(                      // если не нужно, то присваиваем false
    sliderName = '.choose-expert__slider',
    sliderBtnPrev = '.slider-experts__button--prev',
    sliderBtnNext = '.slider-experts__button--next',
    progressBar = false,
    repeatSlides = false,
    fractionIdCurrent = false,
    fractionIdTotal = false,
    progressBarColor = false, 
    showSlidesInSlider = 3,
    autoScrolling = false,
    centeredActiveSlide = false,
    startSlide = 0
);


