const mongoose= require("mongoose");
const { type } = require("os");

const personSchema=new mongoose.Schema({

    unique_id:{
        type: Number,
        required : true,
        unique: true
    },
    
    name:{
        type: String,
        required:true
    },

    age:{
        type: Number,
        // required:true
    },

    role:{
        type: String,
        required: true,
        enum:["CHEF","OWNER","WAITER"]
    },

    mobile:{
        type:Number,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

const Person=mongoose.model("Person",personSchema);
module.exports=Person;