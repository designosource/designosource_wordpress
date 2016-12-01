<?php 
    /* Template name: Werkwijze */

    get_header(); 
?>
<div class="top scene_element scene_element--slideToVp">
    <h1><span class="top__first-headline scene_element--fadeOutLeft">Dit is onze</span><span class="top__second-headline scene_element--fadeOutLeft scene_element--delayed">werkwijze</span></h1>
    <div class="top__bg scene_element scene_element--fadeOutDown"></div>
</div>
<div class="first-block">
    <div class="first-block__content">
        <h2 class="block-title">1. Meet &amp; greet</h2>
        <p class="block-text">Tijdens de eerste kennismaking stellen we jou en jouw project voor aan het hele team. In deze fase wisselen we samen ideeën en suggesties uit, je kan dan ook meteen het enthousiasme en de creatieve werking van het hele team in levende lijve vaststellen. Nadien stellen we samen met jou een scope op, om zo het project te kunnen kaderen. Op basis van die scope wordt er een offerte opgemaakt.</p>
    </div>
    <div class="first-block__image"></div>
</div>
<div class="second-block">
    <div class="floating-block">
        <div class="floating-block__overlay"></div>
    </div>
    <div class="second-block__image"></div>
    <div class="second-block__content">
        <h2 class="block-title">2. Sketch en design</h2>
        <p class="block-text">Na een inspirerende en “nood-aan-cafeïne” brainstormsessie, is het tijd om het creatief beest in ons los te laten. Een uitgebreide grafische uitwerking van het product, met een oog voor kleur, lettertype en positionering is bij ons niet weg te denken. Na een goedkeuring langs jouw kant, is het tijd voor de front-enders om de code onder de loep te nemen.</p>
    </div>
</div>
<div class="third-block">
    <div class="floating-block--purple">
        <h2 class="block-title block-title--white">4. Testing</h2>
        <p class="block-text block-text--white">Compatibiliteit van het product is van groot belang. Dit wil zeggen dat we uw product testen op alle nodige toestellen. Daarom zit compatibility testing inbegrepen in de prijs. Met deze belangrijke service kunnen we je verzekeren dat het product functioneel klaar is voor lancering.</p>
    </div>
    <div class="third-block__content">
        <h2 class="block-title block-title--white">3. Ontwikkeling</h2>
        <p class="block-text block-text--white">Tijd voor het echte werk! Coden, coden, coden. In deze fase schrijven we de functionaliteiten uit.Uiteraard kiezen wij steeds voor de nieuwste technologieën en trends, die het best bij jouw project passen.</p>
    </div>
</div>
<div class="fourth-block">
    <div class="fourth-block__content">
        <h2 class="block-title">5. Lancering en onderhoud</h2>
        <p class="block-text">3,2,1 launching time. Nadat wij het project gelanceerd hebben is het tijd voor jou om te pronken met het geslaagd project. Natuurlijk laten we je dan niet aan je lot over. Tot het einde van het academiejaar, tenzij langer afgesproken, kan je met al je technische vragen bij ons terecht.
</p>

    </div>
    <div class="fourth-block__image"></div>
</div>

<footer class="footer">
    <a href="<?php echo site_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.svg" alt="Designosource Logo" class="footer__logo"></a>
    <div class="footer__email"><a href="mailto:hello@designosource.be">hello[at]designosource.be</a></div>
    <a href="http://thomasmore.be" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/public/img/tm-logo.png" alt="Thomas More Logo" class="footer__tm-logo"></a>
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/public/js/jquery.smoothState.js"></script>
<script>

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    $("html, body").addClass("noscroll");

    $(document).ready(function(){
        TweenMax.to($(".top__bg"), 1, {opacity: 1, delay: 0.1});
        TweenMax.to($(".top__first-headline"), 0.3, {x: 0, opacity: 1, delay: 1});
        TweenMax.to($(".top__second-headline"), 0.3, {x: 0, opacity: 1, delay: 1.4});
        TweenMax.to($(".top"), 0.5, {height: "90vh", delay: 1.8});
        setTimeout(function(){
            $("html, body").removeClass("noscroll");
        }, 2500);     
    });



</script>

<?php get_footer(); ?>