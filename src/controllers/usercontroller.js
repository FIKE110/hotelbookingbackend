const userService=require("../service/userService")

const userController={
    createUser:async (req,res)=>{
        const body=req.body
        const result=userService.createUser(body)
        .then(data=>res.json(data))
        .catch(err=>res.status(401).json(err))
    },
    listUsers: (req,res)=>{
        userService.listUsers()
        .then(data=>res.json(data))
        .catch(err=>res.send(err))
    },
    getUserById:(req,res)=>{
        const id=req.params.id
        userService.getUserById(id)
        .then(data=>res.json(data))
        .catch(err=>res.send(err))
    },
    updateUserById:(req,res)=>{
        const id=req.params.id
        const data=req.body
        userService.updateUserById(id,data)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
    },
    deleteUserById:(req,res)=>{
        const id=req.params.id
        userService.deleteUserById(id)
        .then(data=>res.json(data))
        .catch(err=>err)
    }
}

module.exports=userController