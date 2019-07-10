$(function(){
    var reg1=/^\w{6,}$/;
    var reg2=/^\d{6}$/;
    $("#uname").blur(function(){
        if($("#uname").val()==""){
            $(".error1").attr("src","../img/login/login_file.png")
        }
    })
    $("#upwd").blur(function(){
        if($("#upwd").val()==""){
            $(".error2").attr("src","../img/login/login_file.png")
        }
    })
    $("#code_input").blur(function(){
        if($("#code_input").val()==""){
            $(".error2").attr("src","../img/login/login_file.png")
        }
    })
    $.ajax({
        url:"http://127.0.0.1:8888/login",
        type:"get",
        data:{uid:1},
        dataType:"json"
    }).then(result=>{
        console.log(result)

    })
})