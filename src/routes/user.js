import express from 'express'
import userController from "../controllers/usercontroller.js"

const Router=express.Router()

Router.get("/",userController.listUsers)
Router.get("/:id",userController.getUserById)
Router.post("/add",userController.createUser)
Router.put("/:id",userController.updateUserById)
Router.delete("/:id",userController.deleteUserById)

export default Router