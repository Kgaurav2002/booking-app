import express from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
const app = express()

dotenv.config()
  
 
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb.")
      } catch (error) {
       throw error;
      }
};
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected!")
})




// app.get("/",(req,res) =>{
//     res.send("hello first request!")
// })

app.use(express.json())

app.use("/auth",authRoute);
app.use("/users",usersRoute);
app.use("/rooms",roomsRoute);
app.use("/hotels",hotelsRoute);

app.listen(8800,()=>{ 
    connect() 
    console.log("connected to backend!");
})