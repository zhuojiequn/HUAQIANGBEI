define(['jquery','$cookie'],function(){
    if($.cookie('user')){
        //固定购物车栏目的加载
        var user = $.cookie('user');
        getBuyInfor(user);
    }else{//没有cookie信息的时候购物车的显示
        nogoods('您还没有登录','点击登录','http://localhost/HUAQIANG/html/log.html');
    }

    //用户购买表信息
    function getBuyInfor(){
        $.ajax({
            url:'http://localhost/HUAQIANG/php/carting.php',
            data:{
                user:user,
            },
            success:function (data) {
                var data = JSON.parse(data);
                var sidArr = [];
                var buynumArr = [];
                $(data).each(function(i){
                    sidArr[i] = data[i].buysid;
                    buynumArr[i] = data[i].buynum;
                });
                findGoodsloading(sidArr,buynumArr);//找到商品具体数据

            }
        });
    }
    //通过sid获取商品具体信息
    function findGoodsloading(sidArr,buynumArr){
        $.ajax({
            url:'http://localhost/HUAQIANG/php/findcartgoods.php',
            data:{
                sid:sidArr,
            },
            success:function(data1){
                var data = new  Object();
                if(data1){
                    data = JSON.parse(data1);
                }
                cartsloading(data,buynumArr);//购物车数据在家
            },

        });
    }
    // 购物车数据加载
    function cartsloading(data,buynumArr){
        //右侧固定购物
        var chtml = '';
        if($('.cartu-li[tips=tips]')){
            $('.cartu-li').remove();
        }
        $(data).each(function(i){
            chtml += `<li class="cart_item" sid="${data[i].sid}">
                                        <a   href="#" class="goods_pic">
                                            <img height="60" src="${data[i].src}" widht="60">
                                        </a>
                                        <div class="goods_info">
                                            <a  href="#" class="goods_tit">${data[i].title}</a>
                                            <div class="goods_num">
                                                <i class="price">${data[i].price1}</i>×<i class="num">${buynumArr[i]}</i>
                                            </div>
                                        </div>
                                    </li>`;
        });
        $('.cart_list_box .cart_list').append(chtml);
        $('.cart-num').html(total($('.cart_list .cart_item')).totalnum); //商品总数
        $('.total-price').html('$'+total($('.cart_list .cart_item')).totalprice); //商品总价格
        $('.total-num em').html(total($('.cart_list .cart_item')).totalnum);
        // 购物车页面的载入
        if($('.cart-u')&&$('.cart-u').find('.cartu-h')&&data){
            var uhtml = '';
            $(data).each(function(i){
                uhtml += `<div class="cartu-li" checked="checked" sid="${data[i].sid}">
                                        <input type="checkbox" checked class="docheck">
                                        <img src="${data[i].src}" alt="" width=72 height=72>
                                        <div class="infor">
                                            <a href="http://localhost/HUAQIANG/html/details.html?=${data[i].sid}" target="_blank">
                                                ${data[i].title}</a>
                                            <span> ${data[i].title2}</span>
                                        </div>
                                        <div class="price">${data[i].price1}
                                            <button>特价</button>
                                        </div>
                                        <div class="numbox">
                                            <div class="numi numup">+</div>
                                            <div class="numi num">${buynumArr[i]}</div>
                                            <div class="numi numdown">-</div>
                                        </div>
                                        <div class="total-p">${data[i].price1*buynumArr[i]}</div>
                                        <span class="do"></span>
                                </div>`;
            });
            $('.cart-u').find('.cartu-h').after(uhtml);
            $('.cart-main .total-num').html(total($('.cart-u .cartu-li')).totalnum);
            $('.cart-main .total-price').html('$'+total($('.cart-u .cartu-li')).totalprice);
        }
    }
    //共有的价格等类名求总函数
    function total(dom){
        var totalnum = 0;
        var totalprice = 0;
        dom.each(function(i){
            totalnum += parseInt(dom.eq(i).find('.num').html());
            totalprice += parseInt(dom.eq(i).find('.price').html())*parseInt(dom.eq(i).find('.num').html());
            classnum = i;
        });
        return {
          totalprice:totalprice,
          totalnum:totalnum,
        };
    }
    //没有商品和没有登录的时候
    function nogoods(str,todo,href){
        if($('.cartu-li[tips=tips]')){
            $('.cartu-li').remove();
        }
        var uhtml = `<div class="cartu-li" tips="tips"  style="text-align: center;line-height: 4.3;">
                ${str}<a style="font-weight: bold;color: #3681ff" href="${href}">${todo}</a>
        </div>`;
        $('.cart-u').find('.cartu-h').after(uhtml);
    }
    return {
        total:total,
        nogoods:nogoods,
    };
});