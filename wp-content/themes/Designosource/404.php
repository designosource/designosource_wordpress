<?php get_header(); ?>

<div class="not-found">

	<div class="not-found__content">
		<h2 class="not-found__content__subtitle">Pagina niet gevonden</h2>
		<h1 class="not-found__content__title">Oeps! Er heeft iemand een foutje gemaakt.</h1>
		
		<a href="<?php echo site_url(); ?>/team" class="button">Team</a>
		<a href="<?php echo site_url(); ?>/projecten" class="button">Projecten</a>
		
	</div>
	
</div>

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

<?php get_footer(); ?>