$(function(){
    var reg1=/^\w{5,}$/ig;
    var reg2=/^\d{6}$/ig;
    $("#uname").blur(function(){
        var $uname=$("#uname").val();
        if($uname==""){
            $(".error1").attr("src","../img/login/login_file.png");
        }
        if($uname!=""){
            if(reg1.test($uname)){
                $(".error1").attr("src","../img/login/login_ss.png")
            }else{
                $(".error1").attr("src","../img/login/login_file.png")
            }
        }
    })
    $("#upwd").blur(function(){
        var $upwd=$("#upwd").val(); 
        if($upwd==""){
            $(".error2").attr("src","../img/login/login_file.png")
        }
        if($upwd!=""){
            if(reg2.test($upwd)){
                $(".error2").attr("src","../img/login/login_ss.png")
            }else{
                $(".error2").attr("src","../img/login/login_file.png")
            }
        }
    })

    $("#upwd2").blur(function(){
        if($("#upwd2").val()==$("#upwd").val()){
        $(".error3").attr("src","../img/login/login_ss.png")
    }
    if($("#upwd2").val()!=$("#upwd").val()){
        $(".error3").attr("src","../img/login/login_file.png")
        $("#my_button").attr("disabled","true")
    }
    if($("#upwd2").val()==""){
        $(".error3").attr("src","../img/login/login_file.png")
        $("#my_button").attr("disabled","true")
    }
    })
    $(".agree_img").click(function(){
        console.log($(this))
        if($(this).attr("src")=="../img/register_current.png"){
            $(this).attr("src","../img/login/login_ss.png")
            $("#my_button").attr("disabled",false).css("background","#000")
        }else if($(this).attr("src")=="../img/login/login_ss.png"){
            $(this).attr("src","../img/register_current.png")
            $("#my_button").attr("disabled",true).css("background","#ccc")
        }
    })

    $("#my_button").click(function(){
        var uname=$("#uname").val();
        var upwd2=$("#upwd2").val();
        $.ajax({
            url:"http://127.0.0.1:8888/insert",
            type:"get",
            data:{uname:uname,upwd:upwd2},
            dataType:"json"
            // success:function(result){      
            // }
        }).then(result=>{
            console.log(result);
            if(result.code==1){
                $(".yes").css("display","block");
                setTimeout(function(){
                   $(".yes").css("transform","scale(1,1)");
                   },0);
            $(".confirm").click(function(){
                $(".yes").css("display","none")
                $(".yes").css("transform","scale(0.1,0.1)");
                location.href="login.html";
            })
        }

        if(result.code==-1){
            $("#my_button").click(function(){
                $(".no").css("display","block");
                setTimeout(function(){
                   $(".no").css("transform","scale(1,1)");
                   },0);
            })
            $(".confirm").click(function(){
                $(".no").css("display","none")
                $(".no").css("transform","scale(1,1)");
            })
        }
        })
    })
            
        
    })