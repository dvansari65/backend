// import express from "express"
// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }}`)
//         app.on("error",()=>{
//             console.log("error")
//             throw(error)
//         })
//         app.listen(process.env.PORT,()=>{
//                 console.log(`app is listening on the ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("error:",error)
//         throw(error)
//     }
// })()

import dotenv from "dotenv"
import connectDB from "./db/index.js";

import app from "./app.js";

dotenv.config({
    path:"./.env"
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on  port host : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("error:",error)
    app.on("error",()=>{
        console.log("error")
        throw error
    })
})

