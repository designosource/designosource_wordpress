<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/home/nickyky117/domains/wearestrong.be/public_html/projects/designosource/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'nickyky117_designo');

/** MySQL database username */
define('DB_USER', 'nickyky117_des');

/** MySQL database password */
define('DB_PASSWORD', 'designosource');

/** MySQL hostname */
define('DB_HOST', 'wearestrong.be');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('WP_HOME','http://wearestrong.be/projects/designosource');
define('WP_SITEURL','http://wearestrong.be/projects/designosource');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'dMsKRb0BnS58[q{[1I}!Hak9AFPe,hsYJlN PU4x& Y3]|a y5N&cIXRpK4<^}1=');
define('SECURE_AUTH_KEY',  '(gB6hP.bjf5z03a77m-P(VS^VJobqrS/UtgT&W5e2JY?McWf8X7v.gY` sjtpqFs');
define('LOGGED_IN_KEY',    '%uw6cQXOV~_iZT:oSvH@(xXt=3ZZ!!ay;Xcz|m)f%eG@,16BU[m41 ?s[@`NA2tg');
define('NONCE_KEY',        'rR8fl>whW102Ms|s|;Ou[]0g/P.9>!Q_G`I=Cq.AG+n9kwVJ(aJA{vpkJI8N2fBE');
define('AUTH_SALT',        'T.=QJojdhWI?b%D^`S!+53AIvhqj%yk<a,h^~wWh}W<Fp2`Cn?<g<%Rz~tYm? /,');
define('SECURE_AUTH_SALT', 'Qku}T^1-roi`*@XcsPs:vsgIk;mK3[z6I3:3&FG 4l[! .t-}du`2*rB]{j+%%}#');
define('LOGGED_IN_SALT',   '(0FpOutIhP)i~k.]zYG1%@co][@l&qC`-U/2$t?_@B.y1Wpp~MKBB2Qm[k@EDuHJ');
define('NONCE_SALT',       ':ipgyO?x]:~D/ZGX9.SQ*OHj?y=fBEW}6v67?6k<SGbkx;JgOvBF/88eNutQ7z[q');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
