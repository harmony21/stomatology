var copyright = $('.contacts-form__notice'),
        creator = $('.creator');

$(document).ready(function() {
    //подгрузка нужного контента в секции "Команда"
    if ($(window).width() <= 480) {
        $('#specialists-mobile').load("specialists-mobile.html");
    }    
    else 
    {
        $('#specialists-desktop').load("specialists-desktop.html");
    }  

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

    //удаление/присвоение классов для стрелок в секции слайдера
    if ($(window).width() <= 480) {
        $('.slider').find('.arrow-prev').addClass('arrow-prev-color arrow-prev-color-actions').removeClass('arrow-prev');
        $('.slider').find('.arrow-next').addClass('arrow-next-color arrow-next-color-actions').removeClass('arrow-next');
    }  

    //перемещение копирайта из контактов в футер
    if ($(window).width() <= 480) {
        $('.footer__bottom').append(copyright);
        $('.footer__bottom').append(creator);
    }  
});


$(window).resize(function() {
    //перемещение копирайта из футера в контакты и наоборот
    if ($(window).width() > 480) {
        $('.contacts-form__wrap').append(copyright);
        $('.contacts-form__wrap').append(creator);
    }  
    if ($(window).width() <= 480) {
        $('.footer__bottom').append(copyright);
        $('.footer__bottom').append(creator);
    }  

    //удаление/присвоение классов для стрелок в секции слайдера
    if ($(window).width() > 480) {
        $('.slider').find('.arrow-prev-color').addClass('arrow-prev').removeClass('arrow-prev-color');
        $('.slider').find('.arrow-next-color').addClass('arrow-next').removeClass('arrow-next-color');
    }  
    if ($(window).width() <= 480) {
        $('.slider').find('.arrow-prev').addClass('arrow-prev-color').removeClass('arrow-prev');
        $('.slider').find('.arrow-next').addClass('arrow-next-color').removeClass('arrow-next');
    }  
});
