$(document).ready(function(){
	$("#arrow").click(function(){
		var target = $(this).attr("href");
		$("body").animate({scrollTop: $(target).offset().top}, 1000);
		return false;
	})
});