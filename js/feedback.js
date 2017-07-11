$(function(){
	var str = "请输入反馈，我们将为您不断改进";
	$("#feedback").on("tap",function(){
		if(this.value==str){
			$(this).val(null)
		}
	})
})
