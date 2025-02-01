const mongoose=require("mongoose");
// const mongoURL="mongodb://127.0.0.1:27017/hotels";
const mongoURL=process.env.DB_URL;
require("dotenv").config();
// const mongoURL="mongodb+srv://abhinabadas02:iamf00L@abhi.dxq5y.mongodb.net/"
// const dotnev=require("dotenv");
// dotnev.config();


mongoose.connect(mongoURL,{
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
