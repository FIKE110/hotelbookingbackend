import jwtService from "../service/jwtService.js"
import userController from "./usercontroller.js"


const {signToken} = jwtService
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

export default authcontroller