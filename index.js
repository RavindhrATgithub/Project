var  express= require("express")
var app=express()

app.get("/",(req,res)=>{

    
    res.send(req.query)
})

app.listen(100,()=>{

    console.log("server running on port 100")
})