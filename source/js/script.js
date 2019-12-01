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

menu();
