define(['jquery'],function () {
    var flag = true;
    $('.open-cart').on('click',function(){
        if(flag==true){
            flag = false;
            $('.cart-detail').show();
        }else{
            flag = true;
            $('.cart-detail').hide();
        }
    });
    $('.cart-detail .close').on('click',function () {
        $('.cart-detail').hide();
    });
    $('.open-cart').on('hover',function(){
        $(this).css({background:'red'});
    });
});