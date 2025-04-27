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
import express from "express"
const app = express()

dotenv.config({
    path:"./env"
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`dbconnected to port host : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("error:",error)
    app.on("error",()=>{
        console.log("error")
        throw error
    })
})