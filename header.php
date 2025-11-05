<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Pro Fit Bathroom and Kitchen - Professional full bathroom and kitchen renovations including tiles, plumbing, electric, painting, carpentry, and plastering.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cantata+One&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <div class="site-branding">
                <img src="http://localhost/Marius/wp-content/uploads/2025/11/rubat-ai-logo-01.png" alt="Site Logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <h1 class="site-title">
                        <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                            <?php bloginfo('name'); ?>
                        </a>
                    </h1>
                <?php endif; ?>
            </div>

            <div class="contact-info">
                <a href="tel:+447454933651">
                    <i class="fas fa-phone"></i>
                    <span>+44 7454 933651</span>
                </a>
                <a href="mailto:info@hotmail.com">
                    <i class="fas fa-envelope"></i>
                    <span>info@hotmail.com</span>
                </a>
            </div>
        </div>

        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
            <i class="fas fa-bars"></i> Menu
        </button>

        <nav class="main-navigation" id="main-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'primary-menu',
                'fallback_cb'    => function() {
                    echo '<ul class="primary-menu">';
                    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';
                    echo '<li><a href="#services">Services</a></li>';
                    echo '<li><a href="#reviews">Reviews</a></li>';
                    echo '<li><a href="#about">About</a></li>';
                    echo '<li><a href="#contact">Contact</a></li>';
                    echo '</ul>';
                }
            ));
            ?>
        </nav>
    </div>
</header>
