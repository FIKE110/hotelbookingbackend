import User from '../models/user.js'
import Hotel from '../models/hotel.js'

async function getHotels(){
    const result=await Hotel.find({})
    return result
}

async function addHotel(data){
    const newHotel=new Hotel(data)
    await newHotel.save()
    return {msg:"data was successfully added",data:newHotel}
}

async function findHotelById(id){
    const result=Hotel.findById(id)
    .then(data=>data)
    .catch(err=>console.log(err))
    
    return result;
}

async function findHotel(data){
    const result=Hotel.find(data)
    .then(data=>data)
    .catch(err=>console.log(err))
    
    return result;
}

async function updateHotelById(id,data){
    const result=await Hotel.findByIdAndUpdate(id,data)
    console.log(result)
    return result
}

async function deleteHotelById(id){
    const result=await Hotel.findByIdAndDelete(id)
    return result
}

export default {getHotels,addHotel,findHotelById,findHotel,updateHotelById,deleteHotelById}