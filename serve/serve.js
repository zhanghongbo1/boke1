const express =require('express')

const app=express()
const arr=require("./api/pic.js")
const connectFn=require("./mongo")
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
}); 
connectFn();
app.post('/img',(res,req)=>{
    req.send(arr)

})
app.post('/login',(res,req)=>{
    req.json(
        {
            token:1
        }
    )
})





app.listen(3000,()=>{
    console.log("服务器已经运行http://localhost:3000")
})