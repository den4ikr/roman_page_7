$(document).ready(function(){
	$(".header__burger").click(function(event){
		$(".header_list").toggleClass("active");
		$(".main__header").toggleClass("active");
		$("body").toggleClass("lock");
	})
})
