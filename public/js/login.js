$(function(){
    var reg1=/^\w{5,}$/;
    var reg2=/^\d{6}$/;
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
    var verifyCode = new GVerify("v_container");
    $("#code_input").blur(function(){
        var res = verifyCode.validate($("#code_input").val());
        if($("#code_input").val()==""){
            $(".error3").attr("src","../img/login/login_file.png")
            return;
        }
        if($("#code_input").val()!=""){
            if(res){
                $(".error3").attr("src","../img/login/login_ss.png")
            }else{
                $(".error3").attr("src","../img/login/login_file.png")
                return;
            }
        }
    })

    $("#my_button").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        $.ajax({
            url:"http://127.0.0.1:8888/login",
            type:"get",
            data:{uname,upwd},
            dataType:"json"
        }).then(result=>{
            // result=JSON.parse(result);
            console.log(result)
            if(result.code==1){
                $(".yes").css({"width":"478px","transition":"all .5s linear"})
            }
            if(result.code==-1){
                $(".no").css({"width":"478px","transition":"all .5s linear"})
            }
    
        })
    })
})