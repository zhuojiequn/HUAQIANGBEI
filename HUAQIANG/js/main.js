require.config({
    paths: {
        "jquery":"jq-2.1.4.min",
        "$slide":"indexJS/$slide",
        "$cookie":"jquery.cookie",
        "$menu":"indexJS/$menu",
        "$floor":"indexJS/$floor",
        "$fixedcart":"indexJS/$fixedcart",
        "$buytimer":"indexJS/$buytimer",
        "$indexloading":"indexJS/$indexloading",
        "$imghover":"indexJS/$imghover",
        "$regform":"otherJS/$regform",
        "$scale":"otherJS/$scale",
        "$logform":"otherJS/$logform",
        "$carting":"otherJS/$carting",
        "$intocart":"otherJS/$intocart",
        "$detailloading":"otherJS/$detailloading",
        "$cartloading":'indexJS/$cartloading',
    }
});
//主页数据加载+++++++轮播
require(["jquery","$slide","$indexloading"]);
//菜单载入
require(["$menu"]);

//固定购物车栏
require(["$fixedcart"]);

//商品购买限时 定时器效果
require(["$buytimer"]);

//楼梯
require(['$floor']);

//图片hover效果
require(["$imghover"]);

//注册表单
require(["$regform"]);

//登录表单
require(["$logform"]);

//放大镜效果
require(['$scale']);

//详情页面数据加载
require(['$detailloading']);
//详情页加入购物车
require(['$intocart']);

//购物车的加载 (固定栏目购物车+购物车页面)
require(['$cartloading']);

//购物车页面的事件
require(['$carting']);