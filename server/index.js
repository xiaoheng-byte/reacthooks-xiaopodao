const express = require("express");
const app = express();
const router = require("./router");
//跨域使用cors后台解决
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors())
app.use("/api",router);
app.listen(8080,()=>{
    console.log("server is running on 8080 port")
})