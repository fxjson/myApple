/**
 * Created by Administrator on 2016/10/7.
 */

window.onload = function () {
    <!-- 制作 '支持' 导航栏的固定定位-->
    var supportNav = document.getElementById('support_nav');
    var nav = document.getElementById('nav');

    window.onscroll = function () {
        var scrollTop = document.body.scrollTop;

        if (scrollTop > supportNav.offsetTop) {
            nav.style.borderBottomStyle = 'none';
            //使用cssText方法时, background-color不能写成backgroundColor, 值前面加';'是为了兼容IE6
            supportNav.style.cssText += " ;position:fixed;top:0;background-color:white;border-bottom:1px solid #bababd;";
        } else {
            supportNav.style.cssText += ";position: static;background-color: transparent;border-bottom:none;";
            nav.style.borderBottom = '1px solid #bababd';
        }
    };

    <!-- 搜索支持JS部分-->
    var searchContent = document.getElementById('search_cont');
    var txt = document.getElementById('txt');
    var close = document.getElementById('close');
    var searchRemind = document.getElementById('search_remind');
    var searchShow = document.getElementById('search_show');

    searchContent.onclick = function (evevt) {
        searchRemind.style.display = 'block';
        close.style.display = 'block';
        searchShow.style.display = '';

        //隐藏滚动条
        document.body.style.overflow = 'hidden';

        //浏览器兼容判断
        var event = event || window.event;
        if(event && event.stopPropagation){// 一般浏览器
            event.stopPropagation();
        }else { // ie 678
            event.cancelBubble = true;
        }
    };

    //点击空白隐藏搜索提示信息, 还没有做好,
    document.onclick = function (event) {
        var event = event || window.event;
        //targetId 就是你点击的那个元素, 得到它的id
        var targetId = event.target ? event.target.id : event.srcElement.id;

        if (targetId != 'search_remind' || targetId != 'search_show') {
            searchRemind.style.display = '';
            searchShow.style.display = '';
            close.style.display = '';

            document.body.style.overflow = 'visible';
        }
    };

    //判断用户是否有输入
    txt.oninput = function () {
        if (txt.value != '') {
            searchRemind.style.display = '';
            searchShow.style.display = 'block';

        } else if (txt.value == '') {
            searchRemind.style.display = 'block';
            searchShow.style.display = '';
        }
    };

    close.onclick = function () {
        searchRemind.style.display = '';
        searchShow.style.display = '';
        close.style.display = '';

        if (txt.value != '') {
            txt.value = '';
        }
    };

    //鼠标在 li 上方滑动时添加下划线
    var liTag = searchRemind.getElementsByTagName('li');
    for (var i = 0;i < liTag.length;i++) {
        liTag[i].index = i;
        liTag[i].onmousemove = function () {
            for (var j = 0;j < liTag.length;j++) {
                liTag[j].removeAttribute('style');
            }

            liTag[this.index].setAttribute('style','text-decoration: underline');
        };
    }

    <!-- 制作展开产品展示JS-->
    var showTaggle = document.getElementById('show_toggle');
    var aTag = showTaggle.children[0];
    var productList = document.getElementById('product_list');

    showTaggle.onclick = function () {
        //利用 textContent 获取节点文本内容
        var spanText = aTag.children[0].textContent;

        if (spanText == '+') {
            aTag.innerHTML = '收起产品列表&nbsp;<span>×</span>';
            productList.style.display = 'block';
        } else if (spanText == '×') {
            aTag.innerHTML = '展开产品列表&nbsp;<span>+</span>';
            productList.style.display = 'none';
        }
    };

    <!--制作返回顶部JS-->
    var goTop = document.getElementById('go_top');

    var leader = 0,target = 0;
    var timer = null;
    window.addEventListener('scroll', function () {
        leader = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

        if (leader > 0){
            goTop.style.display = "block";
        }else{
            goTop.style.display = "none";
        }
    });

    goTop.onclick = function (event) {
        clearInterval(timer);
        timer = setInterval(function () {
            leader = leader + (target - leader) / 10;
            window.scrollTo(0, leader);
            if (parseInt(leader) == 0){
                window.scroll(0, 0);

                clearInterval(timer);
            }
        }, 20);
    }

};