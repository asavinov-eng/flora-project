
const mobileMenu = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mobile-close-btn');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
