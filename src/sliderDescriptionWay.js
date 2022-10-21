// -----------Slider to DescriptionWay--------------//
const DescriptionWay_slider = document.querySelector('.page1dDescriptionWay_slider');
const DescriptionWay_sliderLine = document.querySelector('.page1dDescriptionWay_slaider_line');
const DescriptionWay_btnLeft = document.querySelector('.page1dDescriptionWay_btnScrolling_left');
const DescriptionWay_btnRigth = document.querySelector('.page1dDescriptionWay_btnScrolling_right');
const DescriptionWay_lineProgres = document.querySelector(
  '.page1dDescriptionWay_scrolling_progres_secces',
);

let DescriptionWay_offset = 0;
let DescriptionWay_progres = 0;

DescriptionWay_btnLeft.addEventListener('click', () => {
  DescriptionWay_offset -= 431;
  DescriptionWay_progres -= 102.5;

  if (DescriptionWay_offset < 0) {
    DescriptionWay_offset = 1293;
    DescriptionWay_progres = 310.5;
  }

  DescriptionWay_sliderLine.style.left = -DescriptionWay_offset + 'px';
  DescriptionWay_lineProgres.style.left = DescriptionWay_progres + 'px';
});
DescriptionWay_btnRigth.addEventListener('click', () => {
  DescriptionWay_offset += 431;
  DescriptionWay_progres += 102.5;

  if (DescriptionWay_offset > 1293) {
    DescriptionWay_offset = 0;
    DescriptionWay_progres = 0;
  }

  DescriptionWay_sliderLine.style.left = -DescriptionWay_offset + 'px';
  DescriptionWay_lineProgres.style.left = DescriptionWay_progres + 'px';
});