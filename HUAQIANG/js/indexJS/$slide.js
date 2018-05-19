/*
 @拓展JQ的方法对象
* 传入容器 | 图片数据(数组对象) | 轮播方法
* */
define(['jquery'],function(){
    ;(function($){
        var _slideStatue = {};
        $.fn.Slide = function(options){
            var defaults = {
                imgData : [{}],
                meth : 'left-seamless',
                timer : null,
                everyDelay : 5000,
                index : 0,
                prevIndex:0,
                setIndex:true,
                autoPlay:true,
                hoverStop:true,
                marginR:0,
                width:0,
                speed:'fast',
                clickDelay:1000,
                btnpos:{
                    r:'4.3%',
                    l:'2.3%'
                },
                htmlTemplet : `<div class="slide-hidden"><ul></ul> <ol></ol>
			<a href="javascript:void(0);" id="slide-left"></a>
			<a href="javascript:void(0);" id="slide-right"></a></div>`,
            };
            var that = this;//指向当前DOM元素即
            var updata = $.extend(defaults,options);

            var _inite = function(){
                /*****************
                 共有CSS+HTML初始化
                 *****************/
                that.html(updata.htmlTemplet);
                var $hidden = $('.slide-hidden'),
                    $moveObj = $(".slide-hidden ul"),
                    $indexBox = $('.slide-hidden ol'),
                    $rightBtn = $("#slide-right"),
                    $leftBtn = $("#slide-left");
                var cssTemplet = `<style>
				.slide-hidden{width:${that.width()}px;height:${that.height()}px;
						position:relative;overflow:hidden}
				.slide-hidden ul{margin-top:0;position:absolute;height:${that.height()}px;width:${that.width()}px}
				.slide-hidden ul li,.slide-hidden li a,.slide-hidden ul img{
						display:block;width:${that.width()}px;height:${that.height()}px;border:none;}
				.slide-hidden ol li{float:left;list-style: none}
				.slide-hidden ul li{list-style: none}
				#slide-right,#slide-left{opacity:.6;display:none;width:${that.height()*0.07}px;height:${that.height()*0.15}px;
						color:#eee;background: #D0C4AF;text-align:center;
						font:${(that.height())*0.07-5}px/${that.height()*0.15}px arial;
						top:${that.height()*0.40}px;position:absolute;text-decoration: none}
				#slide-right{right:${updata.btnpos.r};}#slide-left{left:${updata.btnpos.l}}
				#slide-right:hover,#slide-left:hover{background:#eee;color: #333333}
				.slide-hidden ol{margin:${that.height()*0.92}px auto;}
				.slide-hidden ol li{height: 14px; width: 14px; border-radius: 50%;position: relative;
						background: #bfbbba; margin-right: 6px; cursor: pointer;}
				.active{background:#fff !important}
			</style>`;
                $('head').prepend(cssTemplet);
                for(var i=0;i<updata.imgData.length;i++){
                    $indexBox.append('<li></li>');
                    $moveObj.append(`<li><a href=${updata.imgData[i].href}><img src=${updata.imgData[i].src}></li>`);
                }
                /*************
                 渲染完成在获取剩余DOM
                 *****************/
                var	$item = $('.slide-hidden ul li'),
                    $indexBtn = $('.slide-hidden ol li');
                $indexBtn.eq(0).addClass('active');
                $indexBox.css({width:($indexBtn.width()+parseInt($indexBtn.css('marginRight'))+4)*$indexBtn.size()+'px'});
                if(updata.imgData == null) {$.error('can not find imgData')}
                var domObj = {
                    $hidden:$hidden,
                    $moveObj:$moveObj,
                    $indexBox:$indexBox,
                    $rightBtn:$rightBtn,
                    $leftBtn:$leftBtn,
                    $item:$item,
                    $indexBtn:$indexBtn,
                    $moveDis:$hidden.width(),
                }
                updata = Object.assign(domObj,updata);
                //方法选择
                switch(updata.meth){
                    case "left-seamless":_leftSeamlessInite();break;
                    case "show":_showInite();break;
                    case "left-slide":_leftSlide();break;
                    default: $.error('the meth is not defined');
                }
            }
            /*************
             * 共有方法:启动定时器:timerOpen timerReset
             * ******************/
            function timerOpen(fn){
                if(updata.autoPlay == true){
                    updata.timer = setInterval(function(){
                        updata.index++;
                        fn();
                        updata.prevIndex = updata.index;
                    },updata.everyDelay);
                }
            }
            function timerHover(fn){
                if(updata.hoverStop == true){
                    that.hover(function(){
                        clearInterval(updata.timer);
                        updata.$rightBtn.show();
                        updata.$leftBtn.show();
                    },function(){
                        timerOpen(fn);
                        updata.$rightBtn.hide();
                        updata.$leftBtn.hide();
                    })
                }
            }
            /**************
             完全无缝滚动
             **************/
            function _leftSeamlessChange(e){
                if(updata.index>updata.$indexBtn.size()-1){
                    updata.index=0;updata.prevIndex=updata.$indexBtn.size()-1;
                }else if(updata.index<0){
                    updata.index=updata.$indexBtn.size()-1;updata.prevIndex=0;
                }
                updata.$indexBtn.eq(updata.index).addClass('active').siblings('li').removeClass('active');
                if(updata.index==0&&updata.prevIndex==updata.$indexBtn.size()-1){
                    if(e == undefined || e.target.nodeName == 'A'){
                        updata.$item.eq(updata.index).css({left:updata.$moveDis}).animate({ left:0},updata.speed);
                        updata.$item.eq(updata.prevIndex).animate({left:-updata.$moveDis},updata.speed)
                    }else{
                        updata.$item.eq(updata.index).css({left:-updata.$moveDis}).animate({ left:0},updata.speed);
                        updata.$item.eq(updata.prevIndex).animate({left:updata.$moveDis},updata.speed)
                    }
                }else if(updata.index==updata.$indexBtn.size()&&updata.prevIndex==0){
                    if(e = undefined || e.target.nodeName == 'A'){
                        updata.$item.eq(updata.index).css({left:-updata.$moveDis}).animate({ left:0},updata.speed);
                        updata.$item.eq(updata.prevIndex).animate({left:updata.$moveDis})
                    }else{
                        updata.$item.eq(updata.index).css({left:updata.$moveDis}).animate({ left:0},updata.speed);
                        updata.$item.eq(updata.prevIndex).animate({left:-updata.$moveDis},updata.speed)
                    }
                }else if(updata.index<updata.prevIndex){
                    updata.$item.eq(updata.index).css({left:-updata.$moveDis}).animate({ left:0},updata.speed);
                    updata.$item.eq(updata.prevIndex).animate({left:updata.$moveDis},updata.speed);
                }else if(updata.index>updata.prevIndex){
                    updata.$item.eq(updata.index).css({left:updata.$moveDis}).animate({ left:0},updata.speed);
                    updata.$item.eq(updata.prevIndex).animate({left:-updata.$moveDis},updata.speed);
                }
            }
            function _leftSeamlessEvent(direction,e){
                updata.index += direction;
                _leftSeamlessChange(e);
                updata.prevIndex = updata.index;
            }
            function _leftSeamlessInite(){
                updata.$item.css({'position':'absolute'});
                updata.$item.eq(0).css({'left':0}).siblings('li').css({left:updata.$moveDis});
                timerOpen(_leftSeamlessChange);
                updata.$indexBtn.on('click',function(e){
                    updata.index = $(this).index();
                    _leftSeamlessChange(e);
                    updata.prevIndex = updata.index;
                });
                updata.$rightBtn.click(function(e){
                    _leftSeamlessEvent(1,e);
                });
                updata.$leftBtn.on('click',function(e){
                    _leftSeamlessEvent(-1,e);
                });
                timerHover(_leftSeamlessChange);
            }
            /************************
             * show切换轮播
             * ************************/
            function _showInite(){
                updata.$item.css({
                    display:'none',
                }).first().css({display:'block'});
                timerOpen(_showing);
                timerHover(_showing);
                updata.$rightBtn.on('click',function(){
                    _showEvent(1);
                    setTimeout(function(){
                        updata.$rightBtn.on('click',function(){
                            _showEvent(1);
                        })
                    },updata.clickDelay);
                });
                updata.$leftBtn.on('click',function(){
                    _showEvent(-1);
                    setTimeout(function(){
                        updata.$leftBtn.on('click',function(){
                            _showEvent(-1);
                        })
                    },updata.clickDelay);
                });
            }
            function _showing(){
                updata.$indexBtn.eq(updata.index).addClass('active').siblings('li').removeClass('active');
                updata.$item.hide().eq(updata.index).show();
            }
            function _showEvent(direction){
                clearIntervitemal(updata.timer);
                updata.$rightBtn.off('click');
                updata.$leftBtn.off('click');
                updata.index += direction;
                if(updata.index > updata.$item.size()-1){
                    updata.index = 0;
                }else if(updata.index < 0){
                    updata.index = updata.$item.size()-1;
                }
                _showing();
                timerOpen(_showing);
            }
            /******************
             * 单体移动轮播_leftSlide   未完成
             * ************/
            function _leftSlide(){
                //增加前后边界项
                if(updata.marginR!=0 && updata.width!=0){
                    updata.$moveDis = updata.width + updata.marginR;
                }else if(updata.marginR!=0 || updata.width!=0){
                    $.error('must marginR && width');
                }
                updata.$moveObj.width(updata.$moveDis*(updata.$item.size()+2));
                var first = updata.$item.eq(0).clone(true);
                var last = updata.$item.last().clone(true);
                updata.$moveObj.prepend(last).append(first);
                updata.$item = $('.slide-hidden ul li');
                updata.$item.css({
                    float:'left',
                    marginRight:updata.marginR,
                });
                updata.$moveObj.css({left:-updata.$moveDis});
                timerOpen(_leftChange);
            }
            function _leftChange(){
                updata.$indexBtn.eq(updata.index).addClass('active').siblings('li').removeClass('active');
                console.log(updata.index)
                if(updata.index < updata.$item.size()-3){
                    updata.$moveObj.animate({
                        left:updata.$moveObj.position().left+updata.$moveDis*(updata.prevIndex-updata.index),
                    });
                }else{
                    updata.$moveObj.css({left:-updata.$moveDis}).animate({})
                }

            }
            _inite();
            return this;//方便链式操作
        }
    })(jQuery);
})

