function menu () {

  var header = document.querySelector('.page-header');
  var navMain = header.querySelector('.page-header__info');
  var navToggle = header.querySelector('.page-header__menu-open');
  var logo = header.querySelector('.page-header__logo');

  header.classList.remove('page-header--no-js');

    navToggle.addEventListener('click', function() {

      navToggle.classList.toggle('page-header__menu-open--close');

      if (navMain.classList.contains('page-header__info--close')) {
        navMain.classList.remove('page-header__info--close');
        navMain.classList.add('page-header__info--open');
        logo.classList.add('page-header__logo--blue');
      } else {
        navMain.classList.add('page-header__info--close');
        navMain.classList.remove('page-header__info--open');
        logo.classList.remove('page-header__logo--blue');
      }
    });

    window.addEventListener("scroll", function(){

      if(navMain.classList.contains("page-header__info--close")) {
        header.classList.add("page-header--scroll");
        logo.classList.add('page-header__logo--blue');
        navToggle.classList.add('page-header__menu-open--scroll');
      }
      if(pageYOffset === 0 && navMain.classList.contains("page-header__info--close")) {
        header.classList.remove("page-header--scroll");
        logo.classList.remove('page-header__logo--blue');
        navToggle.classList.remove('page-header__menu-open--scroll');
      }
    });
};

function countryFilter () {
  let filter = document.querySelector('.filter-country__content');
  let btnOpen = filter.querySelector('.filter-country__btn');
  let btnClose = filter.querySelector('.filter-country__close-btn');
  let elMobile = filter.querySelectorAll('.filter-country__js-el');

  for (var i = 0; i < elMobile.length; i++) {
    elMobile[i].classList.add('filter-country__js-el--hide');
  };

  btnOpen.classList.remove('filter-country__btn--hide');

  btnOpen.addEventListener('click', function() {
    btnOpen.classList.toggle('filter-country__btn--open');
    for (var i = 0; i < elMobile.length; i++) {
      elMobile[i].classList.toggle('filter-country__js-el--hide');
    };
  });

  btnClose.addEventListener('click', function() {
    for (var i = 0; i < elMobile.length; i++) {
      elMobile[i].classList.add('filter-country__js-el--hide');
    };
  });
};

function business () {
  let btnOpen = document.querySelector('.rates__business-btn');
  let btnClose = document.querySelector('.business-rates__close-btn');
  let businessRates = document.querySelector('.business-rates__content');

  businessRates.classList.add('business-rates__content--hide');

  btnOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    businessRates.classList.remove('business-rates__content--hide');
  });

  btnClose.addEventListener('click', function() {
    businessRates.classList.add('business-rates__content--hide');
  });
};

menu();

if (document.querySelector('.filter-country__content')) {
  countryFilter();
};

if (document.querySelector('.business-rates__content')) {
  business();
};
