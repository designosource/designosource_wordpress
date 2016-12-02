<?php
    /* Template name: Projecten */

    get_header();
?>
<div id="fullpage">

<?php 
    query_posts(array( 
        'post_type' => 'project'
    ) );  
?>
<?php while (have_posts()) : the_post(); ?>

    <?php if(get_field("featured")): ?>

    <div class="section">

        <div class="wrap-back" style="background-image: url(<?php the_field("background"); ?>)">
            
            <?php if(get_field("video_bg")): ?>
                
                <video autoplay loop muted data-keepplaying class="top__bg__video">
                    <source src="<?php the_field("video_bg_file_ogv"); ?>" type='video/ogg'/>
                    <source src="<?php the_field("video_bg_file_webm"); ?>" type='video/webm' >
                    <source src="<?php the_field("video_bg_file"); ?>" type='video/mp4'>
                </video>

            <?php endif; ?>

            <div class="wrap-panel-content">
                 <h1><?php the_title(); ?></h1>
                 <p><?php the_content(); ?></p>
                <div class="wrap-buttons">
                    <?php if(!get_field("no_projectpage")): ?>
                        <a href="<?php the_permalink(); ?>"><div class="btn-case">Ontdek</div></a>
                    <?php endif; ?>
                    <?php if(!empty(get_field("project_url"))): ?>
                    <a href="http://<?php the_field("project_url"); ?>"><div class="btn-case btn-website">Website</div></a>
                    <?php endif; ?>
                </div>
            </div>

        </div>
    </div>
<?php endif; ?>
<?php endwhile;?>

<!--      <div class="section">

        <div class="wrap-back" style="background-image: url(<?php echo get_template_directory_uri(); ?>/public/img/archive.jpg)">
            <div class="wrap-panel-content">
                 <h1>Nostalgie?</h1>
                 <p>Ontdek alle vorige Designosource generaties.</p>
                <div class="wrap-buttons">
                    <a href="<?php echo site_url(); ?>/allprojects"><div class="btn-case">Ontdek alle projecten</div></a>
                </div>
            </div>
        </div>
    </div> -->
   
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/public/js/jquery.fullPage.min.js"></script>
<script>    
            $('#fullpage').fullpage({
                navigation: true,
                easingcss3: "ease-in-out",
                lazyLoading: true,
                onLeave: function(index, nextIndex, direction){
                    // Hide arrow on last section
                    if(nextIndex == 4)
                    {
                        $('.scroll-btn').hide();
                    }
                    else
                    {
                        $('.scroll-btn').show();
                    }
                },
                afterRender: function () {
                    $('video').each(function () {
                        //playing the video
                        $(this).get(0).play();
                    });
                }
            });
</script>

<?php get_footer(); ?>