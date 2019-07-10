//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
// const main=require("./routes/main");
const cors = require("cors");
const teacher=require("./routes/teacher");
const article=require("./routes/article");
const teachers=require("./routes/teachers");
const login=require("./routes/login.js");
var server = express();
var app = express();
var server = app.listen(8888);
app.use(cors({
    origin:"http://127.0.0.1:5500"
  }))

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
// app.use("/main",main);
// app.use("/main",main);
app.use("/teacher",teacher);
app.use("/article",article);
app.use("/teachers",teachers);
app.use("/login",login);
