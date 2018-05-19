define(['jquery','$cookie'],function(){
   $(function(){
       //提取保存的信息
       //登录后用户数据加载
       if($.cookie('user')&&$.cookie('password')){
            var username = $.cookie('user');
            var password = $.cookie('password');
            $('.logingf input[name=user]').val(username);
            $('.logingf input[name=password]').val(password);
       }


       var placeArr =['请输入您的昵称/邮箱/手机号','请输入您的密码'];
        $('.logingf input').on('focus',function(){
            $(this).attr({placeholder:''});
        }).on('blur',function(){
            if(!$(this).val()){
                $(this).attr({
                    placeholder:placeArr[$(this).attr('index')],
                });
            }
        });
        $('.logingf').on('submit',function(){
            return false;
        }).on('submit',function(){
            $.ajax({
                url:'http://localhost/HUAQIANG/php/logsubmit.php',
                data:{
                    user:$(this).find('input[name=user]').val(),
                    password:$(this).find('input[name=password]').val(),
                },
                success:function(reponse){
                    var reponse = JSON.parse(reponse);
                    if(reponse[0]&&reponse[1]){
                        if($('.logingf .cookie').attr('checked') == 'checked'){
                            $.cookie('user',reponse[0].name);
                            $.cookie('password',reponse[0].password);
                        }
                       $(location).attr('href', 'http://localhost/HUAQIANG/html/index.html?');
                    }else{
                        alert('用户名/密码 错误');
                    }
                }
            });
        });

   }) ;
});