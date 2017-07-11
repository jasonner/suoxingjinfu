$(function(){
	var $uName = $("#userName");
	var $psw = $("#userPassword");
	var $pswS = $("#userPasswordSure");
	var flog = null;
	$uName.on("blur",function(){
		var reg = /^1\d{10}$/;
		if($(this).val() ==""){
			$(this).attr("placeholder","请输入手机号！");
		}else if(!reg.test($(this).val())){
			$(this).val("");
			$(this).attr("placeholder","手机号格式非法！");
		}
	});
	
	$psw.on("blur",function(){
		var reg = /^[a-z0-9_-]{6,18}$/;
		if($(this).val() == ""){
			$(this).attr("placeholder","密码不能为空！");
		}else if(!reg.test($(this).val())){
			$(this).val("");
			$(this).attr("placeholder","密码格式非法！");
		}
	});
	$("#_register").on("tap",function(){
		_register();
	})
	function _register(){
		if($uName.val() !== "" && $psw.val() !== "" && $pswS.val() !==""){
			 localStorage.setItem("_user", $uName.val());
			 localStorage.setItem("_psw", $psw.val());
			var _user = getUser($uName.val(),$psw.val());
			toRegister(_user);
		}
	}


	function getUser(_name,_psw){
		var user = {
			userID : _name,
			password : _psw
		};
		return user;
	}

	function toRegister(_user){
		$.ajax({
			type : "post",
			url : "http://datainfo.duapp.com/shopdata/userinfo.php",
			data : {status : "register",userID : _user.userID,password : _user.password},
			success : function(data){
				if(data == 0){
					alert("用户名重名!");
				}
					
				if(data == 1){
					$(".registerBtn").on("touchend",function(){
						alert("注册成功!");
						location.href = "../index.html";
					})
					
				}
				if(data == 2)
					alert("浏览器异常!请刷新页面重试！");
			}
		});
	}
	$("#getAuthCode").on("touchend",function(){
		window.clearInterval(InterValObj);
		var InterValObj; //timer变量，控制时间
		var count = 60; //间隔函数，1秒执行
		var curCount;//当前剩余秒数
		var code = ""; //验证码
		var codeLength = 6;//验证码长度
		sendMessage();
		var InterValObj = window.setInterval(SetRemainTime, 1000);
		function sendMessage() {
			window.clearInterval(InterValObj);
			curCount = count;
			var dealType; //验证方式
			var uid=$("#userName").val();//用户uid
			
		//产生验证码
			for (var i = 0; i < codeLength; i++) {
				code += parseInt(Math.random() * 9).toString();
			}
		//设置button效果，开始计时
			$("#getAuthCode").attr("disabled", "true");
			$("#getAuthCode").html( + curCount + "秒再获取");
			//启动计时器，1秒执行一次
		//向后台发送处理数据
			/*$.ajax({
				type: "POST", //用POST方式传输
				dataType: "text", //数据格式:JSON
				url: 'Login.ashx', //目标地址
				data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
				error: function (XMLHttpRequest, textStatus, errorThrown) { },
				success: function (msg){ }
			});*/
		}
	//timer处理函数
	function SetRemainTime() {
		if (curCount == 0) {                
			window.clearInterval(InterValObj);//停止计时器
			$("#getAuthCode").removeAttr("disabled");//启用按钮
			$("#getAuthCode").html("重新发送");
			code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
		}
		else {
			curCount--;
			$("#getAuthCode").html( + curCount + "秒再获取");
		}
	}
	})
	
  show()
	
})
	//查看密码
		/*$("").click(function(){
			if($(this).attr("data-show")==1){//明文
				$(this).attr("data-show","2");
				$(this).parent("p").children(".mima_dd").hide();
				$(this).parent("p").children(".mima_wz").show();
				$(this).parent("p").children(".mima_wz").val($(this).parent("p").children(".mima_dd").val()); 
				return;
				}
			if($(this).attr("data-show")==2){//密文
				$(this).attr("data-show","1");
				$(this).children("i").html("&#xe624;");
				$(this).parent("li").children(".mima_dd").show();
				$(this).parent("li").children(".mima_wz").hide();
				$(this).parent("li").children(".mima_dd").val($(this).parent("li").children(".mima_wz").val()); 
				return;
			} 
		});*/
 function show(){
 $(".eyes_box").on("click",function(){
 	//console.log(1)
 	if($(this).attr("data-show")==1){//明文
		$(this).attr("data-show","2");
		$(this).parent("p").children(".mima_dd").hide();
		$(this).parent("p").children(".mima_wz").show();
		$(this).parent("p").children(".mima_wz").val($(this).parent("p").children(".mima_dd").val()); 
		$("#yanjing").addClass("icon-yanjing1").removeClass("icon-yanjing");
		return;
	}
 	if($(this).attr("data-show")==2){//密文
		$(this).attr("data-show","1");
		$(this).parent("p").children(".mima_dd").show();
		$(this).parent("p").children(".mima_wz").hide();
		$(this).parent("p").children(".mima_dd").val($(this).parent("p").children(".mima_wz").val()); 
		$("#yanjing").addClass("icon-yanjing").removeClass("icon-yanjing1");
		return;
	} 
 })
 
}
