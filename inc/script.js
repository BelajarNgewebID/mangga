$("document").ready(function() {
	$("#tblTtg").click(function() {
		$.smoothScroll({ scrollTarget: "#keTtg", });
	});
	$("#tblLbh").click(function() {
		$.smoothScroll({ scrollTarget: "#keLbh", });
	});
	$("#pos,#bantu,#tblOrder").click(function() {
		$(".bgOrder,#boxOrder").fadeIn(380);
	});
	$(".bgOrder,.xBox").click(function() {
		$(".bgOrder,#boxOrder").fadeOut(400);
	});
	$(".tblMenuMob").click(function() {
		$(".navigasi").slideToggle(350);
	});
});
