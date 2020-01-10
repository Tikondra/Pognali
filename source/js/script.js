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
};

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
  var filter = document.querySelector('.filter-country__content');
  var btnOpen = filter.querySelector('.filter-country__btn');
  var btnClose = filter.querySelector('.filter-country__close-btn');
  var elMobile = filter.querySelectorAll('.filter-country__js-el');

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
  var btnOpen = document.querySelector('.rates__business-btn');
  var btnClose = document.querySelector('.business-rates__close-btn');
  var businessRates = document.querySelector('.business-rates');

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

  var status = document.querySelectorAll('.lvl');
  var lvl = document.querySelectorAll('.lvl__status');
  var arrayLvl = [];

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
};

function countrySelect() {
  var box = document.querySelector('.country-popup');
  var btnOpen = document.querySelector('.country-popup__title');
  var popup = document.querySelector('.country-popup__box');


  box.classList.remove('country-popup--no-js');

  btnOpen.addEventListener('click', function() {
    popup.classList.toggle('country-popup__box--open')
    btnOpen.classList.toggle('country-popup__title--open')
  })
};

function trevelmatesSelect() {
  var form = document.querySelector('.select-travelmates');
  var hobbyBtn = form.querySelector('.hobby__title');
  var hobby = form.querySelector('.hobby__list');
  var musicBtn = form.querySelector('.music__title');
  var music = form.querySelector('.music__list');
  var foodBtn = form.querySelector('.food__title');
  var food = form.querySelector('.food__list');
  var transportBtn = form.querySelector('.transport-select__title');
  var transport = form.querySelector('.transport-select__list');
  var lvlBtn = form.querySelector('.level-select__title');
  var lvl = form.querySelector('.level-select__list');

  hobby.classList.remove('hobby__list--no-js');
  hobbyBtn.addEventListener('click', function() {
    hobby.classList.toggle('hobby__list--open');
    hobbyBtn.classList.toggle('hobby__title--open');
  });

  music.classList.remove('music__list--no-js');
  musicBtn.addEventListener('click', function() {
    music.classList.toggle('music__list--open');
    musicBtn.classList.toggle('music__title--open');
  });

  food.classList.remove('food__list--no-js');
  foodBtn.addEventListener('click', function() {
    food.classList.toggle('food__list--open');
    foodBtn.classList.toggle('food__title--open');
  });

  transport.classList.remove('transport-select__list--no-js');
  transportBtn.addEventListener('click', function() {
    transport.classList.toggle('transport-select__list--open');
    transportBtn.classList.toggle('transport-select__title--open');
  });

  lvl.classList.remove('level-select__list--no-js');
  lvlBtn.addEventListener('click', function() {
    lvl.classList.toggle('level-select__list--open');
    lvlBtn.classList.toggle('level-select__title--open');
  });
};

function step() {
  var stepList = document.querySelector('.add-plan__list');
  var step1 = stepList.querySelector('.step--1');
  var step2 = stepList.querySelector('.step--2');
  var step3 = stepList.querySelector('.step--3');
  var btn1 = stepList.querySelector('.step__btn--1');
  var btn2 = stepList.querySelector('.step__btn--2');
  var btn3 = stepList.querySelector('.step__btn--3');
  var btn4 = stepList.querySelector('.step__btn--4');
  var dots = document.querySelectorAll('.add-plan__dot');

  step2.classList.remove('step--no-js');
  step3.classList.remove('step--no-js');

  btn1.addEventListener('click', function() {
    step1.classList.add('step--hide');
    step2.classList.remove('step--hide');
    dots[0].classList.remove('add-plan__dot--active');
    dots[1].classList.add('add-plan__dot--active');
  });

  btn2.addEventListener('click', function() {
    step1.classList.add('step--hide');
    step2.classList.add('step--hide');
    step3.classList.remove('step--hide');
    dots[1].classList.remove('add-plan__dot--active');
    dots[2].classList.add('add-plan__dot--active');
  });

  btn3.addEventListener('click', function() {
    step1.classList.remove('step--hide');
    step2.classList.add('step--hide');
    step3.classList.add('step--hide');
    dots[0].classList.add('add-plan__dot--active');
    dots[1].classList.remove('add-plan__dot--active');
  });

  btn4.addEventListener('click', function() {
    step1.classList.add('step--hide');
    step2.classList.remove('step--hide');
    step3.classList.add('step--hide');
    dots[1].classList.add('add-plan__dot--active');
    dots[2].classList.remove('add-plan__dot--active');
  });
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
  countrySelect();
};

if (document.querySelector('.select-travelmates')) {
  trevelmatesSelect();
};

if (document.querySelector('.add-plan__list')) {
  step();
};
