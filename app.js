import express, { json, urlencoded } from 'express';

const app=express(); 
app.use(json());
app.use(urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("It works");
});

app.listen(60118, console.log("Server running"));