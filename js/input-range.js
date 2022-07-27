
function rangeSlider() {
   let rangeSlider = document.querySelector('.interactive__after');
   rangeSlider.addEventListener('touchmove', changeRangeSlider);
   rangeSlider.addEventListener('change', changeRangeSlider);
   rangeSlider.addEventListener('mousemove', changeRangeSlider);

   function changeRangeSlider() {
      let currentValue = rangeSlider.value;
      document.querySelector('.interactive__before').style.transform = 'translateX(' + (currentValue - 100) + '%)';
      document.querySelector('.interactive__before-img').style.transform = 'translateX(' + (100 - currentValue) + '%)';
   };
};

rangeSlider();

       