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
	$(document).on('click','span.com-icon',function() {
	    var $com = $(this).parent().next();
	    var pubtime = $(this).siblings('.pubtime')[0].innerText;
	    var loaded = $(this).children('input[type="hidden"]')[0].value;
	    if($com.css('display')=='none'){
			$com.slideDown();
			if(loaded == '0'){
				$.post('/work/src/getComments.php',{
			    	pubtime: pubtime
			    },function(data,status){
					if(status == 'success'){
				   		var jsonData = eval(data);
				   		for(var j in jsonData){
				   			$com.prepend('<div class="comment-li"><div class="comment"><span class="com-name">'+jsonData[j].username+'：</span>'+jsonData[j].content+'</div><div class="comment-time">'+jsonData[j].comtime+'</div></div>');
				   		}
				   		$(this).children('input[type="hidden"]')[0].value = '1';
				   	}else{
				   		alert('数据加载失败');
				   	}
			    }.bind(this));
			}
		}else{
			$com.slideUp();
		}
	});
	$.getJSON('/work/src/getAllContents.php', function(data,status) {
		if(status == 'success'){
			var jsonData = eval(data);
			for(var i in jsonData){
				$('.g-inner').append('<div class="talk-box"><div class="talk-left"><img src="images/avatar2.jpg" class="avatar"><span class="name">'+jsonData[i].username+'</span></div><div class="talk-main"><div class="content">'+jsonData[i].content+'</div><div class="pic"></div><div class="func"><span class="pubtime">'+jsonData[i].pubtime+'</span><span class="iconfont com-icon">&#xe610; 评论<input type="hidden" value="0"/></span><span class="iconfont goods">&#xe60e; <span class="nums">'+jsonData[i].good+'</span></span></div><div class="comment-box"><div class="com-form clearfix"><div class="input"><textarea name="content"></textarea></div><input type="button" value="评论"><input type="hidden" value="'+jsonData[i].pubtime+'"></div></div></div></div>');
			}
		}else{
			alert('数据加载失败');
		}
	});

	$(document).on('click','input[type="button"]',function(){
		var cont = $(this).parent().find('textarea')[0].value;
		if(cont!='' && $(this)[0].value == '发布'){
			$.post('/work/src/postContent.php',{
				content: cont
			},function(data,status){
				if(status == 'success'){
					var jsonText = JSON.parse(data);
					$('.talk-box').eq(1).after('<div class="talk-box" style="display:none;"><div class="talk-left"><img src="images/avatar2.jpg" class="avatar"><span class="name">'+jsonText.username+'</span></div><div class="talk-main"><div class="content">'+jsonText.content+'</div><div class="pic"></div><div class="func"><span class="pubtime">'+jsonText.pubtime+'</span><span class="iconfont com-icon">&#xe610; 评论<input type="hidden" value="0"/></span><span class="iconfont goods">&#xe60e; <span class="nums">'+jsonText.good+'</span></span></div><div class="comment-box"><div class="com-form clearfix"><div class="input"><textarea name="content"></textarea></div><input type="button" value="评论"><input type="hidden" value="'+jsonText.pubtime+'"></div></div></div></div>');
					$('.talk-box').eq(2).slideDown('slow');
					$(this).parent().find('textarea')[0].value = '';
				}else{
					alert("发布失败...");
				}
			}.bind(this));
		}else if(cont!='' && $(this)[0].value == '评论'){
			var pubtime = $(this).siblings('input[type="hidden"]')[0].value;
			$.post('/work/src/postComment.php',{
				comment: cont,
				pubtime: pubtime
			},function(data,status){
				var jsonCom = JSON.parse(data);
				$(this).parents('.comment-box').prepend('<div class="comment-li"><div class="comment"><span class="com-name">'+jsonCom.username+'：</span>'+jsonCom.content+'</div><div class="comment-time">'+jsonCom.comtime+'</div></div>');
				$(this).parent().find('textarea')[0].value = '';
			}.bind(this));
		}else{
			alert('你怎么能没有心情呢 Σ( ° △ °|||)︴');
		}
	});
	$(document).on('click','span.goods',function(){
		var time = $(this).siblings('.pubtime')[0].innerHTML;
		var nums = $(this).children('.nums').html();
		nums = parseInt(nums) + 1;
		if(time!=''){
			$.post('/work/src/good.php',{
				pubtime: time
			},function(data,status){
				if(status == 'success'){
					if(data == 'suc'){
						$(this).children('.nums').html(nums);
						$(this).children('.nums').removeClass('nums');
					}else{
						alert('点赞失败1');
					}
				}else{
					alert('点赞失败2');
				}
			}.bind(this));
		}
	})
});