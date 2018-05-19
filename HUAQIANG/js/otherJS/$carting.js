define(['jquery','$cookie','$cartloading','$intocart','$buytimer'],function($,c,cart,flyinto,overtimer){
    ;(function(){
        //结算倒计时
        overtimer($('.overtimer'));
        if($.cookie('user')){
            var user = $.cookie('user');
        }
        $('.cart-u').on('click','.do',function(){
            changeNum($(this),0);
        });
        $('.cart-u').on('click','.numup',function(){
            changeNum($(this),1);
        });
        $('.cart-u').on('click','.numdown',function(){
            changeNum($(this),-1);
        });
        $('.cart-u').on('click','.docheck',function(){
            if($(this).parents('.cartu-li').attr('checked')== 'checked'){
                $(this).parents('.cartu-li') .attr('checked',false);
            }else{
                $(this).parents('.cartu-li') .attr('checked','checked');
            }
             $('.cart-main .total-num').html(cart.total($('.cart-u .cartu-li[checked=checked]')).totalnum);
            $('.cart-main .total-price').html('$'+cart.total($('.cart-u .cartu-li[checked=checked]')).totalprice);
        });


        function changeNum(obj,n){
            var n= parseInt(n);
            var changesid = obj.parents('.cartu-li').attr('sid');
            obj.siblings('.num').html(parseInt(obj.siblings('.num').html())+n);
            //删除按钮的事件判断
            if(n==0){
                obj.siblings('.numbox').find('.num').html(0);
                obj.parents('.cartu-li').remove();
            }

            $('.cart-main .total-num').html(cart.total($('.cart-u .cartu-li[checked=checked]')).totalnum);
            $('.cart-main .total-price').html('$'+cart.total($('.cart-u .cartu-li[checked=checked]')).totalprice);
            if(obj.siblings('.num').html() == 0){
                obj.parents('.cartu-li').remove();
            }
            //发送数量为0时数据库删除数据
            $.ajax({
                url:'http://localhost/HUAQIANG/php/cartadd_del.php',
                data:{
                    changesid:changesid,
                    changenum:obj.siblings('.num').html(),
                    loguser:user,
                }
            });
            if($('.cart-u .cartu-li').size() == 0){
                cart.nogoods('目前没有购买任何商品','去购买商品','http://localhost/HUAQIANG/html/index.html');
            }
        }
    })();
});