<!DOCTYPE html>
<html lang="en" id="content">
<head>
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/public/img/favicons/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/public/img/favicons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="<?php echo get_template_directory_uri(); ?>/public/img/favicons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="<?php echo get_template_directory_uri(); ?>/public/img/favicons/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="<?php echo get_template_directory_uri(); ?>/public/img/favicons/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="<?php echo get_template_directory_uri(); ?>/public/img/favicons/mstile-310x310.png" />

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="theme-color" content="">

    <?php 
        $title = null;

        if(is_404()):
            $title = "404";
        elseif(is_front_page()):
            $title = "Home";
        else: 
            $title = get_the_title();
        endif; 

    ?>

    <title><?php echo $title; ?> | Designosource</title>
    

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/reset.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/style.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/jquery.fullPage.css" />
 <!--    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/animsition.min.css"> -->


    <meta name="twitter:title" content="<?php echo $title; ?> | Designosource"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@designosource"/>
    <meta name="twitter:description" content=""/>

    <meta property="og:title" content="<?php echo $title; ?> | Designosource"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image:height" content="400"/>
    <meta property="og:image:width" content="700"/>
    <meta property="og:site_name" content="Designosource"/>
    <meta property="og:description" content=""/>
    <meta property="og:url" content="<?php echo get_page_link(get_the_ID()); ?>"/>
    <?php
        $id = get_the_ID();
        if(!empty(get_field("background", $id))):
    ?>
        <meta property="og:image" content="<?php echo get_field("background", $id);?>"/>
        <meta name="twitter:image" ccontent="<?php echo get_field("background", $id);?>"/>
    <?php else: ?>
        <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/public/img/bg.png"/>
        <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/public/img/bg.png"/>
    <?php endif; ?>

        



        


    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:347161,hjsv:5};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
    </script>

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div class="m-scene" id="main">
    <header class="header">
        <div class="logo"><a href="<?php echo site_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.svg" alt="Logo Designosource"></a></div>
        <a class="hamburger-menu"><span class="hamburger-menu-icon"></span></a>
        <!-- <nav class="stroke">
            <ul class="navigation">
                <li><a class="navEffect" title="Home" href="index.html">Home</a></li>
                <li><a class="navEffect" title="Team" href="team.html">Team</a></li>
                <li><a class="navEffect" title="Werkwijse" href="workflow.html">Werkwijze</a></li>
                <li><a class="navEffect" title="Projecten" href="projects.html">Projecten</a></li>
                <li><a class="navEffect" title="Contact" href="contact.html">Contact</a></li>
            </ul>
        </nav> -->
        <nav class="stroke">
            <?php wp_nav_menu(array("menu_class" => "navigation")); ?>
        </nav>
    </header>