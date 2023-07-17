const hamburgerBtn = document.querySelector('.hamburger-btn');
const navListMenu = document.querySelector('.nav-lists');
let hamburgerBars = document.querySelectorAll('.bars');
const navbarEl = document.querySelector('.navbar');

const heroSection = document.querySelector('.hero-section');

let logo = document.querySelector('.logo img');

let heroHeight = heroSection.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeight - navbarEl.offsetHeight + 40) {
    navbarEl.style.transition = 'height .6s ease';
      navbarEl.style.height = '80px';
      navbarEl.classList.add('background');
    }else{
      navbarEl.classList.remove('background');
      navbarEl.style.height ='';
    }
  });

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  navListMenu.classList.toggle('show');
  if(navListMenu.classList.contains('show')){
    navbarEl.style.height = '120px';
  }else if(window.scrollY < heroHeight){
    navbarEl.style.height = '';
  }else{
    navbarEl.style.height = '80px';
  }

  $(document).ready(function() {
    $('.menus a').hide().delay(100).fadeIn(600);
  });
});

