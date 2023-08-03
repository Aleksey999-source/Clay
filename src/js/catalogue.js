// Проверка на тачскрин --------------------------------------------------
let isMobile = 
{
   Android: function() {return navigator.userAgent.match(/Android/i);},
   Blackberry: function() {return navigator.userAgent.match(/Blackberry/i);},
   IOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
   Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
   Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
   any: function() {return isMobile.Android() || isMobile.Blackberry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows();}
}

let body = document.querySelector('body');

isMobile.any() ? body.classList.add('touch') : body.classList.add('mouse');

//----------------------------------Бургер меню----------------------------------------//
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
burger.addEventListener('click', function(){
   burger.classList.toggle('burger_active');
   burgerMenu.classList.toggle('_active');
      if (burgerMenu.classList.contains("_active"))
   {
      document.body.style.overflow = 'hidden';
   }
   else
   {
      document.body.style.overflow = "scroll";
   }
});
document.querySelectorAll('.burger-item').forEach((item) =>
   {
      item.addEventListener('click', () =>
         {
            document.body.style.overflow = "scroll";
            burger.classList.toggle('burger_active');
            burgerMenu.classList.toggle('_active');
         }
      )
   }
)

// ================================================Цвет ссылок в шапке ============================================== //
document.querySelectorAll('.menu__link').forEach((item) => {
    item.style = "color: #000"
})
document.querySelector('.fa-solid').style = "color: #000";
