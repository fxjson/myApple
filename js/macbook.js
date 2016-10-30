/**
 * Created by Administrator on 2016/10/6.
 */
//三个动画盒子的轮播
window.onload = function () {
    var div = document.getElementsByClassName('div');
    var index = 1;
    function showImg(){
        for(var i = 0 ; i < 3 ;i++){
            if(index == i){
                div[index].style.display="block";
            }else{
                div[i].style.display="none";
            }
        }
        if(index == 2){
            index = 0;
        }else{
            index++;
        }
    }

    setInterval(showImg,5000);
};

//这里用jQuery来写

//选择外观 动画停止循环，左侧 和下方的包装内容 显示对应的Mac外观
//银色点击事件
$(document).ready(function () {
    $('#silver').click(function(){
        $(this).css('border', '3px solid #08c');
        $('#gold').css('border', '1px solid #ddd');
        $('#spacegray').css('border', '1px solid #ddd');
        $('#rosegold').css('border', '1px solid #ddd');

    //选择配置的点击事件
    $('.GB256').click(function (){
        $(this).css('border', '3px solid #08c');
        $('.GB512').css('border', '1px solid #ddd');
        //底部购买栏提示信心显示
        $('#buy_deliver').show();

        $('#rmb9288').html($('#price1').html()).show();
        $('#rmb11288').hide();
    }).css({
        cursor: 'pointer'
    });

    $('.GB512').click(function (){
        $(this).css('border', '3px solid #08c');
        $('.GB256').css('border', '1px solid #ddd');
        $('#buy_deliver').show();

        $('#rmb11288').html($('#price2').html()).show();
        $('#rmb9288').hide();
    }).css({
        cursor: 'pointer'
    });

    //隐藏轮播图显示mac
    $('#product_watch').hide();

    //用户选择选颜色展示1(左侧) 颜色依次是 银色 金色 深空灰 玫瑰金
    $('#watch_sliver').show();
    $('#watch_gold').hide();
    $('#watch_spacegray').hide();
    $('#watch_rosegold').hide();

    //用户选择选颜色展示2(下方)
    $('#silverImg').show();
    $('#goldImg').hide();
    $('#spacegrayImg').hide();
    $('#rosegoldImg').hide();

    });

    //金色点击事件
    $('#gold').click(function(){
        $(this).css('border', '3px solid #08c');
        $('#silver').css('border', '1px solid #ddd');
        $('#spacegray').css('border', '1px solid #ddd');
        $('#rosegold').css('border', '1px solid #ddd');


        //选择配置的点击事件
        $('.GB256').click(function (){
            $(this).css('border', '3px solid #08c');
            $('.GB512').css('border', '1px solid #ddd');
            $('#buy_deliver').show();

            $('#rmb9288').html($('#price1').html()).show();
            $('#rmb11288').hide();
        }).css({cursor: 'pointer'});

        $('.GB512').click(function (){
            $(this).css('border', '3px solid #08c');
            $('.GB256').css('border', '1px solid #ddd');
            $('#buy_deliver').show();

            $('#rmb11288').html($('#price2').html()).show();
            $('#rmb9288').hide();
        }).css({cursor: 'pointer'});

        //隐藏轮播图显示mac
        $('#product_watch').hide();

        //用户选择选颜色展示1(左侧) 颜色依次是 银色 金色 深空灰 玫瑰金
        $('#watch_sliver').hide();
        $('#watch_gold').show();
        $('#watch_spacegray').hide();
        $('#watch_rosegold').hide();

        //用户选择选颜色展示2(下方)
        $('#silverImg').hide();
        $('#goldImg').show();
        $('#spacegrayImg').hide();
        $('#rosegoldImg').hide();
    });

    //深空灰点击事件
    $('#spacegray').click(function(){
        $(this).css('border', '3px solid #08c');
        $('#silver').css('border', '1px solid #ddd');
        $('#gold').css('border', '1px solid #ddd');
        $('#rosegold').css('border', '1px solid #ddd');


        //选择配置的点击事件
        $('.GB256').click(function (){
            $(this).css('border', '3px solid #08c');
            $('.GB512').css('border', '1px solid #ddd');
            $('#buy_deliver').show();

            $('#rmb9288').html($('#price1').html()).show();
            $('#rmb11288').hide();
        }).css({
            cursor: 'pointer'
        });

        $('.GB512').click(function (){
            $(this).css('border', '3px solid #08c');
            $('.GB256').css('border', '1px solid #ddd');
            $('#buy_deliver').show();

            $('#rmb11288').html($('#price2').html()).show();
            $('#rmb9288').hide();
        }).css({
            cursor: 'pointer'
        });

        //隐藏轮播图显示mac
        $('#product_watch').hide();

        //用户选择选颜色展示1(左侧) 颜色依次是 银色 金色 深空灰 玫瑰金
        $('#watch_sliver').hide();
        $('#watch_gold').hide();
        $('#watch_spacegray').show();
        $('#watch_rosegold').hide();

        //用户选择选颜色展示2(下方)
        $('#silverImg').hide();
        $('#goldImg').hide();
        $('#spacegrayImg').show();
        $('#rosegoldImg').hide();
    });

    //玫瑰金点击事件
    $('#rosegold').click(function(){
        $(this).css('border', '3px solid #08c');
        $('#silver').css('border', '1px solid #ddd');
        $('#gold').css('border', '1px solid #ddd');
        $('#spacegray').css('border', '1px solid #ddd');


        //选择配置的点击事件
        $('.GB256').click(function (){
            $(this).css('border', '3px solid #08c');
            $('.GB512').css('border', '1px solid #ddd');
            $('#buy_deliver').show();

            $('#rmb9288').html($('#price1').html()).show();
            $('#rmb11288').hide();
        }).css({
            cursor: 'pointer'
        });

        $('.GB512').click(function (){
            $(this).css('border', '3px solid #08c');
            $('.GB256').css('border', '1px solid #ddd');
            $('#buy_deliver').show();

            $('#rmb11288').html($('#price2').html()).show();
            $('#rmb9288').hide();
        }).css({
            cursor: 'pointer'
        });

        //隐藏轮播图显示mac
        $('#product_watch').hide();

        //用户选择选颜色展示1(左侧) 颜色依次是 银色 金色 深空灰 玫瑰金
        $('#watch_sliver').hide();
        $('#watch_gold').hide();
        $('#watch_spacegray').hide();
        $('#watch_rosegold').show();
        //用户选择选颜色展示2(下方)
        $('#silverImg').hide();
        $('#goldImg').hide();
        $('#spacegrayImg').hide();
        $('#rosegoldImg').show();
    });

    <!-- 模态图的js-->
    //打开轮播图界面
    $('a.look').click(function (event) {
        $('#mask').show();
        $('#show').show();
        $('#buy_mac').hide();
        $('#img_wrapper').show();

        if(event && event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }

        document.body.style.overflow = "hidden";
    });

    //关闭轮播图界面
    $('button.close_all').click(function (event) {
        var event = event || window.event;

        var targetId = event.target ? event.target.id : event.srcElement.id;

        if (targetId != "mask"){
            $('#mask').hide();
            $('#show').hide();
        }

        $('#buy_mac').show();
        $('#img_wrapper').hide();

        document.body.style.overflow = "visible";
    });

    //模态图里面的轮播图
    //设置current 用于存储当前图片的下标
    var current = 0;
    $('.box .circle li').mouseenter(function () {
        $('.box .img li').eq($(this).index()).fadeIn("fast").siblings().fadeOut();
        $(this).addClass("current").siblings().removeClass("current");

        current = $(this).index() + 1;
    });

    //点击左箭头切换
    $('#mask .row .left').click(function(){
        if(current <= -5) {
            current = 0;
        } else {
            current--;
        }

        $('.box .img li').eq($('.box ul li').eq(current).index()).fadeIn("fast").siblings().fadeOut();
        //给当前小圆点添加阴影
        $('.box .circle li').eq($('.box .circle li').eq(current).index()).addClass("current").siblings().removeClass("current");

        //防止选中箭头
        window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
    });

    //点击右侧箭头切换
    $('#mask .row .right').click(function(){
        if(current >= 5) {
            current = 0;
        } else {
            current++;
        }

        $('.box .img li').eq($('.box ul li').eq(current).index()).fadeIn("fast").siblings().fadeOut();
        $('.box .circle li').eq($('.box .circle li').eq(current).index()).addClass("current").siblings().removeClass("current");

        window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
    });

    $('#show').mousemove(function () {
        $('#show .row').show();
    }).mouseleave(function () {
        $('#show .row').hide();
    });

    //制作媒体播放器事件
    $('#img_wrp').click(function (e) {
        $('#show').show();
        $('#video_box').hide();
        $('button.close_all').show();
    });

    var time = 0;
    $('#img_video').click(function (e) {
        $('#video_box').show();
        $('#show').hide();
        $('button.close_all').show();
        $('#start_video').hide();

        $('video')[0].play();

        setInterval(function () {
            time = video.currentTime;

            //判断视频播放结束
            if($('video')[0].duration == $('video')[0].currentTime) {
                $('#start_video').show();
            }
        },1000);

    });
    $('#start_video').click(function (e) {
        $(this).hide();

        $('video')[0].play();
    });
});
