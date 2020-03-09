window.jQuery = window.$ = jQuery;

function akusaraHeaderHeight() {
    "use strict";
    var headerWrapH = jQuery('.header_wrap').height();
    jQuery('#page-wrap > header').css('height', headerWrapH + 'px');
}

function PostLikes() {
    "use strict";
    jQuery('.akusara_add_like').live("click", function() {
        var post_likes_this = jQuery(this);
        jQuery.post(akusara_ajaxurl, {
            action: 'add_like_post',
            post_id: jQuery(this).attr('data-postid')
        }, function(response) {
            jQuery.cookie('like' + post_likes_this.attr('data-postid'), 'true', {
                expires: 7,
                path: '/'
            });
            post_likes_this.addClass('already_liked').removeClass('akusara_add_like');
            post_likes_this.find("span").text(response);
            post_likes_this.find("i").removeClass("fa-heart-o").addClass("fa-heart");
        });
    });
}
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('fast');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

function headerSticky() {
    "use strict";
    if ((jQuery(window).scrollTop() > jQuery('header').height() + 100) && (jQuery(window).width() > 767) && (!jQuery('body').hasClass('error404'))) {
        jQuery('body').addClass('header-fixed');
        jQuery('.akusara-logo').addClass('hide');
        jQuery('.header_ads').addClass('hide');
    } else {
        jQuery('body').removeClass('header-fixed');
        jQuery('.akusara-logo').removeClass('hide');
        jQuery('.header_ads').removeClass('hide');
    }
}

function video_size() {
    "use strict";
    jQuery('.post-video').each(function() {
        jQuery(this).find('iframe').css({
            'height': jQuery(this).width() * 9 / 16 + 'px'
        });
    });
}

function page404_h() {
    "use strict";
    var windowH = jQuery(window).height();
    var headerWrapH = jQuery('.header_wrap').height() + 100;
    var error404_containerH = windowH - headerWrapH;
    var error404_container_inH = jQuery('#error404_container .container').height();
    jQuery('#error404_container').css({
        'min-height': error404_containerH + 'px'
    });
    jQuery('#error404_container .container').css({
        'padding-top': (error404_containerH - 200 - error404_container_inH) / 2 + 'px'
    });
}
jQuery(document).ready(function($) {
    "use strict";
    akusaraHeaderHeight();
    if (jQuery('.fixed-sidebar').size() > 0) {
        jQuery('.sidebar_btn').on('click', function() {
            var sidebar = jQuery('.fixed-sidebar');
            if ($(window).width() > 767) {
                jQuery('.fixed-sidebar').animate({
                    right: '0px'
                });
                jQuery('body').addClass('sidebar_active');
            } else {
                jQuery('.fixed-sidebar').animate({
                    right: '0px'
                });
                jQuery('body').addClass('sidebar_active');
            }
        });
        jQuery('#page-wrap, .sidebar_btn_close').on('click', function() {
            var sidebar = jQuery('.fixed-sidebar');
            if ($(window).width() > 767) {
                if (sidebar.css('right') === '0px') {
                    jQuery('.fixed-sidebar').animate({
                        right: '-400px'
                    }).removeClass('sidebar_open');
                    jQuery('body').removeClass('sidebar_active');
                }
            } else {
                if (sidebar.css('right') === '0px') {
                    jQuery('.fixed-sidebar').animate({
                        right: '-320px'
                    }).removeClass('sidebar_open');
                    jQuery('body').removeClass('sidebar_active');
                }
            }
        });
    }
    jQuery('.menu-item-mega-parent').each(function() {
        jQuery('.category-children > div:not(:first-child)', this).addClass('tab-hidden');
        jQuery('.akusara_mega_menu li:first-child', this).addClass('nav-active');
        jQuery('.akusara_mega_menu li', this).hover(function() {
            var tabId = jQuery(this).attr('id');
            jQuery(this).closest('.akusara_mega_menu').find('li').removeClass('nav-active');
            jQuery(this).addClass('nav-active');
            jQuery(this).closest('.akusara_mega_menu_wrap').find('.category-children-wrap').addClass('tab-hidden');
            jQuery(this).closest('.akusara_mega_menu_wrap').find('.category-children-wrap.' + tabId).removeClass('tab-hidden');
        });
        var highestTab = jQuery('.tabs-content-wrapper', this).outerHeight();
        jQuery('.akusara_mega_menu', this).css('min-height', highestTab - 40);
    });
    jQuery('.single_post_meta_tags a, .tagcloud a').append('<i></i>');
    jQuery('.nav-menu a[href*="#"]').each(function() {
        jQuery(this).attr("href", "javascript:void(0);");
    });
    var $search_btn = $('.header_search .fa'),
        $search_form = $('.header_search');
    $search_btn.on('click', function() {
        $('body').toggleClass('form_focus');
        $('.header_search input.search-field').focus();
    });
    $(document).on('click', function(e) {
        if ($(e.target).closest($search_btn).length == 0 && $(e.target).closest('input.search-field').length == 0 && $('body').hasClass('form_focus')) {
            $('body').removeClass('form_focus');
        }
    });
    $(function() {
        $('a[href="#search"]').on('click', function(event) {
            event.preventDefault();
            $('#search').addClass('open');
            $('#search > form > input[type="search"]').focus();
        });
        $('#search, #search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
            }
        });
    });
    jQuery('.btn-scroll-top').on('click', function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    if (jQuery('[data-toggle="tooltip"]').size() > 0) {
        jQuery('[data-toggle="tooltip"]').tooltip();
    }
    if (jQuery('.subscribe_popup_btn').size() > 0) {
        jQuery('.subscribe_popup_btn').on('click', function() {
            jQuery('body').toggleClass('subscribe_popup_show');
        });
        jQuery('.subscribe_popup_close, .subscribe_popup_back').on('click', function(e) {
            if (jQuery('body').hasClass('subscribe_popup_show')) {
                jQuery('body').removeClass('subscribe_popup_show');
            }
        });
    }
    if (jQuery('.single_post_header_bottom .sharebox').size() > 0) {
        var $sharebox_btn = $('.single_post_header_bottom .sharebox_btn');
        $sharebox_btn.on('click', function() {
            $('.single_post_header_bottom .sharebox').toggleClass('sharebox_active');
        });
        $(document).on('click', function(e) {
            if ($(e.target).closest($sharebox_btn).length == 0 && $('.single_post_header_bottom .sharebox').hasClass('sharebox_active')) {
                $('.single_post_header_bottom .sharebox').removeClass('sharebox_active');
            }
        });
    }
    if (jQuery('.portfolio_single_descr_wrap .sharebox').size() > 0) {
        var $sharebox_btn = $('.portfolio_single_descr_wrap .sharebox_btn');
        $sharebox_btn.on('click', function() {
            $('.portfolio_single_descr_wrap .sharebox').toggleClass('sharebox_active');
        });
        $(document).on('click', function(e) {
            if ($(e.target).closest($sharebox_btn).length == 0 && $('.portfolio_single_descr_wrap .sharebox').hasClass('sharebox_active')) {
                $('.portfolio_single_descr_wrap .sharebox').removeClass('sharebox_active');
            }
        });
    }
    if (jQuery('.single_sharebox_wrap .sharebox').size() > 0) {
        var $sharebox_btn2 = $('.single_sharebox_wrap .sharebox_btn');
        $sharebox_btn2.on('click', function() {
            $('.single_sharebox_wrap .sharebox').toggleClass('sharebox_active');
        });
        $(document).on('click', function(e) {
            if ($(e.target).closest($sharebox_btn2).length == 0 && $('.single_sharebox_wrap .sharebox').hasClass('sharebox_active')) {
                $('.single_sharebox_wrap .sharebox').removeClass('sharebox_active');
            }
        });
    }
    jQuery('.widget_archive ul li, .widget_categories ul li').each(function() {
        var str = jQuery(this).html();
        str = str.replace('(', '<span class="val">- ');
        str = str.replace(')', '</span>');
        jQuery(this).html(str);
    });
    jQuery('.widget_product_categories ul li').each(function() {
        var str = jQuery(this).html();
        str = str.replace('(', '- ');
        str = str.replace(')', '');
        jQuery(this).html(str);
    });
    jQuery('#blog_list.blog_list_style_chess article:odd').find('.col-md-6:first').addClass('pull-right');
    jQuery('#blog_list.blog_list_style_chess article:odd').find('.col-md-6:last').addClass('pull-left text-right');
    jQuery('#blog_list_seccond.blog_list_style_chess article:odd').find('.col-md-6:first').addClass('pull-right');
    jQuery('#blog_list_seccond.blog_list_style_chess article:odd').find('.col-md-6:last').addClass('pull-left text-right');
    jQuery('.mobile_menu_btn').on('click', function() {
        jQuery(this).parent().toggleClass('menu_show');
    });

    jQuery('.coming_popup_wrap').hover(function() {
        jQuery(this).toggleClass('active');
    });
    if ((jQuery('.top_slider_blog').hasClass('type3')) || (jQuery('.top_slider_blog').hasClass('type4')) || (jQuery('.top_slider_blog').hasClass('type5'))) {
        jQuery('#posts_carousel.position_top').css('margin-top', '0')
    }
    PostLikes();
});
jQuery(window).load(function() {
    "use strict";
    jQuery('.top_slider_blog').css('opacity', '1');
    jQuery('.top_slider_preloader').hide();
    video_size();
    page404_h();
});
jQuery(window).resize(function() {
    "use strict";
    headerSticky();
    video_size();
    page404_h();
    akusaraHeaderHeight();
});
jQuery(window).scroll(function() {
    "use strict";
    headerSticky();
});

//  Mobile Menu Function
if (jQuery('#header_mobile_wrap').size() > 0) {
    jQuery('.mobile_menu_btn').on('click', function () {
        jQuery('#header_mobile_wrap .menu-primary-menu-container-wrap').slideToggle();
    });
    
    jQuery('#header_mobile_wrap ul.sub-menu').hide();
    jQuery('#header_mobile_wrap .menu-item-has-children').children('a').on('click', function(event) {
        event.preventDefault();
        jQuery(this).toggleClass('submenu_open');
        jQuery(this).next('ul').slideToggle(300);
    });
}
