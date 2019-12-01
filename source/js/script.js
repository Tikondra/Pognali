function menu () {

  var header = document.querySelector('.page-header');
  var navMain = document.querySelector('.page-header__info');
  var navToggle = document.querySelector('.page-header__menu-open');
  var navWrap = document.querySelector('.wrapper-header');

  header.classList.remove('page-header--no-js');

    navToggle.addEventListener('click', function() {

      navToggle.classList.toggle('page-header__menu-open--close');

      if (navMain.classList.contains('page-header__info--close')) {
        navMain.classList.remove('page-header__info--close');
        navMain.classList.add('page-header__info--open');
      } else {
        navMain.classList.add('page-header__info--close');
        navMain.classList.remove('page-header__info--open');
      }
    });

    window.addEventListener("scroll", function(){
      navWrap.classList.add("wrapper-header--scroll");
      if(pageYOffset === 0) {
        navWrap.classList.remove("wrapper-header--scroll");
      }
    });
};



menu();
