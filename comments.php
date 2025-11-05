<?php
/**
 * The template for displaying comments
 */

if (post_password_required()) {
    return;
}
?>

<div id="comments" class="comments-area">
    <?php if (have_comments()) : ?>
        <h2 class="comments-title" style="color: var(--primary-blue); margin-bottom: 2rem; font-size: 2rem;">
            <?php
            $comment_count = get_comments_number();
            if ('1' === $comment_count) {
                printf(
                    esc_html__('One comment on &ldquo;%s&rdquo;', 'profitkitchenbath'),
                    '<span>' . wp_kses_post(get_the_title()) . '</span>'
                );
            } else {
                printf(
                    esc_html(_nx('%1$s comment on &ldquo;%2$s&rdquo;', '%1$s comments on &ldquo;%2$s&rdquo;', $comment_count, 'comments title', 'profitkitchenbath')),
                    number_format_i18n($comment_count),
                    '<span>' . wp_kses_post(get_the_title()) . '</span>'
                );
            }
            ?>
        </h2>

        <ol class="comment-list" style="list-style: none; padding: 0;">
            <?php
            wp_list_comments(array(
                'style'       => 'ol',
                'short_ping'  => true,
                'avatar_size' => 50,
                'callback'    => 'profitkitchenbath_comment_callback',
            ));
            ?>
        </ol>

        <?php
        the_comments_navigation(array(
            'prev_text' => '<i class="fas fa-arrow-left"></i> ' . __('Older Comments', 'profitkitchenbath'),
            'next_text' => __('Newer Comments', 'profitkitchenbath') . ' <i class="fas fa-arrow-right"></i>',
        ));
        ?>

        <?php if (!comments_open()) : ?>
            <p class="no-comments" style="color: var(--medium-gray); padding: 1rem; background: var(--light-gray); border-radius: 10px;">
                <?php esc_html_e('Comments are closed.', 'profitkitchenbath'); ?>
            </p>
        <?php endif; ?>

    <?php endif; ?>

    <?php
    comment_form(array(
        'title_reply'          => __('Leave a Comment', 'profitkitchenbath'),
        'title_reply_to'       => __('Leave a Reply to %s', 'profitkitchenbath'),
        'title_reply_before'   => '<h3 id="reply-title" class="comment-reply-title" style="color: var(--primary-blue); margin-bottom: 1.5rem; font-size: 1.8rem;">',
        'title_reply_after'    => '</h3>',
        'comment_field'        => '<p class="comment-form-comment"><label for="comment" style="display: block; margin-bottom: 0.5rem; color: var(--primary-blue); font-weight: 600;">' . _x('Comment', 'noun', 'profitkitchenbath') . ' <span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required" style="width: 100%; padding: 1rem; border: 2px solid var(--light-blue); border-radius: 10px; font-family: inherit; font-size: 1rem; transition: border-color 0.3s;"></textarea></p>',
        'submit_button'        => '<button type="submit" id="%2$s" class="%3$s btn" style="cursor: pointer; border: none;">%4$s</button>',
        'class_submit'         => 'submit',
        'label_submit'         => __('Post Comment', 'profitkitchenbath'),
    ));
    ?>
</div>

<?php
// Custom comment callback function
if (!function_exists('profitkitchenbath_comment_callback')) :
    function profitkitchenbath_comment_callback($comment, $args, $depth) {
        ?>
        <li <?php comment_class('comment-item'); ?> id="comment-<?php comment_ID(); ?>" style="margin-bottom: 2rem; padding: 1.5rem; background: var(--light-gray); border-radius: 15px; border-left: 4px solid var(--secondary-blue);">
            <div class="comment-body">
                <div class="comment-author vcard" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <?php echo get_avatar($comment, 50, '', '', array('class' => 'avatar', 'style' => 'border-radius: 50%;')); ?>
                    <div>
                        <strong style="color: var(--primary-blue); font-size: 1.1rem;">
                            <?php comment_author_link(); ?>
                        </strong>
                        <div class="comment-metadata" style="color: var(--medium-gray); font-size: 0.85rem;">
                            <a href="<?php echo esc_url(get_comment_link($comment, $args)); ?>" style="color: inherit;">
                                <i class="far fa-clock"></i>
                                <?php
                                printf(
                                    esc_html__('%1$s at %2$s', 'profitkitchenbath'),
                                    get_comment_date('', $comment),
                                    get_comment_time()
                                );
                                ?>
                            </a>
                            <?php edit_comment_link(__('(Edit)', 'profitkitchenbath'), ' <span class="edit-link">', '</span>'); ?>
                        </div>
                    </div>
                </div>

                <?php if ('0' == $comment->comment_approved) : ?>
                    <p class="comment-awaiting-moderation" style="color: #f59e0b; padding: 0.5rem; background: #fef3c7; border-radius: 5px; margin: 1rem 0;">
                        <?php esc_html_e('Your comment is awaiting moderation.', 'profitkitchenbath'); ?>
                    </p>
                <?php endif; ?>

                <div class="comment-content" style="color: var(--dark-gray); line-height: 1.7; margin-bottom: 1rem;">
                    <?php comment_text(); ?>
                </div>

                <?php
                comment_reply_link(array_merge($args, array(
                    'add_below' => 'comment',
                    'depth'     => $depth,
                    'max_depth' => $args['max_depth'],
                    'before'    => '<div class="reply" style="margin-top: 1rem;">',
                    'after'     => '</div>',
                    'reply_text' => '<i class="fas fa-reply"></i> ' . __('Reply', 'profitkitchenbath'),
                )));
                ?>
            </div>
        </li>
        <?php
    }
endif;
?>
