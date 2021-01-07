$(document).ready(function(){
 
$(window).scroll(function(){
	$('nav').toggleClass('scrolled',$(this).scrollTop() > 1);
});



$(".navbar").on("show.bs.collapse", function(e) {
  console.log("open");
	$(".navbar-default").css("background-color", "red");
});

$(".navbar").on("hide.bs.collapse", function(e) {
  console.log("close");
	$(".navbar-default").css("background-color", "rgb(231,231,231)");
});
	
});
	