define(['jquery'],function(){
   $(function(){
       var href1 = $(location).attr('href').match(/=\w+/);
       if(href1 != null){
           var sid = href1.join(',').replace('=','');
       }
       //获取当前页面商品索引并且加载页面
       if(/\d/.test(sid)){
           $.ajax({
               url:'http://localhost/HUAQIANG/php/detailloading.php',
               data:{
                   sid:sid,
               },
               success:function(data){
                   if(data){
                       var data = JSON.parse(data);
                       data = data[0];
                       $('.showbox .smallpic').attr({
                           src:data.src,
                           sid:data.sid,
                       });
                       $('.name-infor').html(data.title);
                       $('.pricenow .shangjia').html(data.price1);
                       $('.shijia del').html(`:¥${data.price2}`);
                       $('.classtitle').html(`${data.phoneclass}`);
                       $('.showbig .bigpic').attr({src:data.src,});
                       $('.name-tips').html(data.title1);
                   }
               }
           });
       }else{
           var sid = null;
       }
   });
});