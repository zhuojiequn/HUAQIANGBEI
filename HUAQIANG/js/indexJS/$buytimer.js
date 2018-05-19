define(['jquery'],function(){
    //主页面商品限时倒计时,初始时间为从数据库提取
    function prevChange(now){
        if(now.index() != 0){
            if((now.index()+1)%2 ==0&&now.html()<0){
                now.html(9);
                var a = now.prev().html() - 1;
                now.prev().html(a);
            }else if((now.index()+1)%2 !=0&&now.html()<0){
                    now.html(6);
                    var a = now.prev().html() - 1;
                    now.prev().html(a);
            }
            return prevChange(now.prev());
        }
    }
    return function(){
        var box = $('.buytimer');
        box.each(function(i){
            var lastItem = box.eq(i).find('span').last();
            box[i].timer = setInterval(function(){
                lastItem.html(lastItem.html()-1);
                prevChange(lastItem);
            },1000);
        });
    };
});