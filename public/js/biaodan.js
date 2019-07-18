$(".tijiao").click(function(){
    if(!$(".name").val()){
        var html="请您正确填写姓名";
        $(".pp").html(html);
        $(".no").removeClass("hidden");
        $(".bg_ohno").removeClass("hidden");
        $(".queding").removeClass("hidden");
        setTimeout(function(){
            $(".no").css("transform","scale(1,1)");
        },0);
        $(".queding").click(function(){
            $(".no").addClass("hidden");
            $(".bg_ohno").addClass("hidden");
            $(".queding").addClass("hidden");
        })
    }
    if(!$(".phone").val()){
        var html="请您正确填写电话";
        $(".pp").html(html);
        $(".no").removeClass("hidden");
        $(".bg_ohno").removeClass("hidden");
        $(".queding").removeClass("hidden");
        setTimeout(function(){
            $(".no").css("transform","scale(1,1)");
        },0);
        $(".queding").click(function(){
            $(".no").addClass("hidden");
            $(".bg_ohno").addClass("hidden");
            $(".queding").addClass("hidden");
        })
    }
    // if(!$(".select1").attr("checked") && !$(".select2").attr("checked")){
    //     var html="请您选择课程";
    //     $(".pp").html(html);
    //     $(".no").removeClass("hidden");
    //     $(".bg_ohno").removeClass("hidden");
    //     $(".queding").removeClass("hidden");
    //     setTimeout(function(){
    //         $(".no").css("transform","scale(1,1)");
    //     },0);
    //     $(".queding").click(function(){
    //         $(".no").addClass("hidden");
    //         $(".bg_ohno").addClass("hidden");
    //         $(".queding").addClass("hidden");
    //     })
    // }

    if($(".phone").val() && $(".name")){
        $(".ok").removeClass("hidden");
        $(".bg_ohno").removeClass("hidden");
        $(".queding").removeClass("hidden");
        setTimeout(function(){
            $(".ok").css("transform","scale(1,1)");
        },0);
        $(".queding").click(function(){
            $(".ok").addClass("hidden");
            $(".bg_ohno").addClass("hidden");
            $(".queding").addClass("hidden");
        })
    }

})