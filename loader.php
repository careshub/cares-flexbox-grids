<?php
/**
 * @package CARES_Flexbox_Grids
 * @wordpress-plugin
 * Plugin Name:       CARES Flexbox Grids
 * Version:           1.0.0
 * Description:       Include styles that provide Flexbox Grid layouts.
 * Author:            dcavins
 * Text Domain:       cares-flexbox-grids
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: https://github.com/careshub/cares-saml-auth
 * @copyright 2017 CARES, University of Missouri
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/*----------------------------------------------------------------------------*
 * Public-Facing Functionality
 *----------------------------------------------------------------------------*/

function cares_flexbox_grids_init() {

	wp_enqueue_style( 'cares-flexbox-grids-styles', plugin_dir_url( __FILE__ ) . 'css/flexbox-grids.css', array(), '1.0.0' );

}
add_action( 'init', 'cares_flexbox_grids_init' );
