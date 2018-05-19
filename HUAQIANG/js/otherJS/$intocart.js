define(['jquery','$cookie','$cartloading'],function(){
    //详情页点击商品飞入购物车
    $('.details-mid .getin').on('click',function(){
        var loguser = $.cookie('user');
        if($.cookie('user')){
            $(this).css({position:'relative'});
            var changesrc = $('.showbox .smallpic').attr('src');
            var html = `<img src="${changesrc}" width="100" height="100" 
                    style="display:block;padding: 2px;border: 1px solid #1e1e1e;
                    position: absolute;z-index:999999" class="flytocart">`;
            $(this).append(html);
            var speedx=20,speedy=10;
            //飞入购物效果
            var flying = setInterval(function(){
                if($('.open-cart').offset().top > $('.flytocart').offset().top){
                    speedy = 10;
                }else if($('.open-cart').offset().top == $('.flytocart').offset().top){
                    speedy =0;
                }
                if($('.open-cart').offset().left - $('.flytocart').width() > $('.flytocart').offset().left){
                    $('.flytocart').offset({
                        left:$('.flytocart').offset().left + speedx,
                        top:$('.flytocart').offset().top +speedy,
                    });
                }else{
                    clearInterval(flying);
                    $('.flytocart').remove();
                }
            },2);
            //增加商品+++判断当前登录用户创建数据表+
            var src = $('.smallpic').attr('src');
            var sid = $('.smallpic').attr('sid');
            var title = $('.name-infor').html();
            var price = $('.shangjia').html();
            var chtml = `<li class="cart_item" sid="${sid}">
                        <a   href="#" class="goods_pic">
                            <img height="60" src="${src}" widht="60">
                        </a>
                        <div class="goods_info">
                            <a  href="#" class="goods_tit">${title}</a>
                            <div class="goods_num">
                                <i class="price">${price}</i>×<i class="num">1</i>
                            </div>
                        </div>
                    </li>`;
            //判断是否已经加入相同商品
            var index = null;
            if($('.cart_list .cart_item').get(0) != undefined){
                //获取存在的相同sid的位置
                $('.cart_list .cart_item').each(function(i){
                    if($('.cart_item').eq(i).attr('sid') == $('.showbox .smallpic').attr('sid')){
                        index = i;
                    }
                });
                if(index!=null){
                    $('.cart_list .cart_item').eq(index).find('.num').html(parseInt($('.cart_list .cart_item').eq(index).find('.num').html())+1);
                }else{
                    $('.cart_list').append(chtml);
                }
            }else{
                $('.cart_list').append(chtml);
            }
            // //商品数量丶价格丶种类的求和
            var totalnum = 0;
            var totalprice = 0;
            $('.cart_list .cart_item').each(function(i){
                totalnum += parseInt($('.cart_list .cart_item').eq(i).find('.num').html());
                totalprice += parseInt($('.cart_list .cart_item').eq(i).find('.price').html())*parseInt($('.cart_list .cart_item').eq(i).find('.num').html());
            });
            $('.open-cart .cart-num').html(totalnum); //商品总数
            $('.total-price').html('$'+totalprice); //商品总数
            $('.total-num em').html(totalnum);
            var buynum = $('.cart_item').eq(index).find('.num').html();
            //创建用户信息表
            $.ajax({
                url:'http://localhost/HUAQIANG/php/creatuserinfor.php',
                data:{
                    loguser:loguser,
                    buynum:buynum,
                    buysid:sid,
                }
            });
        }else{
            alert('还没有登录');
        }
    });
    function flyinTo(flyobj,target){
        var speedx=20,speedy=10;
        var flying = setInterval(function(){
            if(target.offset().top >flyobj.offset().top){
                speedy = 10;
            }else if(target.offset().top < flyobj.offset().top){
                speedy =-10;
            }
            if(target.offset().left - flyobj.width() >flyobj.offset().left){
                flyobj.offset({
                    left:flyobj.offset().left + speedx,
                    top:flyobj.offset().top +speedy,
                });
            }else{
                clearInterval(flying);
                flyobj.remove();
            }
        },1);
    }
    return flyinTo;
});