$(function(){
	care_about();
});	
//联系客服
function care_about(){
	$(".icon-cust").on("tap",function(){
		alert(1)
		location.href = "html/helpCenter.html";
	})
	$("#goshop").on("tap",function(){
		location.href = "html/listDetail.html";
	})
	var rowHeight=0; //每行的高度;
	var $side = $(".marquee li").length;
	function change(){
		$(".marquee").css("margin-top",rowHeight+"rem");
		//console.log(1)
	}
	var timer = setInterval(function(){
		rowHeight+=-0.64;
		if(rowHeight<=-0.6*$side){
			rowHeight=0;
		}
		change();
	},3000)
}
