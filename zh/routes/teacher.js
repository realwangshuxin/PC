const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var pno = req.query.pno;
   var ps = req.query.pageSize;
   // -设置默认值
   if(!pno){pno=1}
   if(!ps){ps=10}
   //-创建第一条 sql语句 当前页
   var obj = {code:1,msg:"查询成功"};
    var sql=`SELECT tid,pic,title,subtitle,descrip,tag FROM zh_teacher LIMIT ?,?`;
    var off = (pno-1)*ps;
    //行数必须转整型
    ps = parseInt(ps);
    pool.query(sql,[off,ps],(err,result)=>{
        if(err)throw err;
        obj.data = result;
        res.send(result);
        // var sql = "SELECT count(*) AS c FROM zh_teacher";
        // //pool.query不能平行执行，nodejs无序，不知哪个先执，只能嵌套
        // pool.query(sql,(err,result)=>{
        //   if(err)throw err;
        //   //只能向上取整
        //   var pc = Math.ceil(result[0].c/ps);
        //   //总页数
        //   obj.pc = pc;
        //   res.send(obj);
        // })
    });
 });  
  
  module.exports=router;