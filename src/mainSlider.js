const sliderLine = document.querySelector('.popularExcursions_slaider_line');
const btnLeft = document.querySelector('.popularExcursions_btnScrolling_left');
const btnRigth = document.querySelector('.popularExcursions_btnScrolling_right');
const lineProgres = document.querySelector('.popularExcursions_scrolling_progres_secces');

let offset = 0;
let progres = 0;

btnRigth.addEventListener('click', () => {
  offset += 1140;
  progres += 344.6;
  if (offset > 2560) {
    offset = 0;
    progres = 0;
  }

  sliderLine.style.left = -offset + 'px';
  lineProgres.style.left = progres + 'px';
});
btnLeft.addEventListener('click', () => {
  offset -= 1140;
  progres -= 344.6;
  if (offset < 0) {
    offset = 2560;
    progres = 689.2;
  }

  sliderLine.style.left = -offset + 'px';
  lineProgres.style.left = progres + 'px';
});

// -----------Slider to Rewiews--------------//
const Rewiews_slider = document.querySelector('.reviews_slaider');
const Rewiews_sliderLine = document.querySelector('.reviews_slaider_line');
const Rewiews_btnLeft = document.querySelector('.reviews_btnScrolling_left');
const Rewiews_btnRigth = document.querySelector('.reviews_btnScrolling_right');
const Rewiews_lineProgres = document.querySelector('.reviews_scrolling_progres_secces');

let Rewiews_offset = 0;
let Rewiews_progres = 0;

// Rewiews_btnRigth.addEventListener('click', offsetRight);

// function offsetRight() {
//   Rewiews_offset += 350;
//   Rewiews_progres += 350;
//   Rewiews_sliderLine.style.left = -Rewiews_offset + 'px';
//   Rewiews_lineProgres.style.left = Rewiews_progres + 'px';
// }
Rewiews_btnRigth.addEventListener('click', () => {
  Rewiews_offset += 760;
  Rewiews_progres += 258.5;
  if (Rewiews_offset > 2300) {
    Rewiews_offset = 0;
    Rewiews_progres = 0;
  }
  console.log(Rewiews_progres);
  Rewiews_sliderLine.style.left = -Rewiews_offset + 'px';
  Rewiews_lineProgres.style.left = Rewiews_progres + 'px';
});
Rewiews_btnLeft.addEventListener('click', () => {
  Rewiews_offset -= 760;
  Rewiews_progres -= 258.5;
  if (Rewiews_offset < 0) {
    Rewiews_offset = 2300;
    Rewiews_progres = 775.5;
  }

  Rewiews_sliderLine.style.left = -Rewiews_offset + 'px';
  Rewiews_lineProgres.style.left = Rewiews_progres + 'px';
});

// menu Burger
const burger = document.querySelector('.menu_burger');
const header_nav = document.querySelector('.header_nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  header_nav.classList.toggle('active');
});
