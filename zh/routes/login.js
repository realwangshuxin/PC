const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    
    var sql=`SELECT * FROM zh_login WHERE uname=? AND upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:-1,msg:"登录失败"})
        }
    })
})
module.exports=router;