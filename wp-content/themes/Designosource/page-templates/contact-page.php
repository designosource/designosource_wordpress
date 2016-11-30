<?php
    /* Template name: Contact */

    get_header();
?>
<div class="containerContact">
    <div class="contactContainer">
    <div class="first-block" id="blockFirst">
        <div class="first-block__content">
            <div class="quoteFixed"><h2>We deliver eggceptional work</h2></div>
            <div class="type-wrap"><span id="typed" style="white-space:pre;"></span></div>

            <div class="floating-block--team" id="blockContact">
                <h2>Samenwerken met ons?</h2>
                <p>hello[at]designosource.be</p>
            </div>
        </div>
    </div>


</div>
    <div class="contactInfoBlock">
        <div class="contactInfo">
            <h2>Waar kan je ons vinden?</h2>
            <p>Lange ridderstraat 44</p>
            <p>2800 Mechelen</p>
            <p>Tel. +32 15 36 92 20</p>
            <p>hello[at]designosource.be</p>
        </div>
    </div>

</div>

    
<footer class="footer">
    <div class="wrapper">
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.svg" alt="Logo" class="footer__logo">
    </div>
</footer>


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