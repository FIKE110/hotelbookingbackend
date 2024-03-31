import express from "express"
import accountController from "../controllers/accountController.js"

const Router = express.Router()
Router.get("/hotels",accountController.getHotels)

export default Router