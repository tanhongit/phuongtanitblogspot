require([
    'jquery',
    'clamp',
    'Magento_Customer/js/customer-data',
    'domReady!'
], function ($, clamp, customerData) {
    $(document).ready(function () {
        $('body').on('click', '.showwishlist, .wishlist-counter', function () {
            if ($('.showwishlist').hasClass('active')) {
                $('.showwishlist').removeClass('active');
                $('.showwishlist').closest('.block-wishlist-wrapper').removeClass('active');
            } else {
                $('.showwishlist').addClass('active');
                $('.showwishlist').closest('.block-wishlist-wrapper').addClass('active');
            }
            return false;
        });

        // $(".block-wishlist-wrapper").hover(function () {
        //     $(this).addClass('active');
        //     $('.showwishlist').addClass('active');
        // },function () {
        //     $(this).removeClass('active');
        //     $('.showwishlist').removeClass('active');
        // });

        $('body, .action.showcart').click(function (event) {
            if (!$(event.target).closest(".block-wishlist-wrapper, .header-wishlist-content").length) {
                $('.showwishlist').removeClass('active');
                $('.block-wishlist-wrapper').removeClass('active');
            }
        });

        $('#wishlist-sidebar a.product-item-link span').each(function () {
            clamp(this, {
                clamp: 2,
                useNativeClamp: true
            });
        });

        $('#wishlist-sidebar .product-item-name span.author').each(function () {
            clamp(this, {
                clamp: 1,
                useNativeClamp: true
            });
        });

        $("body").on('click',"[data-remove=wishlist]", function (e) {
            e.preventDefault();
            $.mage.dataPost().postData($(this).data('post-remove'));
        });

        var isChangeWishlist = false;
        $('body').on('click', '.wishlist-icon', function () {

            if(isChangeWishlist) return;
            isChangeWishlist = true;
            var fullAttr = '[data-product-id=' + $(this).attr('data-product-id')+']';
            if($(this).hasClass('is_in_wishlist')){
                $.ajax({
                    url: '/wishlist/index/remove',
                    data: {'item':$(this).attr('data-id')},
                    type: 'GET',
                    dataType: 'json',
                    contentType: "application/json",
                    success: function (res) {
                        if(res.success){
                            isChangeWishlist = false;
                            customerData.reload(['wishlist'], false);
                            $(fullAttr).removeClass('is_in_wishlist');
                            if($('body').hasClass('wishlist-index-index')){
                                if($('.is_in_wishlist').length == 0) {
                                    location.reload();
                                }
                                $(fullAttr).closest('.wishlist-item').remove();
                            }
                        } else {
                            if(res.is_login !== undefined && !res.is_login) {
                                location.href = res.url_login;
                            }
                            isChangeWishlist = false;
                        }
                    },
                    error: function (res) {
                        isChangeWishlist = false;
                    }
                })
            }else{
                var that = $(this);
                $.ajax({
                    url: '/wishlist/index/add',
                    data: {'product':$(this).attr('data-product-id')},
                    type: 'GET',
                    dataType: 'json',
                    contentType: "application/json",
                    success: function (res) {
                        if(res.success){
                            isChangeWishlist = false;
                            customerData.reload(['wishlist'], false);
                            $(fullAttr).addClass('is_in_wishlist');
                            $(fullAttr).attr('data-id', res.wishlist_id);
                        } else {
                            if(res.is_login !== undefined && !res.is_login) {
                                location.href = res.url_login;
                            }
                            isChangeWishlist = false;
                        }
                    },
                    error: function (res) {
                        isChangeWishlist = false;
                    }
                })
            }
        });
    });
});
