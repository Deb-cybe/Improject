const express=require('express');
const cors=require('cors');

const app=express(); 
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({ message: "Hello from server!" });
});
app.get('/news',(req,res)=>{
    res.send("News Page");
});
app.listen(60118, console.log("Server running"));