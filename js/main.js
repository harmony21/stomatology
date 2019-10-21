$(document).ready(function() {
  
    //подгрузка нужного контента в секции "Команда"
    if ($(window).width() <= 480) {
        $('#specialists-mobile').load("specialists-mobile.html");
    }    
    else 
    {
        $('#specialists-desktop').load("specialists-desktop.html");
    }  

    if ($(window).width() <= 480) {
        $('.menu-link').fancybox({
            afterLoad : function(){
                $(".fancybox-container").addClass('fadeInRight animated');
            },
            beforeClose : function(){
                $(".fancybox-container").addClass('fadeOutLeft animated');
            }   
        });
    }

    //Бесплатная консультация
    $('.btn-consultation').fancybox({
        autoFocus: false
    });
    
    //Записаться на прием
    $('.btn-sign-up').fancybox({
        autoFocus: false
    });

    //Рассчитать стоимость
    $('.btn-calculate-price').fancybox({
        autoFocus: false
    });

    //закрытие меню
    $('.menu-link').fancybox({
        afterLoad : function(){
            $(".fancybox-container").addClass('fadeInDown animated');
        },
        beforeClose : function(){
            $(".fancybox-container").addClass('fadeOutUp animated');
        }   
    });
    $('.close').click(function() {
        $.fancybox.close();
    });

    //подгрузка нужного контента на странице "Услуги"
    if ($(window).width() <= 550) {
        $('#service-mobile').load("service-mobile.html");
    }    
    else 
    {
        $('#service-desktop').load("service-desktop.html");
    }  

    //подгрузка нужного контента на странице "Врачи подробно (слайдер команды)"
    if ($(window).width() <= 480) {
        $('#specialist-more-mobile').load("specialist-more-mobile.html");
    }    
    else 
    {
        $('#specialist-more-desktop').load("specialist-more-desktop.html");
    }  

    //замена главной картинки на странице подробной статьи
    if ($(window).width() <= 480) {
        var img = $('.article-intro__background').find('img');
        img.attr('src', 'temp/article1.png');
    } 
});