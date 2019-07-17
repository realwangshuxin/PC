$(()=>{
    $.ajax({
        url:"http://127.0.0.1:8888/article",
        type:"get",
        dataType:"json"
    }).then(function(result){
        console.log(result)
        var html="";
        var {aid,pic,title,subtitle,tag}=result;
        for(var res of result){
            html+=
            `<li>
              <img src="http://127.0.0.1:8888/${res.pic}" alt="">
              <div>
                <h5><a href="">${res.title}</a></h5>
                <p><a href="">${res.subtitle}</a></p>
                <p class="b">${res.tag}</p>
              </div>
          </li>`;
        // console.log(html)
    }
    $(".article").html(html);
    })
    $.ajax({
        url:"http://127.0.0.1:8888/teachers",
        type:"get",
        dataType:"json"
    }).then(function(result){
        var html2="";
        var {tid,pic,tname,ident,cts}=result;
        for(var res of result){
            html2+=
            `<li>
            <img src="http://127.0.0.1:8888/${res.pic}" alt="">
            <div>
              <p>${res.tname}</p>
              <p>${res.ident}</p>
              <p>${res.cts}</p>
            </div>
          </li>`;
        // console.log(html)
    }
    $(".teachers").html(html2);
    })

    var time=1;
    $(".swiper-next").click(function(){
        $(".teachers li:first").css({"margin-left":-400*time+"px","transition":"all .5s linear"});
        time++;
        if(time>=6){
            // $(this).attr("disabled",true);
            time=5;
        }
    })
    $(".swiper-prev").click(function(){
        time--;
        $(".teachers li:first").css({"margin-left":time*-400+"px","transition":"all .5s linear"});
        if(time<=1){
            // $(this).attr("disabled",true);
            time=1;
        }
    })

    $(".searcha").click(function(){
        if($(".searchtext input").css("left")=="200px"){
            $(".searchtext input").css({"left":"0","transition":"all .5s linear"})
        }
        if($(".searchtext input").css("left")=="0px"){
            $(".searchtext input").css({"left":"200px","transition":"all .5s linear"})
        }
    })
    var uname=sessionStorage.getItem("uname");
    if(uname){
        var str=`欢迎回来&nbsp;|&nbsp;${uname}`+`&nbsp;|&nbsp;<a href="html/login.html" style="text-align:center;line-height:40px;
        text-decoration:none;color:#fff;background:none;">退出</a>`
        $("#login").html(str)
    }

    

    $(".tijiao").click(function(){
        var reg_name=/^[\u4E00-\u9FA5A-Za-z]$/;
        var reg_phone=/^1[3456789]\d{9}$/;
        $(".name").blur(function(){
            if(reg_name){}
        })
        $(".phone").blur(function(){
            if(reg_phone){}
        })
        if($(".selected").checked){}



    })






})
