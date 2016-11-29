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

     <div class="section">

        <div class="wrap-back" style="background-image: url(<?php echo get_template_directory_uri(); ?>/public/img/archive.jpg)">
            <div class="overlay"></div>
            <div class="wrap-panel-content">
                 <h1>Nostalgie?</h1>
                 <p>Ontdek alle vorige Designosource generaties.</p>
                <div class="wrap-buttons">
                    <a href="<?php echo site_url(); ?>/allprojects"><div class="btn-case">Ontdek alle projecten</div></a>
                </div>
            </div>
        </div>
    </div>
   
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<?php get_footer(); ?>