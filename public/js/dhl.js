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