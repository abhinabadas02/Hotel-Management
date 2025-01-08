const mongoose=require("mongoose");
const { type } = require("os");

const menuSchema=new mongoose.Schema({
    menu_id:{
        type: Number,
        required : true,
        unique: true
    },
    name:{
        type: String,
        required:true,
        unique: true
    },

    price:{
        type: String,
        required:true
    },
    taste:{
        type: String,
        enum: ['sweet','sour','spicy'],
        required:true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default: []
    },
    num_sales:{
        type: Number,
        default: 0
    }

});
const Menu=mongoose.model("Menu",menuSchema);
module.exports=Menu