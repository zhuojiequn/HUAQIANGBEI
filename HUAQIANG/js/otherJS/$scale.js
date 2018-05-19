define(['jquery'],function(e){
    $('.showbox').on('mouseenter',function(e){
        $('.showbig').css({display:'block',zIndex:'99999'});
        var w = $('.smallpic').width()*$('.showbig').width()/$('.bigpic').width();
        var h = $('.smallpic').height()*$('.showbig').height()/$('.bigpic').height();
        $('.tobig').css({
            display:'block',
            width:w,
            height:h,
        });
        var bili = $('.showbig').width()/w;
        $('.showbox').on('mousemove',function(e){
            var e = e || window.event;
            var x = e.pageX - $(this).offset().left -w/2;
            var y = e.pageY - $(this).offset().top -h/2;
            if(x < 0){
                x = 0;
            }else if(x >= $('.showbox').width()-$('.tobig').width()){
                x = $('.showbox').width()-$('.tobig').width();
            }
            if(y < 0){
                y = 0;
            }else if(y >= $('.showbox').height()-$('.tobig').height()){
                y = $('.showbox').height()-$('.tobig').height();
            }
            $('.tobig').css({
                left:x,
                top:y,
            });
            $('.bigpic').css({
                position:'relative',
                top:-y*bili,
                left:-x*bili,
            })
        });
    });
    $(".showbox").on('mouseleave',function(){
        $('.showbig').css({display:'none'});
        $('.tobig').css({display:'none'});
    });
    //放大镜下菜单栏目的TAB切换
    var moveObj = $('.picmenu ul');
    var leftbtn = $('.picmenu .slide-left');
    var rightbtn = $('.picmenu .slide-right');
    var liitem = $('.picmenu ul li');
    var index=4;
    var moveDis = $('.picmenu ul li').width() + parseInt($('.picmenu ul li').css('marginRight'));
    liitem.click(function(){
        $('.showbox .smallpic').attr({
            src:$(this).find('img').attr('src'),
        });
        $('.showbig .bigpic').attr({
            src:$(this).find('img').attr('src'),
        })
    });
    rightbtn.click(function(){
        index++;
        if(index>=6){
            index = 6;
        }
        moveObj.animate({left:-(index-4)*moveDis})
    });
    leftbtn.click(function(){
        index--;
        if(index<=4){
            index = 4;
        }
        moveObj.animate({left:-(index-4)*moveDis})
    })
});