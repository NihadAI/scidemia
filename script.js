let navbar = document.querySelector('.header .navbar')
let menuBtn = document.querySelector(' #menu-btn')
let registerBtn = document.querySelector('.account-form .register-btn')
let loginBtn = document.querySelector('.account-form .login-btn')
let accounBtn = document.querySelector('#account-btn')
let closeAccount = document.querySelector('#close-form')
let accountForm = document.querySelector('.account-form')
let accordion = document.querySelectorAll('.faq .accordion-container .accordion')

menuBtn.onclick = () => {
  navbar.classList.toggle('active')
}

registerBtn.onclick = () => {
  registerBtn.classList.add('active')
  loginBtn.classList.remove('active')
  document.querySelector('.account-form .login-form').classList.remove('active')
  document.querySelector('.account-form .register-form').classList.add('active')
}

loginBtn.onclick = () => {
  registerBtn.classList.remove('active')
  loginBtn.classList.add('active')
  document.querySelector('.account-form .login-form').classList.add('active')
  document.querySelector('.account-form .register-form').classList.remove('active')
}

accounBtn.onclick = () => {
  accountForm.classList.add('active')
}

closeAccount.onclick = () => {
  accountForm.classList.remove('active')
}


accordion.forEach(acco => {
  acco.onclick = () => {
    accordion.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".home-courses-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});