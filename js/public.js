$(function(){
	//返回上一页
	$(".back").on("tap",function(){
		history.back();
	});
	//检验用户名
	$("#userName").on("blur",function(){
		var reg = /^1\d{10}$/;
		if($(this).val() == ""){
			$(this).attr("placeholder","用户名不能为空！");
		}else if(!reg.test($(this).val())){
			$(this).val("");
			$(this).attr("placeholder","用户名格式非法！");
		}
	});
})
