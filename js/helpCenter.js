$(function(){
	call();
	login();
	pay_Withdraw();
	PlatformAndWelfare();
	invest();
})
//拨打客服电话
function call(){
	$(".customerService_dl2").on("tap",function(){
		$(".cover").css("display","block");
	})
	$("#cancel").on("tap",function(){
		$(".cover").css("display","none");
	})
}
//注册与登录
function login(){
	$("#login").on("tap",function(){
		window.location.href="RegisterAndLoginDetails.html"
	})
}
//充值与提现
function pay_Withdraw(){
	$("#pay_Withdraw").on("tap",function(){
		window.location.href="RegisterAndLoginDetails.html"
	})
}
//投资与回款
function invest(){
	$("#invest").on("tap",function(){
		window.location.href="RegisterAndLoginDetails.html"
	})
}
//平台与福利
function PlatformAndWelfare(){
	$("#PlatformAndWelfare").on("tap",function(){
		window.location.href="RegisterAndLoginDetails.html"
	})
}






















