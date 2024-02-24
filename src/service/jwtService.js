const Jwt=require("jsonwebtoken")

const SECRET_KEY="MJYTFCQWEIOP*()#$%__ORMooo"

const verifyToken=(token)=>{
    return Jwt.verify(token,SECRET_KEY,(err,decoded)=>{
        if(err) return err
        return decoded
    })
}

const signToken=(data)=>{
    const token=Jwt.sign(data,SECRET_KEY,{expiresIn:'30s'})
    return token
}

const decodeToken=(token)=>{
    const data=Jwt.decode(token)
    return data
}

module.exports={decodeToken,verifyToken,signToken}