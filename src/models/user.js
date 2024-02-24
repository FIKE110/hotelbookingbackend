const mongoose = require("mongoose")

const testuserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },

    amount:{
        type:Number,
        default:120000
    }
    ,


    level:{
        type:Number,
        default:0
    },
},{collection:"userdb"})

module.exports=mongoose.model('testuser',testuserSchema)