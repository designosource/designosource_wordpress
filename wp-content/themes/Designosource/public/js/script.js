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

    

});
