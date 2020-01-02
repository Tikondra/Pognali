var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {

    center: {lat: 59.936000, lng: 30.321000},
    zoom: 17,
    disableDefaultUI: true
  });

  var imgpin = {
    url: 'img/map-marker.svg',
    scaledSize: new google.maps.Size(50, 50),
  }

  var marker = new google.maps.Marker({

    position: {lat: 59.935900, lng: 30.321000},

    map: map,
    title: 'Погнали',
    optimized: false,
    icon: imgpin
  });
}

function menu () {

  var header = document.querySelector('.page-header');
  var navMain = header.querySelector('.page-header__info');
  var navToggle = header.querySelector('.page-header__menu-open');
  var logo = header.querySelector('.page-header__logo');
  var menu = header.querySelector('.navigation__list');

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
        menu.classList.add('navigation__list--scroll');
        logo.classList.add('page-header__logo--blue');
        navToggle.classList.add('page-header__menu-open--scroll');
      }
      if(pageYOffset === 0 && navMain.classList.contains("page-header__info--close")) {
        header.classList.remove("page-header--scroll");
        menu.classList.remove('navigation__list--scroll');
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
  let businessRates = document.querySelector('.business-rates');

  businessRates.classList.add('business-rates--hide');
  businessRates.classList.remove('business-rates--no-js');

  btnOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    businessRates.classList.remove('business-rates--hide');
  });

  btnClose.addEventListener('click', function() {
    businessRates.classList.add('business-rates--hide');
  });
};

function statusBar () {

  let status = document.querySelectorAll('.lvl');
  let lvl = document.querySelectorAll('.lvl__status');
  let arrayLvl = [];

  for (var i = 0; i < lvl.length; i++) {
    arrayLvl.push(lvl[i].innerHTML);
  };

  for (var i = 0; i < arrayLvl.length; i++) {
    progressBarUpdate(arrayLvl[i], 100, status[i]);
  };

  function rotate(element, degree) {
    element.style.transform = 'rotate(' + degree + 'deg)';
    element.style.zoom = 1;
  };

  function progressBarUpdate(x, outOf, elem) {
      var firstHalfAngle = 180;
      var secondHalfAngle = 0;

      var drawAngle = x / outOf * 360;

      if (drawAngle <= 180) {
          firstHalfAngle = drawAngle;
      } else {
          secondHalfAngle = drawAngle - 180;
      }

      rotate(elem.querySelector(".lvl__slice1"), firstHalfAngle);
      rotate(elem.querySelector(".lvl__slice2"), secondHalfAngle);
  }
}

function countrySelect() {
  let box = document.querySelector('.country-popup');
  let btnOpen = document.querySelector('.country-popup__title');
  let popup = document.querySelector('.country-popup__box');


  box.classList.remove('country-popup--no-js');

  btnOpen.addEventListener('click', function() {
    popup.classList.toggle('country-popup__box--open')
    btnOpen.classList.toggle('country-popup__title--open')
  })
}

menu();


if (document.querySelector('.filter-country__content')) {
  countryFilter();
};

if (document.querySelector('.business-rates__content')) {
  business();
};

if (document.querySelector('.lvl')) {
  statusBar();
};

if (document.querySelector('.country-popup')) {
  countrySelect()
};
