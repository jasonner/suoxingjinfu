$(function(){
	ProductTypeName();
})
//商品类别
function ProductTypeName(){
	var flog = true;
	$("#ProductTypeName").on("tap",function(event){
		event.preventDefault(); 
		if (flog){
			$(".list_cover").css("display","block");
			flog=false;
		} else{
			$(".list_cover").css("display","none");
			flog = true;
		}
	})
}
