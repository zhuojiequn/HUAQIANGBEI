define(['jquery'],function () {
    $('.open-cart').on('click',function(){
        $('.cart-detail').show();
    });
    $('.cart-detail .close').on('click',function () {
        $('.cart-detail').hide();
    })
});