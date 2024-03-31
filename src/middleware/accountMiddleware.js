import jwtService from "../service/jwtService.js"
const accountMiddleware=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    const user=jwtService.verifyToken(token)
    if(user.id){
        next()
    }
    else{
        res.json({msg:"error occured"})
    }
}


export default accountMiddleware