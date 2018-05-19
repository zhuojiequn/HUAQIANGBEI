define(['jquery','$buytimer','$cookie'],function($,buyTimer){
    $(function(){
        //登录后用户数据加载   分为地址栏目信息获取信息和cookie获取信息
        if($.cookie('user')&& $.cookie('password')){
            var username = $.cookie('user');
            loging(username);
        }/*else if($(location).attr('href').match(/=\w+/)!=null){
            var username = $(location).attr('href').match(/=\w+/).join(',').replace('=','');
            loging(username);
        }*/
        //加载用户信息
        function loging(username){
            $('.tool-log').css({color:'#444'});
            $('.tool-log').attr({'href':"http://localhost/HUAQIANG/html/cart.html"});
            $('.tool-register').html('注销');
            $('.tool-register').attr({href:'http://localhost/HUAQIANG/html/log.html'});
            $('.tool-log').html(`您好,<a style="color:red" class="onuser">ok_${username}</a>欢迎来到华强北商城`);
        }

        $.ajax({
            url:'http://localhost/HUAQIANG/php/indexslide.php',
            beforeSend:function(){
                //单块区域懒加载的预设置
                var html = '';
                for(var i=0;i<6;i++){
                    html += `<div class="conitem">
                                <img src="../images/loading.gif" alt="" style="margin: auto">
                            </div>`;
                }
                $('.floor-a .f-acon .conright').html(html);
            },
            success:function(data){
                if(data){
                    //清除懒加载再载入数据
                    $('.floor-a .f-acon .conright').html('');
                    var data = JSON.parse(data);
                    var slidedata = $(data.slidedata);
                    var hotsdata = $(data.hotsdata);
                    var goodsdata = $(data.goodsdata);
                    var tehuidata = [];
                    var fadata = [];
                    var fbdata = [];
                    //将数据分块处理
                    goodsdata.each(function (i) {
                        if(goodsdata[i].classname == 'apple'){
                            fadata.push(goodsdata[i]);
                        }
                        if(goodsdata[i].classname == 'guohang'){
                            fbdata.push(goodsdata[i]);
                        }
                        if(goodsdata[i].classname == 'tehui'){
                            tehuidata.push(goodsdata[i]);
                        }
                    });
                    //分块的数据换位JQ对象的数据
                    fadata = $(fadata);
                    fbdata = $(fbdata);
                    tehuidata=$(tehuidata);
                    //轮播的加载
                    $('.banner').Slide({
                        imgData:slidedata,
                        everyDelay:5000,
                        speed:'fast',
                        btnpos:{r:'4.3%', l:'2.3%'},
                    });
                }
                //特惠专区的加载
                var tehuihtml = '';
                tehuidata.each(function(i){
                    tehuihtml += `<div class="discount-item">
                <div class="item-l">
                    <a href="http://localhost/HUAQIANG/html/details.html?sid=${tehuidata[i].sid}">
                        <img width="306" height="276" src="${tehuidata[i].src}" alt="">
                    </a>
                </div>
                <div class="item-r">
                    <div class="sale-info">
                        <h2 class="sale-time"><i></i>距离活动结束: <p class="sp-iblock buytimer"><span>0</span><span>9</span>:<span>5</span><span>1</span>:<span>4</span><span>2</span></p></h2>
                        <a href="#" target="_blank" class="sp-block link1">
                        ${tehuidata[i].title}</a>
                        <a href="#" target="_blank" class="sp-block link2">/</a>
                        <div class="price">
                            特惠价:¥ <i>${tehuidata[i].price2}</i>
                            <a href="#" target="_blank" class="sp-iblock sp-buy fr">立即购买</a>
                        </div>
                        <div class="sp-info clear">
                            <div class="info1 ff">
                                <p>市场价</p>
                                <p>¥${tehuidata[i].price1}</p>
                            </div>
                            <div class="info2 ff">
                                <p>折扣</p>
                                <p>8.1折</p>
                            </div>
                            <div class="info3 ff">
                                <p>已节省</p>
                                <p>¥${tehuidata[i].price1-tehuidata[i].price2}</p>
                            </div>
                            <div class="info4 fr">
                                <p class="buy-num" style="font-size:16px"><i></i>0</p>
                                <p>已购买</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
                });
                $('.discount-con').append(tehuihtml);
                //火热专区加载
                var hothtml = '';
                hotsdata.each(function(i){
                    hothtml += `<a href=${hotsdata[i].href} style="margin-right: 10px"><img src=${hotsdata[i].src} alt=""></a>`;
                });
                $('.hot-banner').append(hothtml);
                //共用的数据加载函数
                function fconAppend(dom,data,length){
                    var html = '';
                    var dom = dom;  var data = $(data);
                    var length = length || data.size();
                    data.each(function(i){
                        html += `<div class="conitem">
                            <div class="imgbox">
                                <a href="http://localhost/HUAQIANG/html/details.html?sid=${data[i].sid}"><img src="${data[i].src}" class="imgup" alt=""></a>
                            </div>
                            <div class="infor">
                                <p class="price">¥:<i>${data[i].price1}</i><del>市场价:¥${data[i].price2}</del></p>
                                <a class="title">${data[i].title}</a>
                            </div>
                        </div>`;
                        if(i == length - 1 ){
                            return false;
                        }
                    });
                    dom.append(html)
                }
                //楼层加载
                var facon = $('.floor-a .f-acon .conright');
                fconAppend(facon,fadata);

                var fbcon = $('.floor-b .conright');
                fconAppend(fbcon,fbdata);

                fconAppend($('.floor-b .f-footer'),fbdata,5);

                var cconli = $('.floor-c .ccon-li');
                for(var i=0;i<3;i++){
                    fconAppend(cconli.eq(i),goodsdata,2);
                }
                //横条推荐菜单载入
                var navitem = $('.floor-b .nav-item');
                     //无结构加载数据的函数
                function load(dom,data,length){
                    var dom = dom, data = data;
                    var length = length || dom.size();
                    data.each(function(i){
                        dom.eq(i).find('img').attr({src:data[i].src});
                        dom.eq(i).find('.title').html(data[i].title);
                        dom.eq(i).find('.title1').html(data[i].title1);
                        dom.eq(i).find('.price1').html(data[i].price1);
                    });
                }
                load(navitem,goodsdata);
                //特惠区定时器
                buyTimer($('.buytimer'));
            }
        });
    });
});