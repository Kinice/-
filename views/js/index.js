$(function(){   //页面加载完成后执行
	var $logo = $('.logo');
	var $login = $('.login-box');
	setBg();
	setInterval(setBg,10000);
	boxIn($logo);
	boxIn($login);
});
function boxIn($box){	//首页登陆框淡入方法
	var top = $box.css('top').slice(0, 3)-(-45);
	$box.animate({
		top: top,
		opacity: 1
	}, 1200);
}
function setBg(){
	var img = $('.bg-img img');
	img.css('display','none');
	var rand = Math.floor(Math.random()*10 + 1);
	img.attr('src','./images/bg'+rand+'.jpg');
	img.fadeIn(1400);
}