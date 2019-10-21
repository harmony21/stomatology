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
  $('.arrow-prev-color-services').click(function(e) {
    slider2.goToPrevSlide();
  });
  $('.arrow-next-color-services').click(function(e) {
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

    //слайдер специалистов
    var slider6 = $("#lightSlider6");
    slider6.lightSlider({
      item: 4,
      speed: 600,
      pager: false,
      enableDrag: true,
      adaptiveHeight: true,
      responsive : [
        {
          breakpoint:1024,
          settings: {
              item:3
            }
        },
        {
          breakpoint:768,
          settings: {
              item:2
            }
        },
        {
          breakpoint:480,
          settings: {
              item:1
            }
        }
    ]
    }); 
    $('.arrow-prev-color-specialists').click(function(e) {
      slider6.goToPrevSlide();
    });
    $('.arrow-next-color-specialists').click(function(e) {
      slider6.goToNextSlide();
    });

    //слайдер работ специалиста
    var slider7 = $("#lightSlider7");
    slider7.lightSlider({
      item: 6,
      speed: 600,
      pager: false,
      enableDrag: true,
      adaptiveHeight: true,
      responsive : [
        {
          breakpoint:1366,
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
          breakpoint:480,
          settings: {
              item:1
            }
        }
    ]
    }); 
    $('.arrow-prev-color-works').click(function(e) {
      slider7.goToPrevSlide();
    });
    $('.arrow-next-color-works').click(function(e) {
      slider7.goToNextSlide();
    });

    //слайдер статей "вам также может быть интересно"
    var slider8 = $("#lightSlider8");
    slider8.lightSlider({
      item: 3,
      speed: 600,
      pager: false,
      enableDrag: true,
      adaptiveHeight: false,
      responsive : [
        {
          breakpoint:768,
          settings: {
              item:2
            }
        },
        {
          breakpoint:580,
          settings: {
              item:1
            }
        }
    ]
    }); 
    $('.arrow-prev-color-article').click(function(e) {
      slider8.goToPrevSlide();
    });
    $('.arrow-next-color-article').click(function(e) {
      slider8.goToNextSlide();
    });
});