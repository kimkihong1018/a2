$(function () {
    //메뉴
    $(".sub , .sub_bg").hide();
    $(".main > li , .sub_bg").hover(function () {
        $(".sub , .sub_bg").stop().slideDown();
    }, function () {
        $(".sub , .sub_bg").stop().slideUp();
    }) //hover


    setInterval(function () {
        $(".left_move").animate({left : "-1200px" }, 500, function(){
            $(".left_move").append($(".left_move li").first());
            $(".left_move").css({left : "0"})
        })
    }, 2500)


    // var n = 0; //0 1 2

    // setInterval(function(){
    //     if(n == 2){
    //         n = 0;
    //     }else{
    //         n++;
    //     }
    //     console.log(n);

    //     $(".left_move").animate({left : n * (-1200) + "px" }, 500)
    // }, 3000)

    $(".p_click").click(function () {
        $(".popup , .modal").show();
    })

    $(".close").click(function () {
        $(".popup , .modal").hide();
    })

})