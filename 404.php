<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header();
?>

<div class="error-404-wrapper" style="padding: 8rem 0; background: linear-gradient(135deg, var(--light-blue) 0%, var(--white) 100%); text-align: center; min-height: 60vh;">
    <div class="container">
        <div class="error-404-content">
            <h1 style="font-size: 8rem; color: var(--primary-blue); margin: 0; font-weight: 700;">404</h1>
            <h2 style="font-size: 2.5rem; color: var(--dark-gray); margin: 1rem 0;">Page Not Found</h2>
            <p style="font-size: 1.2rem; color: var(--medium-gray); margin-bottom: 2rem;">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn">
                <i class="fas fa-home"></i> Back to Home
            </a>
        </div>
    </div>
</div>

<?php
get_footer();
?>
