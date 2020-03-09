require(['jquery'], function ($) {
    $(document).ready(function(){
        var course = $("body").find('.widget.widget-section.course');

        if (course.length > 0) {
            var productSku = course.attr('class').split('widget widget-section course')[1].trim();

            if (!$.isEmptyObject(productSku)) {
                $.ajax({
                    url: '/rest/V1/edumall/getprice?sku=' + productSku,
                    type: 'GET',
                    success: function (res) {
                        if (res['status'] == 1) {
                            course.find('.edm-product-discount p span').text(res.data[0].discount);
                            course.find('.edm-product-origin-price p span').text(res.data[0].price);
                            course.find('.edm-product-final-price p span').text(res.data[0].final_price);
                        }
                    }, errors: function (res) {
                    }
                });
            }
        }
    });
});
