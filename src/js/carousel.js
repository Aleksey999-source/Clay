
$(document).ready(function(){
        $('.carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,               
          dots: false,
          arrows:true,
          infinite: true, 
          draggable: false,
          

          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
});
    });