define(['jquery'],function () {
    //随机图片的加载
    $(function(){
        var num='';
        $.ajax({
            data:{
              num:randNum(1,10),
            },
            url:'http://localhost/HUAQIANG/php/regnum.php',
            success:function(data){
                var data = JSON.parse(data);
                $('.checknum .makenum').css({
                    background:`url(${data[0].src})`,
                    backgroundSize:'100% 100%',
                });
                num = data[0].number;
            }
        });
        var phonef = false;
        var passwordf = false;
        var passagainf = false;
        var checkf = false;
        var allInput = $('.reg-form input');
        var phone = $('.phone');
        var phoneReg = /^1[3|4|5|8][0-9]{9}$/;
        allInput.on('focus',function(){
            $(this).siblings('.tips').css({visibility:'visible'});
            $(this).siblings('i').not('.makenum').css({display:'none'});
        });
        allInput.on('blur',function(){
            $(this).siblings('.tips').css({visibility:'hidden'});
        });
        //手机格式验证
        phone.on('change',function(){
            if(phoneReg.test($(this).val())){
                $(this).siblings('tips').css({visibility:'hidden'});
                $(this).siblings('i').css({
                    background:'url(../images/reg_if.jpg) left -23px no-repeat',
                    display:'block'
                });
                passwordf = true;
            }else{
                $(this).siblings('i').css({
                    background:'url(../images/reg_if.jpg) left 0 no-repeat',
                    display:'block'
                });
                passwordf = false;
            }
        });
        //密码
        var passreg = /^[a-zA-Z0-9_-]{4,16}$/;/* /^\D[a-zA-Z0-9_\D]{7-16}&/*/;
        var pass = $('.pass');
        pass.on('change',function(){
            if(passreg.test($(this).val())){
                $(this).siblings('tips').css({visibility:'hidden'});
                $(this).siblings('i').css({
                    background:'url(../images/reg_if.jpg) left -23px no-repeat',
                    display:'block'
                });
                phonef = true;
            }else{
                $(this).siblings('i').css({
                    background:'url(../images/reg_if.jpg) left 0 no-repeat',
                    display:'block'
                });
                phonef = false;
            }
        });
        //确认密码
        var passagain = $('.passagain');
        passagain.on('change',function(){
           if($(this).val() == pass.val()){
               $(this).siblings('tips').css({visibility:'hidden'});
               $(this).siblings('i').css({
                   background:'url(../images/reg_if.jpg) left -23px no-repeat',
                   display:'block'
               });
               passagainf = true;
           } else{
               $(this).siblings('i').css({
                   background:'url(../images/reg_if.jpg) left 0 no-repeat',
                   display:'block'
               });
               passagainf = false;
           }
        });

        //随机图片  (无)
        var checkinput = $('.checkinput');
        checkinput.on('blur',function(){
            $(this).siblings('tips').css({visibility:'hidden'});
            $('.check-i').css({
                background:'url(../images/reg_if.jpg) left -23px no-repeat',
                display:'block',
            });
            checkf=true;
        });
        //提交信息
        $(".reg-form").on('submit',function(){
            return false;
        }).on('submit',function(){
            if(checkf&&phonef&&passwordf&&passagainf){
                $.ajax({
                    url:'http://localhost/HUAQIANG/php/regsubmit.php',
                    data:{
                        phone:phone.val(),
                        password:pass.val(),
                    }
                });
                $(location).attr('href', 'http://localhost/HUAQIANG/html/log.html');
            }else{
                alert('信息不完整');
            }
        });


    });
    function randNum(n,m){
        return Math.ceil(Math.random()*(m-n)) + n;
    }

});