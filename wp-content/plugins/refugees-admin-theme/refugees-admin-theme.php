<?php

/*
Plugin Name: Refugees Admin Theme
Plugin URI: http://github.com/atelierbram/refugees-admin-theme
Description: WordPress Admin Theme - Upload and Activate.
Author: Bram de Haan
Version: 1.0
Author URI: http://atelierbramdehaan.nl
*/

function refugees_admin_theme_style() {
    wp_enqueue_style('refugees-admin-theme', plugins_url('refugees-admin-theme.css', __FILE__));
}
add_action('admin_enqueue_scripts', 'refugees_admin_theme_style');
add_action('login_enqueue_scripts', 'refugees_admin_theme_style');

function refugees_admin_footer() {
   echo '<div class="wpfooter-svdb"><p class="alignleft">This theme was made by <a href="http://atelierbramdehaan.nl">Bram de Haan</a>, you can find the colorscheme <a href="https://github.com/atelierbram/refugees-admin-theme">on GitHub</a>.</p></div>';
}

add_action('admin_footer', 'refugees_admin_footer');

// This theme depends on the webfont Fira Sans and Fira Sans Condensed being available
// the medium 500 weight is used for bold
// the light 300 weight is used for the light on dark text in the interface
function registerCustomAdminFont1() {
  $src = 'http://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500';
  $handle = "customAdminFont1";
  wp_register_script($handle, $src);
  wp_enqueue_style($handle, $src, array(), false, false);
}
add_action('admin_head', 'registerCustomAdminFont1');

// the condensed font is used for header styles in the interface
function registerCustomAdminFont2() {
  $src = 'http://fonts.googleapis.com/css?family=Fira+Sans+Condensed:400,400i,500,500i';
  $handle = "customAdminFont2";
  wp_register_script($handle, $src);
  wp_enqueue_style($handle, $src, array(), false, false);
}
add_action('admin_head', 'registerCustomAdminFont2');

?>
