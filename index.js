const bar = document.querySelector('#bars');
const menu = document.querySelector('#menu');
const closeButton = document.querySelector('#close-button');

      bar.addEventListener('click', function(){
        menu.classList.remove('hidden');
        menu.classList.add('block')
      });

      closeButton.addEventListener('click', function(){
        menu.classList.remove('block');
        menu.classList.add('hidden')
      });
