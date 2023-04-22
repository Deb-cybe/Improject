const express=require('express');
const https=require('https');

const app=express(); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("It works");
});

app.listen(60118, console.log("Server running"));