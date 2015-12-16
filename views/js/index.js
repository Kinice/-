var wordMap = {
    0 : '白的雪<br/>遮不住红色的叶',
    1 : '困难<br/>只是必须要翻越的一道而已',
    2 : '面朝大海<br/>另一面是否春暖花开呢',
    3 : '诺大的城市<br/>总有个自己的巢',
    4 : '当夜幕降临<br/>又是新一个黎明的开始',
    5 : '苍穹之下<br/>回头重新拥抱自然',
    6 : '路走多了<br/>还是希望像飞鸟一样'
};
window.onload=function(){   //页面加载完成后执行
    $('script').remove('.loading');
    $('div').remove('.loading');
	var $logo = $('.logo');
	var $login = $('.login-box');
    var img = $('.bg-img img');
    var size = img.size();
    var index = Math.floor(Math.random()*size);
    function autoShow(){  //自动变换函数
        index += 1;
        if(index <= size - 1){
            change(img,index);
        }else{
            index = 0;
            change(img,index);
        }
    }
    setBg(img,index);
	setInterval(autoShow,11000);  //自动变换
	boxIn($logo);
	boxIn($login);
};
function boxIn($box){	//首页登陆框淡入方法
	var top = $box.css('top').slice(0, 3)-(-45);
	$box.animate({
		top: top,
		opacity: 1
	}, 1200);
}
function setBg(img,rand){  //初始化背景及文字
    img.eq(rand).css('opacity','0.8');
    img.eq(rand).siblings().css('opacity','0');
    $('.word').append(wordMap[rand]);
    $('.word').animate({
        opacity:1,
        left:50
    },3000);
}
function change(img,index){  //变换效果
    $('.word').css({
        opacity:0,
        left:10
    });
    $('.word').empty();
    img.eq(index).siblings().animate({
        opacity:0
    },1600);
    img.eq(index).animate({
        opacity:0.8
    },1600);
    $('.word').append(wordMap[index]);
    console.log(index);
    $('.word').animate({
        opacity:1,
        left:50
    },3000);
}
$('.log-tab li').bind('click',function(){
    var tab = this;
    var qtab = $(this);
    qtab.siblings().removeClass('selected');
    qtab.addClass('selected');
    if(tab.innerHTML=='登录'){
        $('.reg').css('display','none');
        $('.log').fadeIn();
    }else{
        $('.log').css('display','none');
        $('.reg').fadeIn();
    }
});