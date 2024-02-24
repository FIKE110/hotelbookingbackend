const mongoose = require("mongoose")
const vip=new mongoose.Schema({
    id:Number,
    hotelId:Number,
    roomNumber:Number,
    amount:Number
})