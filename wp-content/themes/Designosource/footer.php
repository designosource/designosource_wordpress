

    <!-- <div class="loading"></div> -->
    <script src="<?php echo get_template_directory_uri(); ?>/public/js/jquery.shuffleLetters.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/public/js/script.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
    <script>
        $(document).ready(function() {

// $('a').click(function(e){
//     e.preventDefault();
//     var url = $(this).attr("href");
//     window.history.pushState("", "", url);

//     $.ajax({
//       url: url,
//       success: function(data) {
//         TweenMax.to($(".loading"), 0.3, {height: "100vh"});
//         $("body").load(url);
     
//       }
//     });
// });

// TweenMax.to($(".loading"), 0.3, {height: 0, delay: 1});

// $(window).on("popstate", function(e) {
//     alert(e.originalEvent.state);
// });



         // $(".animsition-overlay").animsition({
         //    inClass: 'overlay-slide-in-top',
         //    outClass: 'overlay-slide-out-top',
         //    inDuration: 400,
         //    outDuration: 800,
         //    linkElement: '.animsition-link',
         //    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
         //    loading: false,
         //    loadingParentElement: 'body', //animsition wrapper element
         //    loadingClass: 'animsition-loading',
         //    loadingInner: '', // e.g '<img src="loading.svg" />'
         //    timeout: false,
         //    timeoutCountdown: 5000,
         //    onLoadEvent: true,
         //    browser: [ 'animation-duration', '-webkit-animation-duration'],
         //    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
         //    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
         //    overlay : true,
         //    overlayClass : 'animsition-overlay-slide',
         //    overlayParentElement : 'body',
         //    transition: function(url){ 
                
         //    }
         //  });

        });

        // MOVE SECTION DWN
        $(".scroll-btn").click(function(){
        $.fn.fullpage.moveSectionDown();
        });


    </script>

    <script src="https://cdn.jsdelivr.net/ga-lite/latest/ga-lite.min.js" async></script>
    <script>
        var galite = galite || {};
        galite.UA = 'UA-88080265-1';
    </script>
    <?php wp_footer(); ?>
</body> 
</html>