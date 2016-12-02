<?php get_header(); ?>
<div id="homeContainer">
   <video data-autoplay data-keepplaying autoplay muted class="filmpje" id="homeMovie">
       <source src="<?php echo get_template_directory_uri(); ?>/public/img/videohome.mp4" type="video/mp4">
       <source src="<?php echo get_template_directory_uri(); ?>/public/img/videohome.ogv" type="video/ogv">
       <source src="<?php echo get_template_directory_uri(); ?>/public/img/videohome.webm" type="video/webm">
   </video>
   <div id="homeWrap">
       <div id="homePanelContent">
           <h1 class="homeHidden">Designosource</h1>
           <img src="<?php echo get_template_directory_uri(); ?>/public/img/designosource.svg" id="logoDesigno" alt="logo Designosource" title="logo Designosource">
           <div id="homeButtons">
               <a href="projects"><div class="btn-case btn-case--green">Ontdek</div></a>
               <a href="contact"><div class="btn-case">Hallo</div></a>
           </div>
          </div>
       </div>
   <img onclick="location.href='http://www.thomasmore.be';" src="<?php echo get_template_directory_uri(); ?>/public/img/logoTM.png" alt="logo Thomas More" title="logo Thomas More" id="logoTM">
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<?php get_footer(); ?>