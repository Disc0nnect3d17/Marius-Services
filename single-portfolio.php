<?php
/**
 * Template Name: Single Portfolio Page
 * Description: Static template for The Sage & Walnut Shaker project
 */
get_header(); 
?>


<?php while (have_posts()) : the_post(); ?>

<!-- Project Layout: Image Collage + Content -->
<section class="project-layout" style="padding: 60px 20px; background: var(--white);">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
            
            <!-- Left: Dynamic Image Collage -->
            <div class="project-collage">
                <?php 
                $images = get_post_meta(get_the_ID(), 'portfolio_images', true); 
                if ($images) :
                    $images = array_map('trim', explode(',', $images)); // split URLs into array
                ?>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; height: 600px;">
                    <?php foreach($images as $index => $img_url) : ?>
                        <div style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); <?php echo $index === 0 ? 'grid-row: span 2;' : ''; ?>">
                            <img src="<?php echo esc_url($img_url); ?>" 
                                 alt="<?php the_title(); ?>" 
                                 style="width:100%; height:100%; object-fit:cover; transition: transform 0.4s ease;">
                        </div>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
            </div>

            <!-- Right: Project Info -->
            <div class="project-info">
                <h1 style="font-family: var(--heading-font); font-size: clamp(2rem, 4vw, 3rem); color: var(--primary-blue); margin-bottom: 1.5rem; line-height: 1.2;">
                    <?php the_title(); ?>
                </h1>
                
                <div style="width: 60px; height: 3px; background: var(--accent-color); margin-bottom: 2rem;"></div>
                
                <?php if (has_excerpt()) : ?>
                    <div style="font-size: 1.1rem; color: var(--dark-gray); line-height: 1.8; margin-bottom: 2rem;">
                        <?php the_excerpt(); ?>
                    </div>
                <?php endif; ?>
                
                <?php 
                $categories = get_post_meta(get_the_ID(), 'portfolio_categories', true);
                if ($categories) :
                    $categories = array_map('trim', explode(',', $categories));
                ?>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 2rem;">
                    <?php foreach($categories as $cat) : ?>
                        <span style="padding: 8px 16px; background: var(--light-gray); color: var(--primary-blue); border-radius: 6px; font-size: 0.9rem; font-weight: 500;"><?php echo esc_html($cat); ?></span>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
                
                <a href="/Marius/portfolio/" class="btn" style="display: inline-flex; align-items: center; gap: 10px;">
                    <i class="fas fa-arrow-left"></i> Back to Portfolio
                </a>
            </div>
            
        </div>
    </div>
</section>

<!-- Additional Project Content -->
<section style="padding: 60px 20px; background: var(--light-gray);">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
        
        <div class="project-content" style="font-size: 1.1rem; line-height: 1.9; color: var(--dark-gray);">
            <?php the_content(); ?>
        </div>

    </div>
</section>

<!-- Related Projects -->
<section style="padding: 60px 20px; background: var(--light-gray);">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
        <h2 class="section-title">More Projects</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 3rem;">
            <?php
            $related = new WP_Query(array(
                'post_type' => 'portfolio',
                'posts_per_page' => 3,
                'post__not_in' => array(get_the_ID())
            ));
            
            if ($related->have_posts()) :
                while ($related->have_posts()) : $related->the_post(); ?>
                    <a href="<?php the_permalink(); ?>" style="position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); display: block; transition: all 0.4s ease;">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 250px; object-fit: cover; transition: transform 0.4s ease;')); ?>
                        <?php endif; ?>
                        <div style="padding: 20px; background: var(--white);">
                            <h3 style="font-family: var(--heading-font); color: var(--primary-blue); font-size: 1.2rem;"><?php the_title(); ?></h3>
                        </div>
                    </a>
                <?php endwhile; 
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>
</section>

<?php endwhile; ?>

<style>
.project-content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.project-content h2,
.project-content h3 {
    font-family: var(--heading-font);
<style>
.project-collage img:hover {
    transform: scale(1.05);
}

.project-content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.project-content h2,
.project-content h3 {
    font-family: var(--heading-font);
    color: var(--primary-blue);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
}

.project-content p {
    margin-bottom: 1.5rem;
}

.project-content ul,
.project-content ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
    line-height: 2;
}

/* Responsive */
@media (max-width: 768px) {
    .project-layout .container > div {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
    }
    
    .project-collage {
        order: 2;
    }
    
    .project-info {
        order: 1;
    }
}
</style>