const burger = document.querySelector('.menu_burger');
const header_nav = document.querySelector('.header_nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  header_nav.classList.toggle('active');
});