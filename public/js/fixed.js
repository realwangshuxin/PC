$(()=>{
    $(".fix2").click(function(){
        // $(".ewm").removeClass("hide")
        $(".ewm").fadeIn();
    })
    $(".x").click(function(){
        $(".ewm").fadeOut();
    })
    $(".fix3").click(function(){
        // $(".ewm").removeClass("hide")
        $(".tel").fadeIn();
        $(".ewm").fadeOut();
    })
    $(".xx").click(function(){
        $(".tel").fadeOut();
    })
    $(".fix4").click(function(){
        var scrollTop = $(window).scrollTop();
        $('body,html').animate({
            "scrollTop": 0
        }, 300)
    })
})