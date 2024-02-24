const hotelcontroller = require("../controllers/hotelcontroller")
const Router=require('express').Router()

Router.get("/",hotelcontroller.getHotels)
Router.get("/:id",hotelcontroller.findHotelById)
Router.post("/add",hotelcontroller.addHotel)
Router.put("/:id",hotelcontroller.updateHotelById)
Router.delete("/:id",hotelcontroller.deleteHotelById)

module.exports=Router
