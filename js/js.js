$(function(){
	$(".menu_ul li").each(function(){
		$(this).mouseenter(function(){
			$(this).find("dl:first").stop(true,true).slideDown();
			
			
		});
		$(this).mouseleave(function(){
			$(this).find("dl:first").slideUp();
		});
	});
	
	/* 主页banner条 */
	$(".banner_list").mouseenter(function(){
		$(".banner_left,.banner_right").show();
		window.clearInterval(scrollDo);
	});
	$(".banner_list").mouseleave(function(){
		$(".banner_left,.banner_right").hide();
		scrollDo = window.setInterval(function(){
			$(".banner_right").click();
		},3000);
	});
	
	$(".banner_right").click(function(){
		
		var nowpos,oldpos,lastpos;
		lastpos = $(".banner_ul li:last").index();
		oldpos = $(".now_pos").index();
		nowpos=oldpos==lastpos?0:oldpos+1;
		
		$(".banner_ul li").eq(nowpos).addClass("now_pos").siblings(".now_pos").removeClass();
		$(".banner_ul li").eq(nowpos).stop().fadeIn(300);
		$(".banner_ul li").eq(oldpos).stop().fadeOut(300);
	});
	
	$(".banner_left").click(function(){
		
		var nowpos,oldpos,lastpos;
		lastpos = $(".banner_ul li:last").index();
		oldpos = $(".now_pos").index();
		nowpos=oldpos==0?lastpos:oldpos-1;
		
		$(".banner_ul li").eq(nowpos).addClass("now_pos").siblings(".now_pos").removeClass();
		$(".banner_ul li").eq(nowpos).stop().fadeIn(300);
		$(".banner_ul li").eq(oldpos).stop().fadeOut(300);
	});
	
	
	var scrollDo = window.setInterval(function(){
		$(".banner_right").click();
	},3000);
	
	/* 信艺动态 */
	var nls = $(".nlist");

    $(".min").click(function(){
        var nowpos = $(this).parent().index();//当前点击的min对应的父节点位置（从0开始计算）
        var old = $(".h100").removeClass("h100");//之前所在的位置（刚过h100查找，并移除css样式h100）
        $(".chide").removeClass("chide");//查找chide所在的标签，并移除chide样式
        var t = nls.eq(nowpos).addClass("h100");//给现在的位置添加h100样式
        $(".min:lt(" + (nowpos+1) + ")").addClass("chide");//:lt 选择器选取带有小于指定 index 值的元素。 index 值从 0 开始。
        if (nowpos == 4) {
            $(".new_right").css("height","305px");
        } else {
            $(".new_right").css("height", "295px");
        }
        $(".new_right").hide();
        var content = $(this).attr("model");
        $("#" + content).show();
    });
    
    $(".l_box_menu").click(function(){
    	if($(this).hasClass("nowcheck")){
			return;
		}
    	
    	var nowpos = $(this).index();
    	var oldpos = $(".nowcheck").index();
    	$(this).addClass("nowcheck").siblings(".nowcheck").removeClass("nowcheck");
    	
    	if(nowpos == 0){
    		$(".links_box div[id='part1']").show();
    		$(".links_box div[id='part2']").hide();
    	}
    	else{
    		$(".links_box div[id='part2']").show();
    		$(".links_box div[id='part1']").hide();
    	}
    });
    
    $(".theTop").click(function(){
		$('body,html').animate({scrollTop:0},300,function(){
			$(".theTop").fadeOut();
		});
	});
	
	var winH = parseInt($(window).height());
	$(window).scroll(function(){
		var scrollH = $(this).scrollTop();
		if(scrollH >= winH){
			$(".theTop").fadeIn();
		}
		else{
			$(".theTop").fadeOut();
		}
	});
	
	$(".o_main_menu_ul li").click(function(){
		if($(this).hasClass("bluebg")){
			return;
		};
		
		var oldpos,nowpos;
		nowpos = $(this).index();
		oldpos = $(".bluebg").index();
		$(".o_main_menu_ul li").eq(nowpos).addClass("bluebg");
		$(".o_main_menu_ul li").eq(nowpos).find("span:last").removeClass();
		$(".o_main_menu_ul li").eq(oldpos).find("span:last").addClass("english");
		$(".o_main_menu_ul li").eq(oldpos).removeClass();
	});
});
