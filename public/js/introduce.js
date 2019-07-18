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