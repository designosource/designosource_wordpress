<?php
    get_header();
?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<div class="top">
    <div class="top__content">
        <div class="wrapper">
            <h1 class="top__title"><?php the_title(); ?></h1>
            <div class="wrap-buttons">
                <a href="<?php echo site_url(); ?>/projecten" class="btn-case btn-case--green">Alle projecten</a>
                    <?php if(!empty(get_field("project_url"))): ?>
                    <a href="http://<?php the_field("project_url"); ?>"><div class="btn-case btn-website">Website</div></a>
                    <?php endif; ?>  
            </div>
        </div>        
    </div>
    <div class="top__bg" style="background-image: url(<?php the_field("background"); ?>)">
        <?php if(get_field("video_bg")): ?>
            <video autoplay loop muted class="top__bg__video">
                <source src="<?php the_field("video_bg_file_ogv"); ?>" type='video/ogg'/>
                <source src="<?php the_field("video_bg_file_webm"); ?>" type='video/webm' >
                <source src="<?php the_field("video_bg_file"); ?>" type='video/mp4'>
            </video>

        <?php endif; ?>
        <div class="top__bg--blur" style="background-image: url(<?php the_field("background"); ?>)"></div>
    </div>
</div>

<div class="wrapper">
    <div class="project-description">
        <h2 class="project-description__title">In het kort</h2>
        <div class="project-description__text"><?php the_content(); ?></div>
    </div>

    <div class="project-photos">
        <div class="project-photos__photo project-photos__photo--big" style="background-image: url(<?php the_field("photo_1"); ?>)"></div>
        <div class="project-photos__photo" style="background-image: url(<?php the_field("photo_2"); ?>)"></div>
        <div class="project-photos__photo" style="background-image: url(<?php the_field("photo_3"); ?>)"></div>
        <div class="project-photos__floating">
            <h2 class="project-photos__floating__title">Over <?php the_title(); ?></h2>
            <div class="project-photos__floating__text"><?php the_field("full_description"); ?> </div>
        </div>

        <!-- Slider - only used on mobile -->
        <div class="swiper-container project-swiper">

            <div class="swiper-wrapper">
           
                <div class="project-photos__photo swiper-slide" style="background-image: url(<?php the_field("photo_1"); ?>)"></div>
                <div class="project-photos__photo swiper-slide" style="background-image: url(<?php the_field("photo_2"); ?>)"></div>
                <div class="project-photos__photo swiper-slide" style="background-image: url(<?php the_field("photo_3"); ?>)"></div>
                
            </div>
       
            <div class="swiper-pagination"></div>
            
        </div>
    </div>
    

</div>

<div class="project-detail">
    <div class="wrapper">
            
        <h2 class="title">Probleemstelling</h2>
        <?php the_field("problem"); ?>
    
    </div>
</div>

<div class="project-solution">
    <div class="wrapper">
        <div class="grid">
            <div class="col">
                <div class="project-detail__col__image" style="background-image: url(<?php the_field("photo_4"); ?>  )"></div>
            </div>
            <div class="col project-detail__col__content">
                <h2 class="title">Wat deden wij?</h2>
                <?php the_field("solution"); ?>  
            </div>
        </div>
    </div>
</div>


<div class="project-footer">
    <?php
        $prev_post = get_previous_post();
        if (!empty( $prev_post )): 
    ?>
      
        <a href="<?php echo get_permalink( $prev_post->ID ); ?>" class="project-footer__prev" style="background-image: url(<?php echo get_field("background", $prev_post->ID); ?>)">
            <span class="project-footer__subtitle">Vorige project</span>
            <span class="project-footer__title"><?php echo $prev_post->post_title; ?></span>
            <div class="project-footer__overlay"></div>
        </a>

    <?php endif; ?>

    <?php
        $next_post = get_next_post();
        if (!empty( $next_post )): 
    ?>
        <a href="<?php echo get_permalink( $next_post->ID ); ?>" class="project-footer__next" style="background-image: url(<?php echo get_field("background", $next_post->ID); ?>)">
            <span class="project-footer__subtitle">Volgende project</span>
            <span class="project-footer__title"><?php echo $next_post->post_title; ?></span>
            <div class="project-footer__overlay"></div>
        </a>
  
    <?php endif; ?>
    
</div>

<footer class="footer">
    <a href="<?php echo site_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.svg" alt="Designosource Logo" class="footer__logo"></a>
    <div class="footer__email"><a href="mailto:hello@designosource.be">hello[at]designosource.be</a></div>
    <a href="http://thomasmore.be" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/public/img/tm-logo.png" alt="Thomas More Logo" class="footer__tm-logo"></a>
</footer>

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.0/css/swiper.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.0/js/swiper.min.js"></script>

<script>

  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 2000,
    pagination: '.swiper-pagination'
  })  

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

    (function () {
        $(window).scroll(function () {
            var oVal;
            oVal = $(window).scrollTop() / 240;
            return $('.top__bg--blur').css('opacity', oVal);
        });
    }.call(this));

</script>
<?php endwhile; endif; ?>
<?php get_footer(); ?>