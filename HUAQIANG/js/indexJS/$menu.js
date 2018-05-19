define(['jquery'],function () {
    var timer=null;
    $('.menu-second dt').on('mouseover',function(){
        clearTimeout(timer);
        $('.tab-menu').show();
        var infornum = $(this).index()+1;
        $.ajax({
            data:{infornum:infornum},
            url:'http://localhost/HUAQIANG/php/menuinfor.php',
            success:function(data){
                if(data){
                    var data1 = JSON.parse(data);
                    var html = '';
                    for(var i=0;i<data1.length;i++){
                        html +=`<a href=${data1[i].href}>${data1[i].name}</a>`;
                    }
                    html += `<a href="http://www.okhqb.com/list/137.html?utml=zsfenlei">更多>></a>`;
                    $('.menu-second .tab-menu').html(html);
                }
            }
        });
        $(this).css({background:'#fff'}).find('a').css({color:'red'}).find('.icon').css({
            backgroundPositionY:'-62px',
        });
        $(this).find('a').find('i').css({
            backgroundPositionX:'-580px',
        });
        $(this).siblings('dt').css({background:'none'}).find('a').css({color:'#fff'}).find('.icon').css({
            backgroundPositionY:'-40px',
        });
        $(this).siblings('dt').find('a').find('i').css({
            backgroundPositionX:'-590px',
        });
    });
    $('.menu-second dt').on('mouseout',function(){
        timer=setTimeout(function(){
            $('.tab-menu').hide();
            $('.menu-second dt').siblings('dt').css({background:'none'}).find('a').css({color:'#fff'}).find('.icon').css({
                backgroundPositionY:'-40px',
            });
            $('.menu-second dt').siblings('dt').find('a').find('i').css({
                backgroundPositionX:'-590px',
            });
        },400);
    });

    $('.tab-menu').on('mouseover',function(){
        clearTimeout(timer);
        $(this).show();
    });

    $('.tab-menu').on('mouseout',function(){
        timer=setTimeout(function(){
            $('.tab-menu').hide();
            $('.menu-second dt').siblings('dt').css({background:'none'}).find('a').css({color:'#fff'}).find('.icon').css({
                backgroundPositionY:'-40px',
            });
            $('.menu-second dt').siblings('dt').find('a').find('i').css({
                backgroundPositionX:'-590px',
            });
        },400)

    });
});


