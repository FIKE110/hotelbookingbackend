const {authLogin,authSignup} = require("../controllers/authcontroller")
const authRouter=require("express").Router()
const {getUserByCred} = require("../service/userService")

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

module.exports=authRouter