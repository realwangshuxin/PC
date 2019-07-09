SET NAMES UTF8;
DROP DATABASE IF EXISTS zh;
CREATE DATABASE zh CHARSET=UTF8;
USE zh;

CREATE TABLE zh_teacher(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(128),
    title VARCHAR(128),
    subtitle VARCHAR(128),
    descrip VARCHAR(128),
    tag VARCHAR(16),
    hidecontent VARCHAR(360)
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/1.png','THOMAS CHEN','中赫时尚讲师',
    '著名室内设计师|高端家居面料买手|著名家具产品设计师|资深家居软装整体设计师','软装陈设设计课',
    'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/2.png','NADA LIU','中赫时尚讲师',
    '资深家居设计师|
著名家居媒体人|
资深空间陈设设计师|
多年来完成了大量会所、样板间等商业项目的室内配饰设计工作|
新锐产品设计师 为曲美、依诺维绅、施华洛世奇等品牌提供产品设计服务|
家居媒体资深编辑，室内专业杂志及设计类媒体撰稿人|
曾为知名家居品牌策划并制作产品宣传册','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/3.png','LEO','中赫时尚讲师',
    '中国注册高级照明设计师|
北美照明学会会员IES|
国际照明设计师协会会员IALD|
中国照明学会照明设计培训讲师','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/4.png','张宝华','中赫时尚讲师',
    '著名纺织艺术研究学者|
中国家用纺织品行业资深设计专家|
中国家用纺织品流行趋势研究专家|
中华全国工商业联合会纺织服装商会专家委员会委员|
中国流行色协会第九届理事会理事、色彩教育委员会委员|
中国室内装饰协会陈设艺术专业委员会副主任|
NCS(Natural Color System)中国地区特约色彩专家 ','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/5.png','任杰','中赫时尚讲师',
    '中国新锐室内软装设计师|
英国MASAA建筑事务所任建筑设计师|
毕业于中央美术学院建筑系|
NOTION艺术设计工作室创始人|
ZR设计联合工作室、原.空间设计工作室联合创始人','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/6.png','肖伟','中赫时尚手绘专业讲师',
    '中国青年手绘艺术设计人|
教学系主任（室内设计）/讲师|
江西美术专修学院授课教师 |
知名手绘培训教学主讲老师/系主任 ','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/7.png','伊星妍','中赫时尚讲师',
    '中赫时尚家居软装设计讲师|
中国首家软装上市公司创始人|
中国绿化基金绿手帕365公益活动联合发起人|
2015年度中國家居裝飾界優秀企業家|
美国NCDC商务部认证国际家居买手|
美国室内装饰设计行业交流学者','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/8.png','曹江','中赫时尚花艺讲师',
    '资深花艺设计师|
资深花艺教育专家|
FLOWER SCHOOL BEIJING 北京花校花艺设计培训讲师|
中国传统插花高级讲师|
中赫时尚花艺设计教研团队核心成员|
Floral Fundamentals中国区大使','全科花艺师设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/9.png','Shaun Armstrong（英国）','中赫时尚视觉营销高级讲师',
    '英国Harvey Nichols哈维·尼克斯百货视觉营销经理|
英国Liberty百货商业视觉总监|
英国House Of Fraser福莱莎百货视觉营销经理|
英国SA零售咨询公司创意总监|
商业视觉营销体验设计专家','陈列管理课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/10.png','丹羽英之（日本）','中赫时尚花艺设计导师',
    '日本著名花艺设计师 花艺创作艺术家|
Hideyuki Niwa花艺设计工作室主理人|
国际花艺活动资深花艺创作表演嘉宾|
中赫时尚 FLOWER SCHOOL BEIJING 花艺设计讲师|
2010/2011比利时 floral art international 大赛铜奖|
2012/2013比利时 floral art international 大赛金奖|
2010年日本杯花艺设计大赛第四名|
2012年日本杯花艺设计大赛亚军','丹羽英之空间花艺设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/11.png','于鸿珲','中赫时尚花艺讲师',
    '中赫时尚花艺设计总监|
资深色彩设计专家|
著名花艺造型师|
中赫时尚北京花校花艺设计培训讲师','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/12.png','Mark Pampling（澳大利亚）','中赫时尚花艺设计导师',
    '澳大利亚著名花艺设计师|
花艺创作艺术家|
国际花艺媒体撰稿人|
Fleurop-INTERFLORA 花艺世界杯 评委|
INTERFLORA 澳大利亚杯 冠军|
INTERFLORA 世界杯 季军|
FUSION 年度国际花艺设计师 金奖','国际经典架构花艺课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/13.png','Robbie Honey（英国）','中赫时尚花艺设计导师',
    '时尚花艺设计师|
资深花艺培训师|
FLOWER SCHOOL BEIJING 北京花校花艺设计培训讲师','全科花艺师设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/15.png','Françoise Weeks（美国）','中赫时尚讲师',
    '国际著名花艺设计师|
国际花艺艺术教育家|
森林景观植物专家','森林风格先锋花艺设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/16.png','小林祐治（日本）','中赫时尚讲师',
    '日本著名花艺设计师|
花艺创作艺术家|
知名花艺表演家|
东京柏悦酒店花艺总监|
东京半岛酒店花艺技术指导','小林祐治酒店与宴会花艺课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/17.png','Madison Hartley（美国）','中赫时尚讲师',
    '美国知名自然风格花艺设计师
 “ HART FLORAL ” 花艺工作室所有人|
绘画艺术家|
FLOWER SCHOOL BEIJING 北京花校《自然风格花艺设计》培训讲师','自然风格花艺设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/18.png','GINO','中赫时尚高级讲师',
    '中赫时尚时尚视觉项目总监
资深奢侈品牌陈列经理
中赫时尚 时尚管理学院 高级讲师
任职于奢侈品牌以及国际买手品牌视觉形象总监，负责中国区市场形象与营销策划','橱窗设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/19.png','JANE GAO','服饰陈列设计课',
    '资深人力资源经理|
美国领导管理发展中心认证教练','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/20.png','SELENA','服饰陈列设计课',
    '国际奢侈品牌资深陈列师|
拥有独到的时尚嗅觉与趋势应用体系|
具备多年时尚零售行业的VM管理经验|
丰富陈列理论与实操经验','时尚买手课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/21.png','THOMAS CHEN','中赫时尚讲师',
    '著名室内设计师|高端家居面料买手|著名家具产品设计师|资深家居软装整体设计师','软装陈设设计课',
    'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/22.png','NADA LIU','中赫时尚讲师',
    '资深家居设计师|
著名家居媒体人|
资深空间陈设设计师|
多年来完成了大量会所、样板间等商业项目的室内配饰设计工作|
新锐产品设计师 为曲美、依诺维绅、施华洛世奇等品牌提供产品设计服务|
家居媒体资深编辑，室内专业杂志及设计类媒体撰稿人|
曾为知名家居品牌策划并制作产品宣传册','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/23.png','LEO','中赫时尚讲师',
    '中国注册高级照明设计师|
北美照明学会会员IES|
国际照明设计师协会会员IALD|
中国照明学会照明设计培训讲师','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/24.png','张宝华','中赫时尚讲师',
    '著名纺织艺术研究学者|
中国家用纺织品行业资深设计专家|
中国家用纺织品流行趋势研究专家|
中华全国工商业联合会纺织服装商会专家委员会委员|
中国流行色协会第九届理事会理事、色彩教育委员会委员|
中国室内装饰协会陈设艺术专业委员会副主任|
NCS(Natural Color System)中国地区特约色彩专家 ','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/25.png','任杰','中赫时尚讲师',
    '中国新锐室内软装设计师|
英国MASAA建筑事务所任建筑设计师|
毕业于中央美术学院建筑系|
NOTION艺术设计工作室创始人|
ZR设计联合工作室、原.空间设计工作室联合创始人','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/26.png','肖伟','中赫时尚手绘专业讲师',
    '中国青年手绘艺术设计人|
教学系主任（室内设计）/讲师|
江西美术专修学院授课教师 |
知名手绘培训教学主讲老师/系主任 ','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/27.png','伊星妍','中赫时尚讲师',
    '中赫时尚家居软装设计讲师|
中国首家软装上市公司创始人|
中国绿化基金绿手帕365公益活动联合发起人|
2015年度中國家居裝飾界優秀企業家|
美国NCDC商务部认证国际家居买手|
美国室内装饰设计行业交流学者','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/38.png','曹江','中赫时尚花艺讲师',
    '资深花艺设计师|
资深花艺教育专家|
FLOWER SCHOOL BEIJING 北京花校花艺设计培训讲师|
中国传统插花高级讲师|
中赫时尚花艺设计教研团队核心成员|
Floral Fundamentals中国区大使','全科花艺师设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/29.jpg','Shaun Armstrong（英国）','中赫时尚视觉营销高级讲师',
    '英国Harvey Nichols哈维·尼克斯百货视觉营销经理|
英国Liberty百货商业视觉总监|
英国House Of Fraser福莱莎百货视觉营销经理|
英国SA零售咨询公司创意总监|
商业视觉营销体验设计专家','陈列管理课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/30.jpg','丹羽英之（日本）','中赫时尚花艺设计导师',
    '日本著名花艺设计师 花艺创作艺术家|
Hideyuki Niwa花艺设计工作室主理人|
国际花艺活动资深花艺创作表演嘉宾|
中赫时尚 FLOWER SCHOOL BEIJING 花艺设计讲师|
2010/2011比利时 floral art international 大赛铜奖|
2012/2013比利时 floral art international 大赛金奖|
2010年日本杯花艺设计大赛第四名|
2012年日本杯花艺设计大赛亚军','丹羽英之空间花艺设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
INSERT INTO zh_teacher VALUES(
    null,'img/teacher/39.png','张宝华','中赫时尚讲师',
    '著名纺织艺术研究学者|
中国家用纺织品行业资深设计专家|
中国家用纺织品流行趋势研究专家|
中华全国工商业联合会纺织服装商会专家委员会委员|
中国流行色协会第九届理事会理事、色彩教育委员会委员|
中国室内装饰协会陈设艺术专业委员会副主任|
NCS(Natural Color System)中国地区特约色彩专家 ','软装陈设设计课',
'Shaun Armstrong先生拥有30年的时尚零售行业的VM设计及管理经验，关注品牌的长期发展，在时尚行业独
    具创意，是英国视觉陈列营销市场中具备相当影响力的领导者，有着极高的发言权。 服务品牌： Jean Paul 
    Gaultier • Patrick Cox • Emporio Armani • The Watch Gallery • Oilily • Cashmere Studio •
     Loewe • Trussardi • Gina Shoes • Liberty of London • Alfred Dunhill • Estee Lauder • Chri
     stian Dior等'
);
CREATE TABLE zh_article(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(128),
    title VARCHAR(128),
    subtitle VARCHAR(128),
    tag VARCHAR(16)
);
INSERT INTO zh_article VALUES(
    null,'img/article/li_1.jpg','8年的约定，这对闺蜜终于实现了！','你可以为约定守候多长时间？今天这两位闺蜜...',
    '软装陈设');
    INSERT INTO zh_article VALUES(
    null,'img/article/li_2.jpg','买手说 | 最高级的自由是自律！','当你拥有自律之后，才能称之为完全拥有自由...',
    '服装搭配');
    INSERT INTO zh_article VALUES(
    null,'img/article/li_3.jpg','把19世纪逝者的头发镶在珠宝里，这样的首饰竟然卖出了天价！','Tara在深圳有一家自己的古董珠宝工作室...',
    '品牌营销与运营管理');
    INSERT INTO zh_article VALUES(
    null,'img/article/li_4.jpg','在烟雨杭州：我有花，有酒，也有故事','坐落在杭州的女王花艺The queen ...',
    '全科花艺');
    INSERT INTO zh_article VALUES(
    null,'img/article/li_5.jpg','美丽橱窗背后的Natasha','Natasha来自合肥，是买手品牌Jan...',
    '视觉陈列');
    INSERT INTO zh_article VALUES(
    null,'img/article/li_6.jpg','一个花艺工作室老板的自述 :你是要成为花艺师的人，而不是那个“嘿，卖花的”',
    '我叫大鹿，一名野生花艺师，2015毕业于...',
    '空间花艺');

CREATE TABLE zh_teachers(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(128),
    tname VARCHAR(128),
    ident VARCHAR(128),
    cts VARCHAR(16)
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/1_teacher.jpg','英国Harvey Nichols 哈维·尼克斯百货视觉营销经理','英国Liberty百货商业视觉总监','Shaun Armstrong'
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/2_teacher.jpg','美国知名自然风格花艺设计师','“ HART FLORAL ” 花艺工作室创始人',
    'Madison Hartley'
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/3_teacher.jpg','日本著名花艺设计师','“花艺创作艺术家”',
    '小林祐治（日本）'
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/4_teacher.jpg','日本著名花艺设计师','“花艺创作艺术家”',
    '小林祐治（日本）'
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/5_teacher.jpg','日本著名花艺设计师','“花艺创作艺术家”',
    '小林祐治（日本）'
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/6_teacher.jpg','日本著名花艺设计师','“花艺创作艺术家”',
    '小林祐治（日本）'
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/7_teacher.jpg','日本著名花艺设计师','“花艺创作艺术家”',
    '小林祐治（日本）'
);
 INSERT INTO zh_teachers VALUES(
    null,'img/teachers/8_teacher.jpg','日本著名花艺设计师','“花艺创作艺术家”',
    '小林祐治（日本）'
);