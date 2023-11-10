'use strict';

const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];
const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let currentSlide = 0

//Creazione markup html

for (let i = 0; i < images.length; i++) {
  
  //Creazione slide
  const slide = document.createElement('div');
  slide.classList.add('slide');

  if(i === currentSlide) {
    slide.classList.add('active');
  }


  //Aggiunta immagini
  const img = document.createElement('img');
  img.src = `img/${images[i]}`;
  img.alt = `Immagine Suggestiva ${i}`;

  slide.append(img);
  slider.append(slide);
}


const domSlides = document.querySelectorAll('.slide');


//Eventi che manipolano lo slider


//Tasto destro
left.addEventListener('click', function () {
  console.log('ho cliccato su left');


  //Se la slide selezionata dell'array ha una posizione maggiore di 0, rimuovo la classe active da questa, mi sposto di una slide e poi aggiungo la classe active
  if(currentSlide > 0) {
    
    domSlides[currentSlide].classList.remove('active');

    currentSlide--;
    
    domSlides[currentSlide].classList.add('active');
  }
});

//Tasto sinistro
right.addEventListener('click', function () {
  console.log('ho cliccato su right');

  //Se la slide selezionata dell'array ha una posizione minore della lunghezza totale dell'array -1, rimuovo la classe active da questa, mi sposto di una slide e poi aggiungo la classe active
  if(currentSlide < domSlides.length - 1) {

    domSlides[currentSlide].classList.remove('active');

    currentSlide++;
    
    domSlides[currentSlide].classList.add('active');
  }
});