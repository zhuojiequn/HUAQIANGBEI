define(['jquery'],function(){
    $(function(){
        var $louti=$('.floor-nav');
        var $loutili=$('.nav-l');
        var $louceng=$('.louti');
        $(window).on('scroll',function(){
            var $st=$(window).scrollTop();
            if($st>=450){
                $louti.show();
            }else{
                $louti.hide();
            }
            $louceng.each(function(index,element){
                var $top1=$louceng.eq(index).offset().top+300;
                if($top1>=$st){
                    $loutili.removeClass('on');
                    $loutili.eq(index).addClass('on');
                    return false;
                }
            });

        });
        $loutili.not('.last').on('click',function(){
            var $top=$louceng.eq($(this).index()).offset().top;
            $('html,body').animate({
                scrollTop:$top
            })
        });
        $('#loutinav ul li.last').on('click',function(){
            $('html,body').animate({
                scrollTop:0
            });
        });
    });
})