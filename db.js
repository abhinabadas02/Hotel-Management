const mongoose=require("mongoose");
// const mongoURL="mongodb://127.0.0.1:27017/hotels";
// const dotnev=require("dotenv");
// dotnev.config();


mongoose.connect("mongodb://127.0.0.1:27017/hotels",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db=mongoose.connection

db.on("connected",()=>{
    console.log("Connected to MongoDB");
});

db.on("error",(err)=>{
    console.log("Error to MongoDB",err);
});

db.on("disconnected",()=>{
    console.log("Disconnected to MongoDB");
});



module.exports=db;
