$(".part4 .li1").click(function(){
    var html=`
    <div class="parent">
    <div>
      <img src="../img/part4_1.jpg" alt="">
      <div class="change">
          <p>课程介绍：●消费升级后零售业态的EMBA课程 ...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>品牌营销与运营管理课</h5>
        <p>时尚</p>
    </div>
</div>
<div class="parent">
    <div>
      <img src="../img/part4_2.jpg" alt="">
      <div class="change">
          <p>课程介绍：中赫时尚《服装造型搭配》课程是一门专...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>服装造型搭配课</h5>
        <p>时尚</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_3.png" alt="">
    <div class="change">
        <p>课程介绍：中赫时尚《服装造型搭配》课程是一门专...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>全科花艺师设计课 </h5>
        <p>花校</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_4.jpg" alt="">
    <div class="change">
        <p>课程介绍：本课程为中赫时尚特别推出的针对商业空...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>零售空间设计课</h5>
        <p>空间</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_5.jpg" alt="">
    <div class="change">
        <p>课程介绍：中赫时尚的《精品咖啡师课程》是针对初...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>精品咖啡师课程</h5>
        <p>咖啡</p>
    </div>
</div>
    `;
    $(this).css({"border-bottom":"4px solid #bdd630","color":"#bdd630"})
    $(this).siblings().css({"border-bottom":0,"color":"#000"});
    $(".part5").html(html).css("display","none").fadeIn().css("display","none").slideDown();
})
$(".part4 .li2").click(function(){
    // slideDown本质是改变display的隐藏属性，要用得先隐藏
    $(this).css({"border-bottom":"4px solid #bdd630","color":"#bdd630"})
    $(this).siblings().css({"border-bottom":0,"color":"#000"})
    var html=`
    <div class="parent">
    <div>
      <img src="../img/part4_1.jpg" alt="">
      <div class="change">
          <p>课程介绍：●消费升级后零售业态的EMBA课程 ...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>品牌营销与运营管理课</h5>
        <p>时尚</p>
    </div>
</div>
<div class="parent">
    <div>
      <img src="../img/part4_3.png" alt="">
      <div class="change">
          <p>课程介绍：中赫时尚《服装造型搭配》课程是一门专...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>服装造型搭配课</h5>
        <p>时尚</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_6.jpg" alt="">
    <div class="change">
        <p>课程介绍：时尚买手——如何购买的商业艺术！ 中...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>时尚买手课</h5>
        <p>时尚</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_7.jpg" alt="">
    <div class="change">
        <p>课程介绍：Window—the front p...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>橱窗设计课</h5>
        <p>时尚</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_9.jpg" alt="">
    <div class="change">
        <p>课程介绍：国内MBA式全英文时尚视觉营销陈列管...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>陈列管理课</h5>
        <p>时尚</p>
    </div>
</div>
    `;
    $(".part5").html(html).css("display","none").fadeIn().css("display","none").slideDown();
})
$(".part4 .li3").click(function(){
    var html=`
    <div class="parent">
    <div>
      <img src="../img/part4_10.jpg" alt="">
      <div class="change">
          <p>课程介绍：《自然风格花艺设计》课程是根据全球花...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>自然风格花艺设计课</h5>
        <p>花校</p>
    </div>
</div>
<div class="parent">
    <div>
      <img src="../img/part4_2.jpg" alt="">
      <div class="change">
          <p>课程介绍：中赫时尚FLOWER SCHOOL ...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>全科花艺师设计课</h5>
        <p>花校</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_11.jpg" alt="">
    <div class="change">
        <p>课程介绍：《森林风格先锋花艺设计》是由欧洲植物...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>森林风格先锋花艺设计课</h5>
        <p>花校</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_12.jpg" alt="">
    <div class="change">
        <p>课程介绍：中国现代花艺设计课程是中赫时尚北京花...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>中国现代花艺设计课 | 上海校区授课</h5>
        <p>花校</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_13.jpg" alt="">
    <div class="change">
        <p>课程介绍：学时：总时长5天（不包含休息时间），...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>酒店空间与宴会花艺设计课</h5>
        <p>花校</p>
    </div>
</div>
    `;
    $(this).css({"border-bottom":"4px solid #bdd630","color":"#bdd630"})
    $(this).siblings().css({"border-bottom":0,"color":"#000"});
    $(".part5").html(html).css("display","none").fadeIn().css("display","none").slideDown();
})
$(".part4 .li4").click(function(){
    var html=`
    <div class="parent">
    <div>
      <img src="../img/part4_14.jpg" alt="">
      <div class="change">
          <p>课程介绍：《软装陈设设计》培训课程始于2006...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>软装陈设设计课</h5>
        <p>空间</p>
    </div>
</div>
<div class="parent">
    <div>
      <img src="../img/part4_15.jpg" alt="">
      <div class="change">
          <p>课程介绍：课程简介： 软装色彩著作《室内设计师...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>空间软装色彩设计课</h5>
        <p>空间</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_11.jpg" alt="">
    <div class="change">
        <p>课程介绍：本课程为中赫时尚特别推出的针对商业空...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>零售空间设计课</h5>
        <p>空间</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_12.jpg" alt="">
    <div class="change">
        <p>课程介绍：提升提案能力必选课程; 进入设计行业...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>设计师公共课</h5>
        <p>空间</p>
    </div>
</div>
    `;
    $(this).css({"border-bottom":"4px solid #bdd630","color":"#bdd630"})
    $(this).siblings().css({"border-bottom":0,"color":"#000"});
    $(".part5").html(html).css("display","none").fadeIn().css("display","none").slideDown();
})
$(".part4 .li5").click(function(){
    var html=`
    <div class="parent">
    <div>
      <img src="../img/part4_17.jpg" alt="">
      <div class="change">
          <p>课程介绍：中赫时尚联合IFA Paris 高等...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>巴黎时尚买手深度研修课</h5>
        <p>时尚</p>
    </div>
</div>
<div class="parent">
    <div>
      <img src="../img/part4_18.jpg" alt="">
      <div class="change">
          <p>课程介绍：中赫国际联合北欧两所名校独家定制打造...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>北欧高端室内与空间软装设计研修</h5>
        <p>空间</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_19.jpg" alt="">
    <div class="change">
        <p>课程介绍：中赫时尚联合英国SA Retail </p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>伦敦“新零售”视觉营销与商业空间设计研修课</h5>
        <p>时尚</p>
    </div>
</div>
    `;
    $(this).css({"border-bottom":"4px solid #bdd630","color":"#bdd630"})
    $(this).siblings().css({"border-bottom":0,"color":"#000"});
    $(".part5").html(html).css("display","none").fadeIn().css("display","none").slideDown();
})
$(".part4 .li6").click(function(){
    var html=`
    <div class="parent">
  <div>
    <img src="../img/part4_5.jpg" alt="">
    <div class="change">
        <p>课程介绍：中赫时尚的《精品咖啡师课程》是针对初...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>精品咖啡师课程</h5>
        <p>咖啡</p>
    </div>
</div>
<div class="parent">
    <div>
      <img src="../img/part4_21.jpg" alt="">
      <div class="change">
          <p>课程介绍：中赫时尚的《咖啡品质控制师课程》是针...</p>
          <button>点击详情</button>
        </div>
    </div>
    <div class="neirong">
        <h5>咖啡出品控制师课程 | 上海校区授课</h5>
        <p>咖啡</p>
    </div>
</div>
<div class="parent">
  <div>
    <img src="../img/part4_23.jpg" alt="">
    <div class="change">
        <p>课程介绍：中赫时尚的《开店实务课程》是针对咖啡...</p>
        <button>点击详情</button>
      </div>
  </div>
    <div class="neirong">
        <h5>开店实务课程 | 上海校区授课</h5>
        <p>咖啡</p>
    </div>
</div>
    `;
    $(this).css({"border-bottom":"4px solid #bdd630","color":"#bdd630"})
    $(this).siblings().css({"border-bottom":0,"color":"#000"});
    $(".part5").html(html).css("display","none").fadeIn().css("display","none").slideDown();
})