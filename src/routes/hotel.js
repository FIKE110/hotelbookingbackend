import hotelcontroller from "../controllers/hotelcontroller.js"
import express from 'express'
const Router = express.Router()

Router.get("/",hotelcontroller.getHotels)
Router.get("/:id",hotelcontroller.findHotelById)
Router.post("/add",hotelcontroller.addHotel)
Router.put("/:id",hotelcontroller.updateHotelById)
Router.delete("/:id",hotelcontroller.deleteHotelById)

export default Router
