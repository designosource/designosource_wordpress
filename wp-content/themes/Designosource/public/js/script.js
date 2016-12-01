$(document).ready(function(){


         
    //navigation hover animation
    $('ul li a').hover(function(){
        $(this).shuffleLetters();

    });
    // open/close primary navigation
    $('.hamburger-menu').on('click', function(){

        $('.hamburger-menu-icon').toggleClass('is-clicked');
        $('.header').toggleClass('menu-is-open');

        if( $('.navigation').hasClass('is-visible') ) {
            $('.navigation').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
            });
            $('html, body').removeClass("noscroll");

        } else {
            $('.navigation').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
            

            });
            $('html, body').addClass("noscroll");
        }
    });


    var header = $('.top__bg');
    var range = 300;

    $(window).on('scroll', function () {
      
        var scrollTop = $(this).scrollTop();
        var offset = header.offset().top;
        var height = header.outerHeight();
        offset = offset + height / 2;
        var calc = 1 - (scrollTop - offset + range) / range;
      
        header.css({ 'opacity': calc });
      
        if ( calc > '1' ) {
          header.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
          header.css({ 'opacity': 0 });
        }
      
    });
    

});
