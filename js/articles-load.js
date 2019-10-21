$(document).ready(function() {
    $('.btn-load').click(function(e) {
        e.preventDefault();
        $('#articles').load("articles-load.html");
    });
});