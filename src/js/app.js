import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

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
console.log(header.getBoundingClientRect().bottom);
window.addEventListener('scroll', function(){
   if (header.getBoundingClientRect().top > AboutUs.getBoundingClientRect().top)
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
//----------------------------------------Анимация стрелки--------------------------
const aLink = document.querySelectorAll('.accordion-item__link')
const _aLinkanim = document.querySelectorAll('.link2')
const _aLinkLabel = document.querySelectorAll('.link__label')




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
