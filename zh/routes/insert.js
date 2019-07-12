const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    console.log(uname,upwd)
    var sql="INSERT INTO zh_login VALUES (null,?,?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"});
        }else{
            res.send({code:-1,msg:"注册失败"})
        }
    })
})
module.exports=router;