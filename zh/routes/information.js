const express=require("express")
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var pno = req.query.pno;
   var ps = req.query.pageSize;
   // -设置默认值
   if(!pno){pno=1}
   if(!ps){ps=20}
   //-创建第一条 sql语句 当前页
   var obj = {code:1,msg:"查询成功"};
    var sql=`SELECT * FROM zh_information LIMIT ?,?`;
    var off = (pno-1)*ps;
    //行数必须转整型
    ps = parseInt(ps);
    pool.query(sql,[off,ps],(err,result)=>{
        if(err)throw err;
        obj.data = result;
        res.send(result);
    });
 });  

  module.exports=router;