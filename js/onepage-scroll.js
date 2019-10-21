$(document).ready(function() {
   $(".wrapper").onepage_scroll ({
      sectionContainer: "section",                                                    
      animationTime: 1000,             
      pagination: true,                
      updateURL: false,   
      loop: true,                     
      keyboard: true,                  
      responsiveFallback: 1024,                                                   
      direction: "vertical",                    
   });
});
