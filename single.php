<?php
/**
 * The template for displaying all single posts
 */

get_header();
?>

<div class="single-post-wrapper" style="padding: 5rem 0; background-color: var(--light-gray);">
    <div class="container">
        <?php
        while (have_posts()) :
            the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="post-header" style="margin-bottom: 2rem; text-align: center;">
                    <h1 class="post-title" style="color: var(--primary-blue); font-size: 2.5rem; margin-bottom: 1rem;">
                        <?php the_title(); ?>
                    </h1>
                    <div class="post-meta" style="color: var(--medium-gray); font-size: 0.9rem;">
                        <span><i class="far fa-calendar"></i> <?php echo get_the_date(); ?></span>
                        <span style="margin: 0 1rem;">|</span>
                        <span><i class="far fa-user"></i> <?php the_author(); ?></span>
                        <?php if (has_category()) : ?>
                            <span style="margin: 0 1rem;">|</span>
                            <span><i class="far fa-folder"></i> <?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail" style="margin-bottom: 2rem; border-radius: 15px; overflow: hidden; max-height: 500px;">
                        <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto; object-fit: cover;')); ?>
                    </div>
                <?php endif; ?>

                <div class="post-content" style="background: var(--white); padding: 3rem; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); line-height: 1.8; color: var(--medium-gray);">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'profitkitchenbath'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <?php if (has_tag()) : ?>
                    <div class="post-tags" style="margin-top: 2rem; background: var(--white); padding: 1.5rem; border-radius: 15px;">
                        <strong style="color: var(--primary-blue);"><i class="fas fa-tags"></i> Tags:</strong>
                        <?php the_tags('', ', ', ''); ?>
                    </div>
                <?php endif; ?>

                <div class="post-navigation" style="margin-top: 3rem; display: flex; justify-content: space-between; gap: 2rem; flex-wrap: wrap;">
                    <?php
                    $prev_post = get_previous_post();
                    $next_post = get_next_post();
                    ?>
                    
                    <?php if ($prev_post) : ?>
                        <div class="nav-previous" style="flex: 1; background: var(--white); padding: 1.5rem; border-radius: 15px;">
                            <span style="color: var(--medium-gray); font-size: 0.9rem;"><i class="fas fa-arrow-left"></i> Previous Post</span>
                            <h4 style="margin-top: 0.5rem;">
                                <a href="<?php echo get_permalink($prev_post->ID); ?>" style="color: var(--primary-blue);">
                                    <?php echo get_the_title($prev_post->ID); ?>
                                </a>
                            </h4>
                        </div>
                    <?php endif; ?>

                    <?php if ($next_post) : ?>
                        <div class="nav-next" style="flex: 1; background: var(--white); padding: 1.5rem; border-radius: 15px; text-align: right;">
                            <span style="color: var(--medium-gray); font-size: 0.9rem;">Next Post <i class="fas fa-arrow-right"></i></span>
                            <h4 style="margin-top: 0.5rem;">
                                <a href="<?php echo get_permalink($next_post->ID); ?>" style="color: var(--primary-blue);">
                                    <?php echo get_the_title($next_post->ID); ?>
                                </a>
                            </h4>
                        </div>
                    <?php endif; ?>
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
