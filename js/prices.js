$(document).ready(function() {
    $('.prices__title').click(function(e) {
        e.preventDefault();
        if (!$(this).closest('.prices__item').hasClass('active')) {
            $(this).closest('.prices__item').addClass('active');
            var contentHeight = $(this).closest('.prices__item').find('.prices__inside-list').outerHeight(true);
            $(this).closest('.prices__item').find('.prices__wrap').css('height', contentHeight);
        }
        else {
            $(this).closest('.prices__item').removeClass('active');
            $(this).closest('.prices__item').find('.prices__wrap').css('height', 0);
        }
    });
});
