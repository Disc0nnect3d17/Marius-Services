<?php
/**
 * The main template file - Home Page
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-content">
            <h1>Professional Bathroom & Kitchen Renovations 1.4.0 </h1>
            <p>Expert craftsmen delivering complete renovation solutions in London and surrounding areas</p>
            <div class="hero-buttons">
                <a href="tel:+447454933651" class="btn">Call Now</a>
                <a href="#services" class="btn btn-secondary">Our Services</a>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services-section" id="services">
    <div class="container">
        <h2 class="section-title">My Services</h2>
        <div class="services-grid">
            <?php
            $services = get_profitkitchenbath_services();
            foreach ($services as $service) :
            ?>
                <div class="service-card" data-aos="fade-up">
                    <div class="service-icon">
                        <i class="fas <?php echo esc_attr($service['icon']); ?>"></i>
                    </div>
                    <h3><?php echo esc_html($service['title']); ?></h3>
                    <p><?php echo esc_html($service['description']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Google Reviews Section -->
<section class="reviews-section" id="reviews">
    <div class="container reviews-container">
        <h2 class="section-title">What My Customers Say</h2>
        <div class="reviews-grid">
            <?php
            $reviews = get_profitkitchenbath_reviews();
            foreach ($reviews as $review) :
            ?>
                <div class="review-card" data-aos="zoom-in">
                    <div class="review-stars">
                        <?php for ($i = 0; $i < $review['rating']; $i++) : ?>
                            <i class="fas fa-star"></i>
                        <?php endfor; ?>
                    </div>
                    <p class="review-text">"<?php echo esc_html($review['text']); ?>"</p>
                    <p class="review-author">- <?php echo esc_html($review['name']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="google-logo">
            <p style="color: var(--medium-gray); margin-top: 2rem;">
                <i class="fab fa-google" style="font-size: 2rem; color: #4285f4;"></i><br>
                <strong>Find me on Google Reviews</strong>
            </p>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="about-section" id="about">
    <div class="container">
        <div class="about-content">
            <div class="about-text" data-aos="slide-right">
                <h2>Why Choose Pro Fit?</h2>
                <p>With decades of experience in the renovation industry, Pro Fit Bathroom and Kitchen has built a reputation for excellence and reliability. I specialize in complete bathroom and kitchen renovations, handling every aspect from initial design to final touches.</p>
                <p>My comprehensive services include professional tiling, expert plumbing, certified electrical work, quality painting and decorating, skilled carpentry, and precision plastering. I take pride in my attention to detail and commitment to customer satisfaction.</p>
                <p>Every project is done to your needs and vision. I work closely with you to ensure your ideas are brought to life and you have something to cherish for years to come.</p>
                <a href="tel:+447454933651" class="btn" style="margin-top: 1rem;">Get a Free Quote</a>
            </div>
            <div class="about-image" data-aos="slide-left">
                <img src="<?php echo get_template_directory_uri(); ?>/images/renovation-team.jpg" 
                     alt="Pro Fit Renovation Team" 
                     onerror="this.src='https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop'">
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section" id="contact">
    <div class="container">
        <h2>Ready to Transform Your Space?</h2>
        <p>Contact Pro Fit Bathrooms & Kitchen today for a free consultation and quote</p>
        <div class="cta-buttons" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="tel:+447454933651" class="btn">
                <i class="fas fa-phone"></i> Call: +44 7454 933651
            </a>
            <a href="mailto:info@hotmail.com" class="btn btn-secondary">
                <i class="fas fa-envelope"></i> Email Us
            </a>
        </div>
    </div>
</section>

<?php if (have_posts()) : ?>
    <section class="blog-section" style="padding: 5rem 0; background-color: var(--white);">
        <div class="container">
            <h2 class="section-title">Latest Updates</h2>
            <div class="blog-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="blog-card" style="background: var(--light-gray); padding: 2rem; border-radius: 15px;">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="blog-image" style="margin-bottom: 1rem; border-radius: 10px; overflow: hidden;">
                                <?php the_post_thumbnail('medium'); ?>
                            </div>
                        <?php endif; ?>
                        <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem;">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h3>
                        <div class="blog-meta" style="color: var(--medium-gray); font-size: 0.9rem; margin-bottom: 1rem;">
                            <span><i class="far fa-calendar"></i> <?php echo get_the_date(); ?></span>
                        </div>
                        <div class="blog-excerpt">
                            <?php the_excerpt(); ?>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="read-more" style="color: var(--secondary-blue); font-weight: 600;">
                            Read More <i class="fas fa-arrow-right"></i>
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php
get_footer();
?>
