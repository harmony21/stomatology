$(document).ready(function() {
   $('section:not(.first-section)').addClass('hidden');
   $('.advantages__item').addClass('hidden');
   $(".wrapper").onepage_scroll ({
      sectionContainer: "section",                                                    
      animationTime: 1000,             
      pagination: true,                
      updateURL: false,   
      loop: true,                     
      keyboard: true,                  
      responsiveFallback: 1024,                                                   
      direction: "vertical",
      afterMove: function() {
         $('section').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 0,
            repeat: true,
            callbackFunction: function(elem, action){
               $('.advantages__item:nth-child(1)').animate({opacity: 1}, 500);
               $('.advantages__item:nth-child(2)').animate({opacity: 1}, 1000);
               $('.advantages__item:nth-child(3)').animate({opacity: 1}, 2000);
               $('.advantages__item:nth-child(4)').animate({opacity: 1}, 3000);
               $('.advantages__item:nth-child(5)').animate({opacity: 1}, 4000);
            },
         });
      },                    
   });
});
