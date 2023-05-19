const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamberger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamberger = document.querySelector('#hamberger-menu');

document.addEventListener('click', function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
