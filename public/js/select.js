var coruses=[
    [{name:"品牌营销与运营管理课",value:101},
    {name:"服装造型搭配课",value:102},
    {name:"巴黎时尚买手深度研修课",value:103},
    {name:"时尚买手课",value:104},
    {name:"橱窗设计课",value:105},
    {name:"视觉营销陈列设计课",value:106},
    {name:"伦敦“新零售”视觉营销与商业空间设计研修课",value:107}],
    [{name:"自然风格花艺设计课",value:201},
    {name:"全科花艺师设计课",value:202},
    {name:"森林风格先锋花艺设计课",value:203},
    {name:"中国现代花艺设计课",value:204},
    {name:"酒店空间与宴会花艺设计课",value:205},
    {name:"日本草月花艺精研课",value:206}],
    [{name:"软装陈设设计课",value:301},
    {name:"空间软装色彩设计课",value:302},
    {name:"零售空间设计课",value:303},
    {name:"设计师公共课",value:304},
    {name:"北欧高端室内与空间软装设计研修",value:305}],
    [{name:"精品咖啡师课程",value:401},
    {name:"咖啡出品控制师课程",value:402},
    {name:"开店实务课程",value:403},
    {name:"精品咖啡师课程（周末班）",value:404}],
        [{name:"品牌营销与运营管理课",value:101},
        {name:"服装造型搭配课",value:102},
        {name:"巴黎时尚买手深度研修课",value:103},
        {name:"时尚买手课",value:104},
        {name:"橱窗设计课",value:105},
        {name:"视觉营销陈列设计课",value:106},
        {name:"伦敦“新零售”视觉营销与商业空间设计研修课",value:107}]
];
var $select1=$("#s1");
var $select2=$("#s2");
$select1.change(()=>{
    var i=$select1.prop('selectedIndex');
    var coruse=coruses[i];
    $select2.html("");
    for(var cor of coruse){
        var $option=$(`<option>${cor.name}</option>`)
        $select2.append($option)
    }
})