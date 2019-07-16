$(()=>{
    $("#more").click(function(){
        // console.log(this)
            $("#toggle").slideToggle();

    })
    $(".gengduo").click(function(){
        if($(this).next().css("display")=="none"){
            $(this).next().slideDown().parent().siblings().children(".gengduo_div").slideUp();
        }else{
            $(this).next().slideUp()
        }
        })
    })
function myGet(classname){
    return document.getElementsByClassName(classname);
}

function getValue(){
    var value=1;
    localStorage.setItem("value",value)//将storage转变为字符串存储
    return function(){
        // var input=document.getElementById("input")
        this.lastElementChild.value =(value++) + "人已查看";
        // var data = JSON.parse(window.localStorage.data);
        // data[i] = JSON.parse(data[i]);
        // 字符串拼接，都是通过 变量将字符串分为左右两个部分
    }
}
// 通过闭包缓冲数据，基本上需要闭包缓冲数据，都是通过返回函数的值实现的

var btnObjs = myGet("tuijian_flex");
// 获取所有的按钮
for(var i=0;i<btnObjs.length;i++){
    btnObjs[i].onclick = getValue();
}

    // getValue()返回值直接是图片下面的字符串
// 每个按钮的内存空间位置是不同的，所有他们的对应的闭包的value的缓存值也是不一样的
// 每次点击不同的按钮，获取不同的value值，才能实现分开点赞

