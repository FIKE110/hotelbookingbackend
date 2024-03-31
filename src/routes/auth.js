import authcontroller from "../controllers/authcontroller.js"
import express from "express"
import userService from "../service/userService.js"

const {getUserByCred} = userService
const {authLogin,authSignup} =authcontroller
const authRouter=express.Router()
const authMiddleWare=(req,res,next)=>{
    const body=req.body
    console.log(body)
    getUserByCred(body)
    .then(data=>{
        if(data){
            req.user=data
            next()
        }
        else{
            throw {err:"Not found"}
        }
    })
    .catch(err=>res.send(err))
}

authRouter.post("/login",authMiddleWare,authLogin)
authRouter.post("/signup",authSignup)

export default authRouter