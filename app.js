const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const NamesModel=require('./models/Names');
const app=express(); 
app.use(express.json());
app.use(cors());
// require('dotenv').config({path:__dirname+'./.env'});

async function main() {
    //   await mongoose.connect(require('dotenv').config().parsed.MONGO_URI); 
      await mongoose.connect('mongodb://127.0.0.1:27017');
      await console.log("connection successfull"); 
    }
    main().catch(err => console.log(err));    

app.get('/',(req,res)=>{
    res.json({ message: "Hello from server!" });
});
app.post('/setname',async(req,res)=>{
    const name=new NamesModel(req.body);
    try{
        const newName=await name.save();
        res.status(201).json({newName});
    }
    catch(err){
        res.status(400).send(err);
    }
});

app.get('/getnames',async(req,res)=>{
    try{
        const names=await NamesModel.find();
        res.send(names);
    }
    catch(err){
        res.send(err);
    }
});
app.listen(60118, console.log("Server running"));
