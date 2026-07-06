const openBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
