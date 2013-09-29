<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');
function theme_enqueue_scripts(){

  // Uncomment for jquery or modernizr

  // wp_register_script('modernizr', get_bloginfo('template_url') . '/libraries/thirdparty/modernizr/modernizr.js');
  // wp_enqueue_script('modernizr');

  // wp_register_script('jquery', get_bloginfo('template_url') . '/libraries/thirdparty/jquery/jquery.min.js');
  // wp_enqueue_script('jquery');

  // This file will enable livereload
  // We'll check the server address first, and only call this file if we are
  // on localhost.
  if (in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'))) {
    wp_register_script('livereload', 'http://localhost:35729/livereload.js?snipver=1', null, false, true);
    wp_enqueue_script('livereload');
  }

  wp_enqueue_style('main', get_bloginfo('template_url') . '/css/main.css');
}

//Add Featured Image Support
add_theme_support('post-thumbnails');

// Clean up the <head>
function removeHeadLinks() {
  remove_action('wp_head', 'rsd_link');
  remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'removeHeadLinks');
remove_action('wp_head', 'wp_generator');

function register_menus() {
  register_nav_menus(
    array(
      'main-nav' => 'Main Navigation',
      'secondary-nav' => 'Secondary Navigation',
      'sidebar-menu' => 'Sidebar Menu'
    )
  );
}
add_action( 'init', 'register_menus' );

function register_widgets(){

  register_sidebar( array(
    'name' => __( 'Sidebar' ),
    'id' => 'main-sidebar',
    'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
    'after_widget' => '</li>',
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
  ) );

}//end register_widgets()
add_action( 'widgets_init', 'register_widgets' );
