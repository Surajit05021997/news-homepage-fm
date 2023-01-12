const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeMenuIcon.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});
