//lang-------------------
const lang = document.querySelector('.header_lang');
const langList = document.querySelector('.header_lang_list');
const body = document.querySelector('body');

lang.addEventListener('click', (event)=>{
  event.stopImmediatePropagation()
  langList.classList.toggle('show');
  lang.classList.toggle('active');
});

body.addEventListener('click', ()=>{
  langList.classList.remove('show');
  lang.classList.remove('active');
});
//slider-----------------
const swiper = new Swiper('.header_slider', {

  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
   autoplay: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
