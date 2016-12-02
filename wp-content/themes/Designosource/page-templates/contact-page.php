<?php
   /* Template name: Contact */

   get_header();
?>
<div class="containerContact">
<!--    <div class="contactContainer">

           <div class="floating-block--contact" id="blockContact">
               <h2>Samenwerken met ons?</h2>
               <p>hello[at]designosource.be</p>
           </div>


       <div class="quoteFixed"><h2>We deliver eggceptional work</h2></div>
       <div class="type-wrap"><span id="typed" style="white-space:pre;"></span></div>

       <div class="contactInfoBlock">
           <div class="contactInfo">
               <h2>Waar kan je ons vinden?</h2>
               <p>Lange ridderstraat 44</p>
               <p>2800 Mechelen</p>
               <p>Tel. +32 15 36 92 20</p>
           </div>
       </div>
</div> -->

    <div class="grid">
        <div class="side side--bg">
            <div class="overlay"></div>
        </div>
        <div class="side">
            <div class="side__heading">
                <h1 class="side__subtitle">Kom eens</h1>
                <h1 class="side__title">gezellig langs</h1>
            </div>
            
            <div class="floating-block--contact">
                <a href="mailto:hello@designosource.be" class="email">hello[at]designosource.be</a>
            </div>
            
           

            <div class="contact-info">
                <div>
                    <h2 class="contact-info__title">Waar kan je ons vinden?</h2>
                   <p>Lange Ridderstraat 44</p>
                   <p>2800 Mechelen</p>
                   <p>Tel. +32 15 36 92 20</p>
                </div>

                <div>
                    <span class="contact-info__logo-description">Een project van</span>
                    <a href="http://www.thomasmore.be"><img src="<?php echo get_template_directory_uri(); ?>/public/img/tm-logo-color.png" alt="" class="contact-info__logo"></a>
                </div>

           </div>

        </div>
    </div>

</div>

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
   <script src="<?php echo get_template_directory_uri(); ?>/public/js/typed.min.js"></script>
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


<?php get_footer(); ?>