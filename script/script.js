$(document).ready(function () {
    var scrollTrigger = 170,
    backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#toTop').addClass('show');
        } else {
            $('#toTop').removeClass('show');
        }
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#toTop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $(document).on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
    });

    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
        return false;
    });

});
