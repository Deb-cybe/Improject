const express=require('express');

const app=express(); 
app.use(express.json());
app.use(urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("It works");
});

app.listen(60118, console.log("Server running"));