
const sliderBody = document.querySelector('.slider__body');
const sliderItems = document.querySelectorAll('.slider__item');      //слайды

const btnPrev = document.querySelector('.slider__arrows--left');      //назад
const btnNext = document.querySelector('.slider__arrows--right');     //вперед

const linePar = document.querySelector('.slider__statusline');     //линия заполнения
const lineItem = document.querySelector('.slider__statuslineitem');     //линия заполнения
let lineWidth = linePar.offsetWidth;


let showSlides = 5;                                               //сколько слайдов показывать
const scrollSlides = 1;	                                          //по сколько слайдов скроллить
//----------------------------------media----------------------------------------------
let mediaTabletBig = window.matchMedia('(max-width:1400.98px)');
let mediaTablet = window.matchMedia('(max-width:991.98px)');
let mediaPhone = window.matchMedia('(max-width:767.98px)');
let mediaSmallPhone = window.matchMedia('(max-width:479.98px)');


if(mediaTabletBig.matches) {
   showSlides = 3;
}; 
if(mediaTablet.matches) {
   showSlides = 2;
}; 
if(mediaPhone.matches) {
   showSlides = 2;
}; 
if(mediaSmallPhone.matches) {
   showSlides = 1;
}; 

//---------------------------------media------------------------------------------------							         

const totalSlide = sliderItems.length;             //число слайдов

let offset = 0;									         //смещение
let visibleLine = sliderBody.offsetWidth;		      //ширина видимой области слайдов
let slideWidth = visibleLine/showSlides;           //ширина 1 слайда

sliderItems.forEach(function(item) {
	item.style.flex = '0 0 '+ 100/showSlides +'%';  //устанавливает размер слайда
});

document.getElementById('totalfotos').innerHTML =totalSlide;

//------------------------------------счетчик слайда-----------------------------------

function numOfSlide() {
	document.getElementById('currentfoto').innerHTML =(offset + showSlides);
	lineItem.style.transition = '.2s ease-in-out';
	lineItem.style.width = ''+ lineWidth/totalSlide*(offset + showSlides ) +'px';
};

//------------------------------------счетчик слайда-----------------------------------
//----------------------------------check buttons---------------------------------------------------

function checkBtnNext() {
   if(offset !== 0){
      btnPrev.classList.remove('stop');
   };
   if(offset == totalSlide - showSlides){
      btnNext.classList.add('stop');
   };
};


function checkBtnPrev() {
   if(offset !== totalSlide - showSlides){
      btnNext.classList.remove('stop');
   };
   if(offset == 0){
      btnPrev.classList.add('stop');
   }; 
};

//----------------------------------check buttons---------------------------------------------------

checkBtnNext();
checkBtnPrev();
numOfSlide();

btnNext.addEventListener('click', function() {
	
	if (offset < totalSlide-showSlides) {
		offset = scrollSlides + offset;
		if (offset > totalSlide-showSlides){
			offset = totalSlide-showSlides;
		};

		numOfSlide();

		sliderBody.style.left = '-'+slideWidth*offset+'px';
	} else {
		return
	};

	checkBtnNext();
});


btnPrev.addEventListener('click', function() {
	
	if (offset <= 0) {
		return
	} else {
		offset = offset - scrollSlides;
		if (offset < 0){
			offset = 0;
		};

		numOfSlide();

		sliderBody.style.left = '-'+slideWidth*offset+'px';
	};
	
	checkBtnPrev(); 
});


const gallery = document.querySelector('.gallery');
const galleryOpenBtns = document.querySelectorAll('.slider__item');
const close = document.querySelector('.gallery__closebtn');

function smartGalerry() {
   galleryOpenBtns.forEach(function(e) {
      
      e.addEventListener('click', openSmartGalerry);
      
   });

   

};
function openSmartGalerry(e) {
   let onSlide = e.target.getAttribute('data-gallery');
   gallery.classList.add('active');
   document.body.classList.add('lock');
   document.body.style.paddingRight = '17px';  

   close.addEventListener('click', () => {
      document.body.style.paddingRight = '0px'; 
      gallery.classList.remove('active');
      document.body.classList.remove('lock');
      
   });
   
   slider(                      // если не нужно, то присваиваем false
      sliderName = '.gallery__slider',
      sliderBtnPrev = '.gallery__btn--prev',
      sliderBtnNext = '.gallery__btn--next',
      progressBar = false,
      repeatSlides = true,
      fractionIdCurrent = false,
      fractionIdTotal = false,
      progressBarColor = false,
      showSlidesInSlider = 1,
      autoScrolling = false,
      centeredActiveSlide = false,
      startSlide = onSlide - 1
   );
   
} 

smartGalerry();



   