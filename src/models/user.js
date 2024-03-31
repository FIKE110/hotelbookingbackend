import mongoose from "mongoose"

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

export default mongoose.model('testuser',testuserSchema)