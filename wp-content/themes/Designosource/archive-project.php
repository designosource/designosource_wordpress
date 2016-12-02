<?php
    get_header();
?>
<div class="top">
    <h1><span class="top__first-headline">Alle projecten</span><span class="top__second-headline">Down memory lane</span></h1>
    <div class="top__bg"></div>
</div>
<div class="wrapper">
	
	<?php $date = 2016; ?>
	<div class="projects-grid">
		<div class="projects-year">2016</div>

		<?php 
			$args = array(
				'orderby' => 'date',
				'order'   => 'DESC',
				'post_type' => 'project',
				'year' => $date
			);
			$query = new WP_Query( $args );
		?>
	    <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
	    	
			<?php echo get_the_date(); ?>
	    	<?php if(intval(get_the_date( "Y" )) == $date): ?>
		    	<a href="<?php the_field("project_url"); ?>" class="projects-grid__col" style="background-image: url(<?php the_field('background'); ?>)">
		    		<span class="projects-grid__col__text"><?php the_title(); ?></span>
		    		<div class="overlay"></div>
		    	</a>
		    <?php else: ?>
				</div>
				
				<div class="projects-grid">
					<?php if($date % 2 == 0): ?>
						<div class="projects-year projects-year--green"><?php echo get_the_date( "Y" ); ?></div>
					<?php else: ?>
						<div class="projects-year"><?php echo get_the_date( "Y" ); ?></div>
					<?php endif; ?>
					
					<a href="<?php the_field("project_url"); ?>" class="projects-grid__col" style="background-image: url(<?php the_field('background'); ?>)">
			    		<span class="projects-grid__col__text"><?php the_title(); ?></span>
			    		<div class="overlay"></div>
			    	</a>

	    	<?php $date = intval(get_the_date( "Y" )); endif; ?>
    	<?php endwhile; endif; ?>

	</div>

</div>

<footer class="footer">
    <a href="<?php echo site_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.svg" alt="Designosource Logo" class="footer__logo"></a>
    <div class="footer__email"><a href="mailto:hello@designosource.be">hello[at]designosource.be</a></div>
    <a href="http://thomasmore.be" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/public/img/tm-logo.png" alt="Thomas More Logo" class="footer__tm-logo"></a>
</footer>

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
<script>

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    $(document).ready(function(){
        TweenMax.to($(".top__bg"), 1, {opacity: 1, delay: 0.1});
        TweenMax.to($(".top__first-headline"), 0.3, {x: 0, opacity: 1, delay: 1});
        TweenMax.to($(".top__second-headline"), 0.3, {x: 0, opacity: 1, delay: 1.4});
        TweenMax.to($(".top"), 0.5, {height: "90vh", delay: 1.8});
        setTimeout(function(){
            $(".workflow").css("overflow", "auto");
        }, 2100);     
    });

</script>

<?php get_footer(); ?>