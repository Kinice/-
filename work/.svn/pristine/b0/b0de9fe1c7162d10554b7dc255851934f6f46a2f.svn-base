$(function(){
	$.ajax({
		url: '/work/src/getName.php',
		type: 'GET',
		dataType: 'html',
		success:function(data){
			$('.username').html(data);
		},
		error:function(jqXHR){
			console.log(jqXHR.status);
		}
	});
	$.getJSON('/work/src/getMyContents.php', function(data,status) {
		if(status == 'success'){
			var jsonData = eval(data);
			for(var i in jsonData){
				$('.g-inner').append('<div class="talk-box"><div class="talk-left"><img src="images/avatar2.jpg" class="avatar"><span class="name">'+jsonData[i].username+'</span></div><div class="talk-main"><div class="content">'+jsonData[i].content+'</div><div class="pic"></div><div class="func"><span class="pubtime">'+jsonData[i].pubtime+'</span><span class="iconfont goods">&#xe60e; <span class="nums">'+jsonData[i].good+'</span></span></div><div class="comment-box"></div></div></div>');
			}
		}else{
			alert('数据加载失败');
		}
	});
});