$(function(){
	popularize();
	follow_Wechat();
	calculator();
	InformationCenter();
	helpCenter();
})
//推广有奖
function popularize(){
	$("#popularize").on("tap",function(){
		window.location.href="InviteFriends.html";
	})
}
//关注微信
function follow_Wechat(){
	$("#get_wechat").on("tap",function(){
		window.location.href="followWechat.html";
	})
}
//计算器
function calculator(){
	$("#calculator").on("tap",function(){
		window.location.href="calculator.html";
	})
}
//资讯
function InformationCenter(){
	$("#InformationCenter").on("tap",function(){
		window.location.href="informationCenter.html"
	})
}
//帮助中心
function helpCenter(){
	$("#helpCenter").on("tap",function(){
		window.location.href="helpCenter.html"
	})
}
