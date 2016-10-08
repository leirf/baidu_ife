$("#logoInfo").mouseover(function () {
	$("#logoInfo").html("求工作~").css({"padding-top":"13px","color":"red","font-size":"25px"});
});
$("#logoInfo").mouseleave(function () {
	$("#logoInfo").css({"padding-top":"5px","color":"#fff","font-size":"16px"});
	$("#logoInfo").html("Ray<br>前端工程师").css({"padding-top":"5px","color":"#fff","font-size":"16px"});
});
$(".photo>div:first").mouseleave(function () {
	$(".photo>div:first").animate({left:"110%"},"slow");
	$(".photo>div:last").css({left:"-110%"});
	$(".photo>div:last").animate({left:"0"},"slow");
});
$(".photo>div:last").mouseleave(function () {
	$(".photo>div:last").animate({left:"110%"},"slow");
	$(".photo>div:first").css({left:"-110%"});
	$(".photo>div:first").animate({left:"0"},"slow");
});