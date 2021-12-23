$(function(){
    /*    Fixed Header  */
    
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let headerH = header.innerHeight();
    let nav = $('#header__nav');

    $(window).on("scroll load resize", function(){

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > +introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
    
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset-headerH
        },
        500,
        'linear'
        );
    });


    $('#navToggle').on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
    });

});