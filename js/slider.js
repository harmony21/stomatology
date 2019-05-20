$(document).ready(function() {
  //слайдер во второй секции на главной (акции/новости)
  var slider = $("#lightSlider");
  slider.lightSlider({
    item: 1,
    speed: 600,
    pager: false,
    enableDrag: false
  }); 
  $('.arrow-prev').click(function(e) {
    slider.goToPrevSlide();
  });
  $('.arrow-next').click(function(e) {
    slider.goToNextSlide();
  });
  $('.arrow-prev-color-actions').click(function(e) {
    slider.goToPrevSlide();
  });
  $('.arrow-next-color-actions').click(function(e) {
    slider.goToNextSlide();
  });
  

  //слайдер услуг на главной
  var slider2 = $("#lightSlider2");
  slider2.lightSlider({
    item: 6,
    speed: 600,
    pager: false,
    enableDrag: false,
    responsive : [
      {
          breakpoint:1320,
          settings: {
              item:5
            }
      },
      {
          breakpoint:1024,
          settings: {
              item:4
            }
      },
      {
        breakpoint:768,
        settings: {
            item:3
          }
      },
      {
        breakpoint:550,
        settings: {
            item:2
          }
      },
      {
        breakpoint:360,
        settings: {
            item:1
          }
      }
  ]
  }); 
  $('.arrow-prev-color').click(function(e) {
    slider2.goToPrevSlide();
  });
  $('.arrow-next-color').click(function(e) {
    slider2.goToNextSlide();
  });


    //слайдер команды (мобильная версия)
    var slider3 = $("#lightSlider3");
    slider3.lightSlider({
      item: 1,
      speed: 600,
      pager: false,
      enableDrag: true,
      adaptiveHeight: true,
    }); 
    $('.arrow-prev-color-team').click(function(e) {
      slider3.goToPrevSlide();
    });
    $('.arrow-next-color-team').click(function(e) {
      slider3.goToNextSlide();
    });

    //слайдер отзывов
    var slider4 = $("#lightSlider4");
    slider4.lightSlider({
      item: 1,
      speed: 600,
      pager: false,
      enableDrag: true,
      adaptiveHeight: true,
    }); 
    $('.arrow-prev-color-reviews').click(function(e) {
      slider4.goToPrevSlide();
    });
    $('.arrow-next-color-reviews').click(function(e) {
      slider4.goToNextSlide();
    });

});