import User from "../models/user.js"

async function createUser(data){
    const newUser = new User(data)
    return newUser.save()
    .then((data)=>data)
    .catch(err=>{
        throw err
    })
}

async function listUsers(){
    return User.find({})
    .then(data=>data)
    .catch(err=>console.log(err))
}

async function getUserById(id){
    return User.findById(id)
    .then(data=>data)
    .catch(err=>err)
}

async function getUserByCred(cred){
    return User.findOne(cred)
    .then(data=>data)
    .catch(err=>err)
}

async function updateUserById(id,data){
    return User.findByIdAndUpdate(id,data)
    .then(data=>data)
    .catch(err=>err)
}

async function deleteUserById(id){
    return User.findByIdAndDelete(id)
    .then(data=>data)
    .catch(err=>err)
}

export default {createUser,listUsers,getUserById,updateUserById,deleteUserById,getUserByCred}