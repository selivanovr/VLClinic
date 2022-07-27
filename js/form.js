function validationAndSendForm(telMask) {
   
   document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('form');

      if(telMask === 1) {
         let telephones = form.querySelectorAll('input[type="tel"]');
         if(telephones) {
            let telephonMask = new Inputmask('+7(999) 999-99-99');
            telephonMask.mask(telephones);
         }
      };

      form.addEventListener('submit', formSend);
   
      async function formSend(e) {
         e.preventDefault();
   
         let error = formValidate(form);
         if(error === 0) {
            form.classList.add('_sending');
            console.log('ok');
            let response = await fetch('sendmail.php', {
               method: 'POST',
               body: FormData
            });
            if(response.ok) {
               let result = await response.json();
               alert(result.message);
               formPreview.innerHTML = '';
               form.reset();
            } else {
               alert("Ошибка");
               form.reset();
            }
         } else {
            alert('Заполните обязательные поля')
         }
      };
   
      function formValidate(form) {
         let error = 0;
         let formReq = document.querySelectorAll('._req');
   
         formReq.forEach(input => {
            formRemoveError(input);
            if(input.classList.contains('form__email')) {
               if(emailTest(input)) {
                  formAddError(input);
                  error++;
               }
            } else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
               formAddError(input);
               error++;
               alert('Подтвердите согласие на обработку персональных данных');
            } else if(input.classList.contains('form__number')) {
               if(numberTest(input)) {
                  formAddError(input);
                  error++;
               }
            } else if(input.classList.contains('form__name')) {
               if(nameTest(input)) {
                  formAddError(input);
                  error++;
               }
            } else {
               if(input.value === '') {
                  formAddError(input);
                  error++;
               }
            } 
         });
         return error;
      };
      function formAddError(input) {
         input.parentElement.classList.add('_error');
         input.classList.add('_error');
      };
      function formRemoveError(input) {
         input.parentElement.classList.remove('_error');
         input.classList.remove('_error');
      };
      function nameTest(input) {
         if(input.value === '') {
            return true;
         } else {
            let letters = /^[A-Za-zА-Яа-я]+$/;
            if(input.value.match(letters)) {
               if (input.value.length < 2 || input.value.length > 20) {
                     alert('Имя должно содержать от 2 до 15 символов');
                     return true;
                  } else {
                     return false;
                  }
            } else {
               alert('Неверный формат имени');
               input.focus();
               return true;
            }
         }
      };
      function numberTest(input) {
         if(telMask) {
            if(input.value === '') {
               console.log(input.value);
               return true;
            }
         } else {
            if(input.value === '') {
               return true;
            } else {
               let numbers = /^[0-9,(),-]+$/;
               if(input.value.match(numbers)) {
                  return false;
               } else {
                  console.log(input.value);
                  alert('Введите корректный номер телефона');
                  input.focus();
                  return true;
               }
            }
         }
         
      };
      function emailTest(input) {
         if(input.value === '') {
            return true;
         } else {
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
            if(input.value.match(mailformat)) {
               return false;
            } else {
               alert('Введите корректный E-mail');
               input.focus();
               return true;
            }
         }
      };
   
      const formImage = document.getElementById('formImage');
      const formPreview = document.getElementById('formPreview');

      if(formImage) {
         formImage.addEventListener('change', () => {
            uploadFile(formImage.files[0]);
         });
      }
      function uploadFile(file) {
         // проверка типа файла
         if(!['image/jpeg', 'image/png', 'image/gif', 'image/jpg'].includes(file.type)) {
            alert('Только изображения.');
            formImage.value = '';
            return;
         }
         // проверка размер файла (<2mb)
         if(file.size > 2 * 1024 * 1024) {
            alert('Не более 2 МБ');
            return;
         }
   
         var reader = new FileReader();
         reader.onload = function(e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
         };
         reader.onerror = function(e) {
            alert('Ошибка');
         };
         reader.readAsDataURL(file);
      };
   });
};

validationAndSendForm(1);  // если маска телефона нужна, то 1 и подключаем inputmask.min.js