<?php
/**
 * Template Name: Portfolio Page
 * Description: A custom page template to showcase your bathroom and kitchen projects.
 */

get_header(); 
?>

<!-- Portfolio Hero Section -->
<section class="portfolio-hero">
    <div class="hero-image-wrapper rellax" data-rellax-speed="-1">
        <?php
        if (has_post_thumbnail()) {
            the_post_thumbnail('full', [
                'class' => 'hero-image',
                'alt' => get_the_title(),
                'loading' => 'eager'
            ]);
        } else { ?>
            <img src="http://localhost/Marius/wp-content/uploads/2025/11/bg-portoflio.jpg" 
                 class="hero-image" alt="Portfolio Hero" loading="eager">
        <?php } ?>
    </div>

    <h1 class="portfolio-hero-title"><?php the_title(); ?></h1>
</section>

<!-- 2️⃣ Section Title & Description -->
<section class="portfolio-intro" style="padding: 60px 20px; background-color: #f7f7f7; text-align: left; max-width: 1200px; margin: 0 auto;">
    <h2 style="font-size: 2.5rem; font-family: var(--heading-font); color: var(--primary-blue);">Explore Our Bathroom Portfolio</h2>
    <div style="width: 50px; height: 4px; background: var(--accent-color); margin: 10px 0;"></div>
    <p style="font-size: 1.1rem; color: var(--medium-gray); line-height: 1.8;">Our bathroom portfolio will help you discover what Pro Fit Bathroom and Kitchen can do for you!</p>
</section>

<!-- 3️⃣ Portfolio Grid with Hover Overlay -->
<section class="portfolio-grid-section" style="max-width: 1200px; margin: 0 auto; padding: 60px 20px;">
    <div class="portfolio-grid">
        <?php
        $portfolio_query = new WP_Query(array(
            'post_type' => 'portfolio',
            'posts_per_page' => -1
        ));
        if ($portfolio_query->have_posts()) :
            while ($portfolio_query->have_posts()) : $portfolio_query->the_post(); ?>
                <div class="portfolio-item">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="portfolio-image-wrapper">
                            <?php the_post_thumbnail('large', array('class' => 'portfolio-thumbnail')); ?>
                        </div>
                    <?php else: ?>
                        <div class="portfolio-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop" 
                                 alt="<?php the_title(); ?>" 
                                 class="portfolio-thumbnail">
                        </div>
                    <?php endif; ?>
                    <div class="portfolio-overlay">
                        <div class="portfolio-content">
                            <h3><?php the_title(); ?></h3>
                            <?php $terms = get_the_terms(get_the_ID(), 'portfolio_category');
                            if($terms) {
                                echo '<div class="portfolio-tags">';
                                foreach($terms as $term) {
                                    echo '<span class="portfolio-tag">' . $term->name . '</span>';
                                }
                                echo '</div>';
                            } ?>
                            <span class="view-project">View Project <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <a href="<?php the_permalink(); ?>" class="portfolio-link"></a>
                </div>
            <?php endwhile; wp_reset_postdata();
        else: ?>
            <p style="text-align: center; color: var(--medium-gray); grid-column: 1/-1;">No portfolio projects found. Add some projects in WordPress admin!</p>
        <?php endif; ?>
    </div>
</section>

<!-- 4️⃣ Call-To-Action Section -->
<section class="portfolio-cta" style="background-color: rgba(223,223,223,0.7); padding: 80px 20px; display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 2rem;">
    <div>
        <h2 style="font-size: 2rem; font-family: var(--heading-font); color: var(--primary-blue);">Your dream bathroom or kitchen is just a phone call away</h2>
    </div>
    <div>
        <a href="tel:+447454933651" class="btn" style="text-transform: uppercase; padding: 15px 30px; background: var(--primary-blue); color: #fff; border-radius: 8px; text-decoration: none; display: inline-block; transition: all 0.3s ease;">Get in Touch</a>
    </div>
</section>

<style>
/* Portfolio Grid */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    background: var(--white);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
}

.portfolio-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
}

.portfolio-item:hover::before {
    opacity: 0.15;
}

.portfolio-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(31, 122, 140, 0.25);
}

.portfolio-image-wrapper {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
}

.portfolio-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.portfolio-item:hover .portfolio-thumbnail {
    transform: scale(1.1) rotate(1deg);
}

.portfolio-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
    display: flex;
    align-items: flex-end;
    padding: 25px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-content {
    color: var(--white);
    transform: translateY(20px);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.portfolio-item:hover .portfolio-content {
    transform: translateY(0);
}

.portfolio-content h3 {
    font-family: var(--heading-font);
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--white);
    font-weight: 600;
}

.portfolio-tags {
    display: flex;
    gap: 8px;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.portfolio-tag {
    display: inline-block;
    padding: 6px 12px;
    background: var(--accent-color);
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.5px;
}

.view-project {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--white);
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.4s ease;
}

.portfolio-item:hover .view-project {
    opacity: 1;
    transform: translateX(0);
}

.view-project i {
    transition: transform 0.3s ease;
}

.portfolio-item:hover .view-project i {
    transform: translateX(5px);
}

.portfolio-link {
    position: absolute;
    inset: 0;
    z-index: 3;
}

@media (max-width: 768px) {
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .portfolio-image-wrapper {
        height: 240px;
    }
}
</style>

<style>
.portfolio-item:hover img { transform: scale(1.1); }
.portfolio-item:hover .portfolio-overlay { opacity: 1; }
.portfolio-cta .btn:hover { background: var(--accent-color); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(252, 163, 17, 0.4); }
</style>

<?php get_footer(); ?>
