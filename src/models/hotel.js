import mongoose from "mongoose"
const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:Number
    },
    image:{
        type:String,
        default:"https://hotels/default.png"
    },
    description:{
        type:String,
        default:"Best hotel in town"
    },
    perks:[String],
    availableRooms:{
        type:Number,
        required:true
    },
    vipRooms:{
        rooms:{
            type:[Number]
        },

    },
    totalRooms:{
        type:Number,
        required:true
    }
},{collection:"hotels"})

export default mongoose.model("hotel",hotelSchema)