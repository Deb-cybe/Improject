const express=require('express');

const app=express(); 
app.use(express.json()); 
app.get('/',(req,res)=>{
    res.send("It works");
});
app.get('/news',(req,res)=>{
    res.send("News Page");
});
app.listen(60118, console.log("Server running"));