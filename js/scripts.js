$(document).ready(function() {

	$("a[href^='#']").click(function(){

		var targer = $(this).attr("href");
		var target_offset = $(targer).offset().top;

		$("html, body").animate({scrollTop: target_offset+"px"});

		setTimeout(function() {
			$(".js-order_button").addClass("button_animate");
		}, 600);

		setTimeout(function() {
			$(".js-order_button").removeClass("button_animate");
		}, 2400);

		return false;

	});

});

function showHidePassword(target) {
	let input = document.getElementById("password-input");
	if (input.getAttribute("type") == "password") {
		target.classList.add("view");
		input.setAttribute("type", "text");
	} else {
		target.classList.remove("view");
		input.setAttribute("type", "password");
	}
	return false;
}