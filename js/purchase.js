$(function(){
	$("#rightGo").on("tap",function(){
		location.href = "AddBankCard.html";
	})
	function changeCheckbox() {
		//alert(1)
    var mylabel = document.getElementById('formyCheckBox');
    if (mylabel.innerHTML == "√")
        mylabel.innerHTML = "";
    else
        mylabel.innerHTML = "√";
	 }
	cancel()
})
function cancel(){
	$("#cancel").on("tap",function(){
		$(".cover").css("display","none")
	})
}
