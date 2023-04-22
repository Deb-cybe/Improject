const {db}=require('./util/admin');
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const NamesModel=require('./models/Names');
const app=express(); 
app.use(express.json());
app.use(cors());
// require('dotenv').config({path:__dirname+'./.env'});

// async function main() {
//     //   await mongoose.connect(require('dotenv').config().parsed.MONGO_URI); 
//       await mongoose.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true });
//       await console.log("connection successfull"); 
//     }
//     main().catch(err => console.log(err));    

const {usernames}=require('./models/firenames');



app.get('/',(req,res)=>{
    res.json({ message: "Hello from server!" });
});

//  firestore
app.get('/names',usernames);
const addNames = async (req, res) => {
    const { name} = req.body
    try {
      const entry = db.collection('users').doc()
      const entryObject = { 
        name
      }
  
      entry.set(entryObject);
      res.status(200).send({
        status: 'success',
        message: 'entry added successfully',
        data: entryObject
      })
    } catch(error) {
        res.status(500).json(error.message)
    }
  }
app.post('/setnames', addNames);
//  firestore




// app.post('/setname',async(req,res)=>{
//     const name=new NamesModel(req.body);
//     // const name=new NamesModel({"name":"json"});
//     try{
//         const newName=await name.save();
//         res.send(newName);
//     }
//     catch(err){
//         res.status(400).send(err);
//     }
// });

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
