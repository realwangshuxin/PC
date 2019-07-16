$(function(){
    $.ajax({
        url:"dhl.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("dhl");
            $(`<link rel="stylesheet" href="../css/dhl.css">`).appendTo("head")
        }
    })
})

window.onscroll=function(){
    var dhl=this.document.getElementById("dhl")
    var logo=this.document.getElementsByClassName("logo")[0]
    if(window.pageYOffset>=60){
        dhl.classList.add("dhl_bg");
        logo.src="../img/logo.png"
    }else{
        dhl.classList.remove("dhl_bg");
        logo.src="../img/logo2.png"
    }
}