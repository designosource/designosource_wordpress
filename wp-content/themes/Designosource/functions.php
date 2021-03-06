<?php

	function add_menuclass($ulclass) {
	   return preg_replace('/<a /', '<a class="animsition-link"', $ulclass);
	}
	add_filter('wp_nav_menu','add_menuclass');

	add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

	function special_nav_class ($classes, $item) {
	    if (in_array('current-menu-item', $classes) ){
	        $classes[] = 'active ';
	    }
	    return $classes;
	}

		
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );

?>