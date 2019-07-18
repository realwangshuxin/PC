$(()=>{
    var code=1;
    $.ajax({
        url:"http://127.0.0.1:8888/information",
        type:"get",
        dataType:"json"
    }).then(result=>{
        console.log(result);
        var html="";
        for(var res of result){
            var {ndate,nid,nsubtitle,ntag,ntitle,pic}=res;
            console.log(typeof(ndate))
            html+=`
            <li>
                <img src="http://127.0.0.1:8888/${pic}" alt="" class="li_img">
                <h2>${ntitle}</h2>
                <p class="li_p">${nsubtitle}</p>
                <p class="li_tag">${ntag}</p>
                <p class="li_date">${ndate.slice(0,10)}</p>
            </li>
            `;
        }
        $(".liebiao").html(html);
        // $(".first").addClass("hide");
    })

    
    $("#btn1").click(function(){
        if($(this).html()==1){
            $.ajax({
                url:"http://127.0.0.1:8888/information",
                type:"get",
                data:"pno=1&pageSize=20",
                dataType:"json"
            }).then(function(result){
                var html="";
        for(var res of result){
            var {ndate,nid,nsubtitle,ntag,ntitle,pic}=res;
            html+=`
            <li>
                <img src="http://127.0.0.1:8888/${pic}" alt="" class="li_img">
                <h2>${ntitle}</h2>
                <p class="li_p">${nsubtitle}</p>
                <p class="li_tag">${ntag}</p>
                <p class="li_date">${ndate.slice(0,10)}</p>
            </li>
            `;
        }
        $(".liebiao").html(html);
        var scrollTop = $(window).scrollTop();
                $('body,html').animate({
                    "scrollTop": 0
                }, 300)
            })
            code=1;
            console.log(code)
            $(this).siblings(".first").addClass("hide");
            $(this).siblings(".next").removeClass("hide");
        }
    })

    $("#btn2").click(function(){
        if($(this).html()==2){
            $.ajax({
                url:"http://127.0.0.1:8888/information",
                type:"get",
                data:"pno=2&pageSize=20",
                dataType:"json"
            }).then(function(result){
                var html="";
        for(var res of result){
            var {ndate,nid,nsubtitle,ntag,ntitle,pic}=res;
            html+=`
            <li>
                <img src="http://127.0.0.1:8888/${pic}" alt="" class="li_img">
                <h2>${ntitle}</h2>
                <p class="li_p">${nsubtitle}</p>
                <p class="li_tag">${ntag}</p>
                <p class="li_date">${ndate.slice(0,10)}</p>
            </li>
            `;
        }
        $(".liebiao").html(html);
            })
            // $(this).siblings(".first").removeClass("hide");
            var scrollTop = $(window).scrollTop();
            $('body,html').animate({
                "scrollTop": 0
            }, 300)
            code=2
        }
    })

    $("#btn3").click(function(){
        if($(this).html()==3){
            $.ajax({
                url:"http://127.0.0.1:8888/information",
                type:"get",
                data:"pno=3&pageSize=20",
                dataType:"json"
            }).then(function(result){
                var html="";
        for(var res of result){
            var {ndate,nid,nsubtitle,ntag,ntitle,pic}=res;
            html+=`
            <li>
                <img src="http://127.0.0.1:8888/${pic}" alt="" class="li_img">
                <h2>${ntitle}</h2>
                <p class="li_p">${nsubtitle}</p>
                <p class="li_tag">${ntag}</p>
                <p class="li_date">${ndate.slice(0,10)}</p>
            </li>
            `;
        }
        $(".liebiao").html(html);
            })
        var scrollTop = $(window).scrollTop();
        $('body,html').animate({
            "scrollTop": 0
        }, 300)
        code=3;
        console.log(code)
        $(this).siblings(".next").addClass("hide");
        $(this).siblings(".first").removeClass("hide");
        }
    })

    $("#btn").click(function(){
        if(code==1){
            code=3
            // $(".first").addClass("hide");
        }
        code--;
        $.ajax({
            url:"http://127.0.0.1:8888/information",
            type:"get",
            data:`pno=${code}&pageSize=20`,
            dataType:"json"
        }).then(function(result){
            var html="";
    for(var res of result){
        var {ndate,nid,nsubtitle,ntag,ntitle,pic}=res;
        html+=`
        <li>
            <img src="http://127.0.0.1:8888/${pic}" alt="" class="li_img">
            <h2>${ntitle}</h2>
            <p class="li_p">${nsubtitle}</p>
            <p class="li_tag">${ntag}</p>
            <p class="li_date">${ndate.slice(0,10)}</p>
        </li>
        `;
    }
    $(".liebiao").html(html);
        })
        var scrollTop = $(window).scrollTop();
        $('body,html').animate({
            "scrollTop": 0
        }, 300)
    })

    $("#btn4").click(function(){
        if(code==3){
            code=1
            // $(".next").removeClass("hide");
        }
        code++;
        $.ajax({
            url:"http://127.0.0.1:8888/information",
            type:"get",
            data:`pno=${code}&pageSize=20`,
            dataType:"json"
        }).then(function(result){
            var html="";
            for(var res of result){
            var {ndate,nid,nsubtitle,ntag,ntitle,pic}=res;
            html+=`
            <li>
                <img src="http://127.0.0.1:8888/${pic}" alt="" class="li_img">
                <h2>${ntitle}</h2>
                <p class="li_p">${nsubtitle}</p>
                <p class="li_tag">${ntag}</p>
                <p class="li_date">${ndate.slice(0,10)}</p>
            </li>
            `;
            }
            $(".liebiao").html(html);
        })
        var scrollTop = $(window).scrollTop();
        $('body,html').animate({
            "scrollTop": 0
        }, 300)
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