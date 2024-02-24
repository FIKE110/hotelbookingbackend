const Router=require("express").Router()
const accountController=require("../controllers/accountController")

Router.get("/hotels",accountController.getHotels)

module.exports=Router