'use strict'



const leftArrow = document.querySelector('.tabs-header__arrows--left');
const rightArrow = document.querySelector('.tabs-header__arrows--right');

const tabItems = document.querySelectorAll('.header__tab-item');
const numberOfElements = tabItems.length

const statusLineConst = document.querySelector('.tabs-header__statusline');
let statusLineWidht = document.querySelector('.tabs-header__statusline-line');

let currentElement = 1; 

let tabsLineStatrWh = parseInt(getComputedStyle(statusLineConst).width, 10);
let tabsLineWh = parseInt(getComputedStyle(statusLineWidht).width, 10);


let totalNumber = document.getElementById('totalnumbers').innerHTML = '0' + numberOfElements;


function swapItem() {
   tabItems.forEach(element => {
      if(element.getAttribute('data-item') === String(currentElement)) {
         element.style.opacity = '1';
         return
      }
      element.style.opacity = '0'
   });
}


swapItem();

document.getElementById('currentnumber').innerHTML = '0' + 1;
statusLineWidht.style.width = (currentElement/numberOfElements * tabsLineStatrWh) + 'px';


leftArrow.addEventListener('click', function() {
   document.getElementById('currentnumber').innerHTML = '0' + (currentElement - 1);
   if(currentElement === 1) {
      currentElement = numberOfElements;
      statusLineWidht.style.width = tabsLineStatrWh + 'px';
      document.getElementById('currentnumber').innerHTML = '0' + (currentElement);
      swapItem();
      return
   }
   let tabsLineWh = parseInt(getComputedStyle(statusLineWidht).width, 10);
   
   tabsLineWh = tabsLineWh - tabsLineWh/currentElement + 'px';
   statusLineWidht.style.width = tabsLineWh;
   currentElement -= 1;
   swapItem();

})

rightArrow.addEventListener('click', function() {
   document.getElementById('currentnumber').innerHTML = '0' + (currentElement + 1);
   if(currentElement === numberOfElements) {
      currentElement = 1;
      statusLineWidht.style.width = tabsLineStatrWh/numberOfElements + 'px';
      document.getElementById('currentnumber').innerHTML = '0' + (currentElement);
      swapItem();
      return
   }
   let tabsLineWh = parseInt(getComputedStyle(statusLineWidht).width, 10);
   
   tabsLineWh = tabsLineWh + tabsLineWh/currentElement + 'px';
   statusLineWidht.style.width = tabsLineWh;
   currentElement += 1;
   swapItem();
})

//--------------------------------TABS----------------------------------------
function removeClass(elem) {
   elem.forEach(function(item) {
      item.classList.remove('active');
   });
};


const buttons = document.querySelectorAll('.tab__button');
const tabs = document.querySelectorAll('.tab__item');
const tabsActive = document.querySelectorAll('.tab__item .active');
const decor = document.querySelector('.services__pricepoint');

buttons.forEach(function(item) {
   
   item.addEventListener('click', function(){
      
      if( ! item.classList.contains('active')) {
         
         tabs.forEach(function(el) {

            let tab = el.getAttribute('data-tab');
            let tabId = item.id;
            
            if(tabId === tab && ! el.classList.contains('active')) {
               
               removeClass(tabs);
               el.classList.add('active');
               //decor.style.display = 'block';

               } else {
               el.classList.remove('active');
               
               
               }
         });

         removeClass(buttons);
         item.classList.add('active');
      };
     
   });
   
});

//----------------------------------------------------------------------------------

