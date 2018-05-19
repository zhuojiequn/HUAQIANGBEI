define(['jquery'],function(){
    $('.imgtar').on('mouseenter','.conitem .imgbox',function(){
        $(this).css({position:'relative'});
        $(this).animate({top:'-3%',});
    });
    $('.imgtar').on('mouseleave','.conitem .imgbox',function(){
        $(this).css({position:'relative'});
        $(this).animate({top:'0',});
    });
});