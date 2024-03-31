import getHotelsService from "../service/hotelService.js"

const hotelcontroller={
    getHotels:(req,res)=>{
        getHotelsService.getHotels()
        .then((data)=>res.json(data))
        .catch(err=>console.log(err))
    },

    addHotel: (req,res)=>{
        console.log(req.body)
        res.json(getHotelsService.addHotel(req.body))
    },

    findHotelById:(req,res)=>{
        const id=req.params.id
        getHotelsService.findHotelById(id)
        .then((data)=>res.json(data))
        .catch(err=>console.log(err))
    },

    updateHotelById:(req,res)=>{
        const id=req.params.id
        const body=req.body
        getHotelsService.updateHotelById(id,body)
        .then((data)=>res.json(data))
        .catch(err=>console.log(err))
    }
    ,
    deleteHotelById:(req,res)=>{
        const id=req.params.id
        getHotelsService.deleteHotelById(id)
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
    }
}

export default hotelcontroller