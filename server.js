const express=require('express')
const app=express();
app.get('/',(request,response)=>{
    response.send("hi rushi1")
})

app.listen(4000,'0.0.0.0',()=>{

    console.log('server started at 4000')
})