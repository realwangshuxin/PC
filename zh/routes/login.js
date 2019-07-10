const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var uid=req.query.uid;
    var sql=`SELECT * FROM zh_login WHERE uid=?`;
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send("登录成功");
        }else{
            res.send("登录失败")
        }
    })
})
module.exports=router;