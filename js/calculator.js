$(function(){
	CalculateProfit();
})
//计算盈利
function  CalculateProfit(){
	$(".jisuan").on("tap",function(){
		var txt1 = document.getElementById("tx1");
		var txt2 = document.getElementById("tx2");
		var txt3 = document.getElementById("tx3");
		var txt4 = document.getElementById("tx4");
		if(txt1.value==""||txt1.value==null){
			$("#tx1").attr("placeholder","请输入您的投资金额");
		}else if(txt3.value==""||txt3.value==null){
				$("#tx3").attr("placeholder","请输入您的投资天数");
				//console.log(txt1.value)
			}
		else{
			txt4.value = ((txt1.value*0.2*txt3.value)/365).toFixed(2);
		}
		
	})
}
