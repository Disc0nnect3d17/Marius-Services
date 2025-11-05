<?php
/**
 * Pro Fit Bathroom and Kitchen Theme Functions
 */

// Theme Setup
function profitkitchenbath_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'profitkitchenbath'),
        'footer'  => __('Footer Menu', 'profitkitchenbath'),
    ));

    // Set content width
    if (!isset($content_width)) {
        $content_width = 1200;
    }
}
add_action('after_setup_theme', 'profitkitchenbath_setup');

// Enqueue scripts and styles
function profitkitchenbath_scripts() {
    // Main stylesheet
    wp_enqueue_style('profitkitchenbath-style', get_stylesheet_uri(), array(), '1.0');
    
    // Custom JavaScript
    wp_enqueue_script('profitkitchenbath-script', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
    
    // Font Awesome for icons
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
}
add_action('wp_enqueue_scripts', 'profitkitchenbath_scripts');

// Register widget areas
function profitkitchenbath_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'profitkitchenbath'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'profitkitchenbath'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer 1', 'profitkitchenbath'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'profitkitchenbath'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Footer 2', 'profitkitchenbath'),
        'id'            => 'footer-2',
        'description'   => __('Add widgets here to appear in your footer.', 'profitkitchenbath'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Footer 3', 'profitkitchenbath'),
        'id'            => 'footer-3',
        'description'   => __('Add widgets here to appear in your footer.', 'profitkitchenbath'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'profitkitchenbath_widgets_init');

// Custom excerpt length
function profitkitchenbath_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'profitkitchenbath_excerpt_length');

// Custom excerpt more
function profitkitchenbath_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'profitkitchenbath_excerpt_more');

// Add custom body classes
function profitkitchenbath_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    return $classes;
}
add_filter('body_class', 'profitkitchenbath_body_classes');

// Custom function to get services
function get_profitkitchenbath_services() {
    return array(
        array(
            'icon'        => 'fa-bath',
            'title'       => 'Full Bathroom Renovations',
            'description' => 'Complete bathroom transformations including tiles, plumbing, electric work, and plastering. We handle every aspect of your bathroom project.',
        ),
        array(
            'icon'        => 'fa-kitchen-set',
            'title'       => 'Full Kitchen Renovations',
            'description' => 'Comprehensive kitchen remodeling services from design to completion. Expert installation of cabinets, countertops, and all fixtures.',
        ),
        array(
            'icon'        => 'fa-droplet',
            'title'       => 'Plumbing Services',
            'description' => 'Professional plumbing installation and repairs. From pipes to fixtures, we ensure everything works perfectly.',
        ),
        array(
            'icon'        => 'fa-bolt',
            'title'       => 'Electrical Work',
            'description' => 'Certified electrical services for your renovation. Safe and compliant installations for lighting, outlets, and more.',
        ),
        array(
            'icon'        => 'fa-paint-roller',
            'title'       => 'Painting & Decorating',
            'description' => 'High-quality painting services to give your space the perfect finish. Professional preparation and attention to detail.',
        ),
        array(
            'icon'        => 'fa-hammer',
            'title'       => 'Carpentry & Joinery',
            'description' => 'Expert carpentry including custom doors, cabinets, and woodwork. Precision craftsmanship for lasting results.',
        ),
    );
}

// Custom function to get Google reviews (placeholder - replace with actual reviews)
function get_profitkitchenbath_reviews() {
    return array(
        array(
            'name'   => 'Sarah Johnson',
            'rating' => 5,
            'text'   => 'Absolutely fantastic service! Pro Fit transformed our bathroom into a stunning space. Professional, punctual, and the quality is outstanding.',
        ),
        array(
            'name'   => 'Michael Brown',
            'rating' => 5,
            'text'   => 'We had our kitchen completely renovated and couldn\'t be happier. The team was professional, clean, and the attention to detail was impressive.',
        ),
        array(
            'name'   => 'Emma Davies',
            'rating' => 5,
            'text'   => 'From start to finish, the whole process was seamless. Great communication, excellent workmanship, and our new bathroom looks amazing!',
        ),
    );
}

// Allow SVG uploads (if needed for logo)
function profitkitchenbath_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'profitkitchenbath_mime_types');

// Customize the admin footer text
function profitkitchenbath_admin_footer_text() {
    echo 'Pro Fit Bathroom and Kitchen Theme | Powered by <a href="https://wordpress.org">WordPress</a>';
}
add_filter('admin_footer_text', 'profitkitchenbath_admin_footer_text');
