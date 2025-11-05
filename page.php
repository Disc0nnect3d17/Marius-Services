<?php
/**
 * The template for displaying all pages
 */

get_header();
?>

<div class="page-wrapper" style="padding: 5rem 0; background-color: var(--light-gray);">
    <div class="container">
        <?php
        while (have_posts()) :
            the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="page-header" style="margin-bottom: 2rem;">
                    <h1 class="page-title" style="color: var(--primary-blue); font-size: 2.5rem;">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <div class="page-content" style="background: var(--white); padding: 3rem; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); line-height: 1.8; color: var(--medium-gray);">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'profitkitchenbath'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <?php if (comments_open() || get_comments_number()) : ?>
                    <div class="comments-wrapper" style="margin-top: 3rem; background: var(--white); padding: 2rem; border-radius: 15px;">
                        <?php comments_template(); ?>
                    </div>
                <?php endif; ?>
            </article>
        <?php
        endwhile;
        ?>
    </div>
</div>

<?php
get_footer();
?>
