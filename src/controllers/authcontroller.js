const {signToken} = require("../service/jwtService") 
const userController = require("./usercontroller")

const authcontroller={
    authLogin:(req,res)=>{
        const user=req.user
        const data={
            id:user.id,
            email:user.email
        }
        const token=signToken(data)
        res.json({token})
    },

    authSignup:(req,res)=>{
        userController.createUser(req,res)
    }
}

module.exports=authcontroller