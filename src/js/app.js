

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
//-----------------------------------Смена цвета шапки----------------------------------//
const header = document.querySelector('.header');
const AboutUs = document.querySelector('.about-us__section');
let BurgArr;
window.addEventListener('scroll', function(){
   if (header.getBoundingClientRect().top > AboutUs.getBoundingClientRect().top - 30)
   {
      document.getElementById('logoimage1').src = "images/Логотип_Clay-01B.svg";
      BurgArr = document.querySelectorAll('.burger-line');
      for (let i = 0; i < BurgArr.length; i++){
         BurgArr[i].style = "background-color: #000"
      }
   }
   else{
      BurgArr = document.querySelectorAll('.burger-line');
      for (let i = 0; i < BurgArr.length; i++){
         BurgArr[i].style = "background-color: #fff"
      }
      document.getElementById('logoimage1').src = "images/Логотип_Clay-01 1.svg";
   }
})
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
//----------------------------------------Анимация стрелки--------------------------
const aLink = document.querySelectorAll('.accordion-item__link')

for (let elem of aLink)
{
   elem.addEventListener('mouseover', addClass);
   elem.addEventListener('mouseout', removeClass);
}


function addClass(){
   this.querySelector('.link__label').classList.add('label_active');
   this.querySelector('.link2').classList.add('link_activ');
}
function removeClass(){
   this.querySelector('.link__label').classList.remove('label_active');
   this.querySelector('.link2').classList.remove('link_activ');
}




const _promoLink = document.querySelector('.promo__link');
const _linkanim = document.querySelector('.link__icon2');
_promoLink.addEventListener('mouseover', 
   function() {
      _linkanim.classList.add('link_active');
   }
);
_promoLink.addEventListener('mouseout',
   function() {
      _linkanim.classList.remove('link_active');
   }
);
// =========================================Collection section=========================== //
const mediaQuery480px = window.matchMedia('(max-width: 480px)')
document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
   item.addEventListener('click', _toggleClass)
) 
function _toggleClass()
{
   if (this.querySelector('.trigger_line2').classList.contains('trigger_active'))
   {
      this.parentNode.querySelector('.accrodion-item__content').style = "overflow:hidden; height: 0";
      if (mediaQuery480px.matches)
      {
         this.parentNode.querySelector('.accordion-item__image').style = "height: 160px !important"; 
      }
      else
      {
         this.parentNode.querySelector('.accordion-item__image').style = "height: 250px !important"; 
      }
      this.querySelector('.trigger_line2').classList.remove('trigger_active');
   }
   else
   {
      document.querySelectorAll('.trigger_line2').forEach((item) =>
         item.classList.remove('trigger_active')
      )
      document.querySelectorAll('.accrodion-item__content').forEach((item) =>
         item.style = "overflow:hidden; height: 0px"
      ) 
      if (mediaQuery480px.matches)
      {
         document.querySelectorAll('.accordion-item__image').forEach((item) =>
            item.style = "height: 160px !important"
         )     
      }
      else
      {
         document.querySelectorAll('.accordion-item__image').forEach((item) =>
            item.style = "height: 250px !important"
         ) 
      }
      this.parentNode.querySelector('.accrodion-item__content').style = "overflow:visible; height: 250px"; 
      this.parentNode.querySelector('.accordion-item__image').style = "height: 400px !important"; 
      this.querySelector('.trigger_line2').classList.add('trigger_active');
   }
}
// ================================================SLICK SLIDER============================================ //
