const Router=require('express').Router()
const userController = require("../controllers/usercontroller")


Router.get("/",userController.listUsers)
Router.get("/:id",userController.getUserById)
Router.post("/add",userController.createUser)
Router.put("/:id",userController.updateUserById)
Router.delete("/:id",userController.deleteUserById)

module.exports=Router