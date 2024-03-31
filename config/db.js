import mongoose from "mongoose"

const connectDB=()=>{
mongoose.connect("mongodb://127.0.0.1:27017/hoteldb")
.then(()=>console.log("successfully connected to mongodb"))
.catch(err=>console.log(err))
}

export {connectDB,mongoose} 