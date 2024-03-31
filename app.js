import express from 'express'
import cors from 'cors'
import { connectDB } from "./config/db.js"
import authRouter from "./src/routes/auth.js"
import hotelRouter from "./src/routes/hotel.js"
import userRouter from "./src/routes/user.js"
import accountRouter from "./src/routes/account.js"
import accountMiddleware from "./src/middleware/accountMiddleware.js"
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/auth",authRouter)
app.use("/hotels",hotelRouter)
app.use("/users",userRouter)
app.use("/dashboard",accountMiddleware,accountRouter)

connectDB()

app.get("/",(req,res)=>{
    console.log("hello world")
    res.send("hello")
})

app.get("/login",(req,res)=>{
    res.redirect("/auth/login")
})

app.get("/auth/signup",(req,res)=>{
    console.log(req.body)
})

app.get("/auth/login",(req,res)=>{
    res.status(200).json({name:2})
})

app.get("*",(req,res)=>{
    res.send("error")
})

app.listen(3000,()=>{
    console.log("Server started at 3000")
})
