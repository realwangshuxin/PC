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
              <div class="hide"></div>
        </li>`;
        // console.log(html)
    }
    $(".teacher").html(html); 
    $(".btn_down").click(function(){
      $(this).next().html(hidecontent).slideToggle();
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
                    var {tid,pic,title,subtitle,descrip,tag}=res;
                    html+=
                    `<li>
                    <div style="background-image:url(http://127.0.0.1:8888/${pic})"></div>
                    <div class="txt">
                        <h2>${title}</h2>
                        <h3>${subtitle}</h3>
                        <p>${descrip}</p>
                        <div class="tag">${tag}</div>
                    </div>
                </li>`;
                // console.log(html)
            }
            $(".teacher").html(html);
            $(this).load(); 
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
                    var {tid,pic,title,subtitle,descrip,tag}=res;
                    html+=
                    `<li>
                    <div style="background-image:url(http://127.0.0.1:8888/${pic})"></div>
                    <div class="txt">
                        <h2>${title}</h2>
                        <h3>${subtitle}</h3>
                        <p>${descrip}</p>
                        <div class="tag">${tag}</div>
                    </div>
                </li>`;
                // console.log(html)
            }
            $(".teacher").html(html); 
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
                    var {tid,pic,title,subtitle,descrip,tag}=res;
                    html+=
                    `<li>
                    <div style="background-image:url(http://127.0.0.1:8888/${pic})"></div>
                    <div class="txt">
                        <h2>${title}</h2>
                        <h3>${subtitle}</h3>
                        <p>${descrip}</p>
                        <div class="tag">${tag}</div>
                    </div>
                </li>`;
                // console.log(html)
            }
            $(".teacher").html(html); 
            })
        }
    })

})

