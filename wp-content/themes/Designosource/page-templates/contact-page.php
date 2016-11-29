<?php
    /* Template name: Contact */

    get_header();
?>

 <div class="contactContainer">
       <div class="type-wrap">     <span id="typed" style="white-space:pre;"></span> </div> 
           <div class="floating-block--purple" id="contactBlockPurple">
               <div class="contactInfoPart1">
                   <h2>Samenwerken met ons?</h2>
                   <h3>hello@designosource.be</h3>
               </div>
           </div>
           <div class="third-block__content">
               <div class="contactInfoPart2">
                   <h4>Waar kan je ons vinden?</h4>
                   <p>Lange ridderstraat 44</p>
                   <p>2800 Mechelen</p>
                   <p>Tel. +32 15 36 92 20</p>
                   <p id="contactEmail">hello@designosource.be</p>
               </div>
           </div>
       </div>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/public/js/jquery.shuffleLetters.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/public/js/script.js"></script>
    <script>
        $(function(){
            $("#typed").typed({
                strings: ["We deliver eggceptional work.", "Get to know us!", "Good design is good business."],
                typeSpeed: 20,
                backDelay: 1000,
                loop: true,
                contentType: 'html',
                loopCount: false,
            });
        });
    </script>
    <script src="<?php echo get_template_directory_uri(); ?>/public/js/typed.min.js"></script>

<?php get_footer(); ?>