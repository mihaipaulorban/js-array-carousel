'use strict';

/* 
      <div class="slide active">
        <img src="img/01.jpg" alt="immagine 1">
      </div>
      <div class="slide">
        <img src="img/02.jpg" alt="immagine 2">
      </div>
      <div class="slide">
        <img src="3" alt="immagine 3">
      </div>
      <div class="slide active">
        <img src="img/04.jpg" alt="immagine 4">
      </div> */

const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];
const slider = document.querySelector('.slider');
let currentSlide = 0

for (let i = 0; i < images.length; i++) {
  
  //slide
  const slide = document.createElement('div');
  slide.classList.add('slide');

  if(i === currentSlide) {
    slide.classList.add('active');
  }


  //img
  const img = document.createElement('img');
  img.src = `img/${images[i]}`;
  img.alt = `Immagine Suggestiva ${i}`;

  slide.append(img);
  slider.append(slide);
}