$("#scroll-btn").click(function (){
    $('html, body').animate({
        scrollTop: $("#app").offset().top
    }, 500);
});