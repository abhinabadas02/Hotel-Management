const express = require("express");
const app = express();
const passport=require("passport");
const Person = require("./Models/Person");
const LocalStrategy=require("passport-local").Strategy;
require("dotenv").config();
const PORT=process.env.PORT || 5001

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./db");

passport.use(new LocalStrategy(async (USERNAME,password,done)=>{
  try {
    console.log("Received Credentials",USERNAME,password);
    const user= await Person.findOne({username:USERNAME});
    if(!user){
      return done(null,false, {message: "Incorrect email"});
    }
    const isPasswordMatch=user.password===password?true:false;
    if(isPasswordMatch){
      return done(null,user);
    }
    else{
      return done(null,false,{message: "Incorrect password"})
    }
  } catch (error) {
    return done(error);
  }
}))

app.use(passport.initialize());


const logRequest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()} Request Made to: ${req.originalUrl}]`);
  next();
}
app.get("/greet", passport.authenticate("local", {session: false}), async (req, res)=> {
  res.send("Hi this is backend ");
});

app.use(logRequest);
const personRoutes=require("./Routes/personRoutes");
app.use("/person",personRoutes);

const menuRoutes=require("./Routes/menuRoutes");

app.use("/restaurant",menuRoutes);


app.listen(PORT, () => {
  console.log("live on port 5001");
});
