const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.right');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
