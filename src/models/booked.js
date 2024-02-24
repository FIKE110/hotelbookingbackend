const mongoose = require("mongoose")
const booked=new mongoose.Schema({
    id:Number,
    hotelId:Number,
    roomNumber:Number,
    roomType:String,
    amount:Number,
    duration:String,
    date:Date,
    endDate:Date
})