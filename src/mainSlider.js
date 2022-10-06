const slider = document.querySelector('.popularExcursions_slaider');
const sliderLine = document.querySelector('.popularExcursions_slaider_line');
const btnLeft = document.querySelector('.btnScrolling_left');
const btnRigth = document.querySelector('.btnScrolling_right');
const lineProgres = document.querySelector('.scrolling_progres_secces');

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
