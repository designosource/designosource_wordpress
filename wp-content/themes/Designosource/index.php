<?php get_header(); ?>
<div id="homeContainer">
   <video data-autoplay data-keepplaying autoplay muted class="filmpje home__video" id="homeMovie">
       <source src="<?php echo get_template_directory_uri(); ?>/public/img/videohome.mp4" type="video/mp4">
       <source src="<?php echo get_template_directory_uri(); ?>/public/img/videohome.ogv" type="video/ogv">
       <source src="<?php echo get_template_directory_uri(); ?>/public/img/videohome.webm" type="video/webm">
   </video>
   <div id="homeWrap">
       <div id="homePanelContent">
           <h1 class="homeHidden">Designosource</h1>
           <img src="<?php echo get_template_directory_uri(); ?>/public/img/designosource.svg" id="logoDesigno" alt="logo Designosource" title="Designosource">
           <div id="homeButtons">
               <a href="<?php echo site_url(); ?>/projecten"><div class="button button--green">Onze projecten</div></a>
               <a href="<?php echo site_url(); ?>/contact"><div class="button">Contacteer ons</div></a>
           </div>
          </div>
       </div>
        <a href="http://thomasmore.be"><img src="<?php echo get_template_directory_uri(); ?>/public/img/logoTM.png" alt="logo Thomas More" title="Thomas More" id="logoTM"></a>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>-
<script>
  $(document).ready(function(){
   TweenMax.to($(".home__video"), 0.3, {opacity: 1, delay: 0.1});
   TweenMax.to($("#homePanelContent"), 0.3, {opacity: 1, delay: 0.5});
  });
   
</script>
<?php get_footer(); ?>