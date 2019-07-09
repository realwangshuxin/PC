const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var sql=`SELECT * FROM zh_article`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send(result);
        }
    })
})
module.exports=router;