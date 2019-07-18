$(function(){
    $.ajax({
        url:"http://127.0.0.1:8888/teacher",
        type:"get",
        dataType:"json"
    }).then(function(result){
        console.log(result)
        var html="";
        for(var res of result){
            var {tid,pic,title,subtitle,descrip,tag,hidecontent}=res;
            html+=
            `<li>
              <div style="background-image:url(http://127.0.0.1:8888/${pic})"></div>
              <div class="txt">
                <h2>${title}</h2>
                <h3>${subtitle}</h3>
                <p>${descrip}</p>
                <div class="tag">${tag}</div>
              </div>
              <div class="btn_down"><img src="../img/btn_down.png"></div>
              <div class="hide">${hidecontent}</div>
        </li>`;
        // console.log(html)
    }
    $(".teacher").html(html); 
    $(".btn_down").click(function(){
        $(this).parent().siblings("li").children(".hide").slideUp();
        $(this).next().html(hidecontent).slideToggle();
      
    })
    $(".btn").click(function(){
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        $('body,html').animate({
            "scrollTop": 0
        }, 500)
    })
    })

    $("#btn1").click(function(){
        if($(this).html()==1){
            $.ajax({
                url:"http://127.0.0.1:8888/teacher",
                type:"get",
                data:"pno=1&pageSize=10",
                dataType:"json"
            }).then(function(result){
                var html="";
                for(var res of result){
                    var {tid,pic,title,subtitle,descrip,tag,hidecontent}=res;
                    html+=
                    `<li>
                    <div style="background-image:url(http://127.0.0.1:8888/${pic})"></div>
                    <div class="txt">
                        <h2>${title}</h2>
                        <h3>${subtitle}</h3>
                        <p>${descrip}</p>
                        <div class="tag">${tag}</div>
                    </div>
                    <div class="btn_down"><img src="../img/btn_down.png"></div>
                     <div class="hide">${hidecontent}</div>
                </li>`;
                // console.log(html)
            }
            $(".teacher").html(html);
            $(".btn_down").click(function(){
                $(this).parent().siblings("li").children(".hide").slideUp();
                $(this).next().html(hidecontent).slideToggle();
              
            })
            $(".btn").click(function(){
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
                $('body,html').animate({
                    "scrollTop": 0
                }, 500)
            })
            })
        }
    })
    $("#btn2").click(function(){
        console.log($("#btn2"))
        if($(this).html()==2){
            $.ajax({
                url:"http://127.0.0.1:8888/teacher",
                type:"get",
                data:"pno=2&pageSize=10",
                dataType:"json"
            }).then(function(result){
                console.log(result)
                var html="";
                for(var res of result){
                    var {tid,pic,title,subtitle,descrip,tag,hidecontent}=res;
                    html+=
                    `<li>
                    <div style="background-image:url(http://127.0.0.1:8888/${pic})"></div>
                    <div class="txt">
                        <h2>${title}</h2>
                        <h3>${subtitle}</h3>
                        <p>${descrip}</p>
                        <div class="tag">${tag}</div>
                    </div>
                    <div class="btn_down"><img src="../img/btn_down.png"></div>
                    <div class="hide">${hidecontent}</div>
                </li>`;
                // console.log(html)
            }
            $(".teacher").html(html); 
            $(".btn_down").click(function(){
                $(this).parent().siblings("li").children(".hide").slideUp();
                $(this).next().html(hidecontent).slideToggle();
              
            })
            $(".btn").click(function(){
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
                $('body,html').animate({
                    "scrollTop": 0
                }, 500)
            })
            })
        }
    })
    $("#btn3").click(function(){
        if($(this).html()==3){
            $.ajax({
                url:"http://127.0.0.1:8888/teacher",
                type:"get",
                data:"pno=3&pageSize=10",
                dataType:"json"
            }).then(function(result){
                console.log(result)
                var html="";
                for(var res of result){
                    var {tid,pic,title,subtitle,descrip,tag,hidecontent}=res;
                    html+=
                    `<li>
                    <div style="background-image:url(http://127.0.0.1:8888/${pic})"></div>
                    <div class="txt">
                        <h2>${title}</h2>
                        <h3>${subtitle}</h3>
                        <p>${descrip}</p>
                        <div class="tag">${tag}</div>
                    </div>
                    <div class="btn_down"><img src="../img/btn_down.png"></div>
                    <div class="hide">${hidecontent}</div>
                </li>`;
                // console.log(html)
            }
            $(".teacher").html(html); 
            $(".btn_down").click(function(){
                $(this).parent().siblings("li").children(".hide").slideUp();
                $(this).next().html(hidecontent).slideToggle();
              
            })
            $(".btn").click(function(){
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
                $('body,html').animate({
                    "scrollTop": 0
                }, 500)
            })
            })
        }
    })


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
})
$(function(){
    $.ajax({
        url:"fixed.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("fixed");
            $(`<link rel="stylesheet" href="../css/fixed.css">`).appendTo("head")
        }
    })
})
