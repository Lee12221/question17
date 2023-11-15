$(".gnb li").hover(
    function(){
        $(this).find(".sub").stop().slideDown(600);
    },
    function(){
        $(this).find(".sub").stop().slideUp(300);
    }
);
$(".open").click(
    function(){
        $("#popup").fadeIn(600);
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut(300);
    }
);