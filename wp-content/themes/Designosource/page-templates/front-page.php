<?php
    /* Template name: Home*/

    get_header();
?>

<div class="home__video">
	<div class="home__content">

		<div class="wrapper">

			<img src="<?php echo get_template_directory_uri(); ?>/public/img/designosource.svg" class="home__content__logo" alt="logo Designosource" title="Designosource">
			<div class="home__content__buttons">
				<a href="<?php echo site_url(); ?>/projecten"><div class="button button--green">Onze projecten</div></a>
				<a href="<?php echo site_url(); ?>/contact"><div class="button">Contacteer ons</div></a>
			</div>

		</div>

	</div>
</div>
<a href="http://thomasmore.be"><img src="<?php echo get_template_directory_uri(); ?>/public/img/logoTM.png" alt="logo Thomas More" title="Thomas More" class="home__tm-logo"></a>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/bower_components/vide/dist/jquery.vide.min.js"></script>
<script>

	$(document).ready(function(){
		TweenMax.to($(".home__video"), 0.5, {opacity: 1, delay: 0.1});

		$('.home__video').vide({
			mp4:  "<?php echo get_template_directory_uri(); ?>/public/img/videohome.mp4",
			webm:"<?php echo get_template_directory_uri(); ?>/public/img/videohome.webm",
			ogv: "<?php echo get_template_directory_uri(); ?>/public/img/videohome.ogv",
			poster: "<?php echo get_template_directory_uri(); ?>/public/img/home_bg.jpg"
		}, {
			loop: false
		});
	});

</script>
<?php get_footer(); ?>