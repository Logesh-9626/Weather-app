import express from "express";
import dotenv from "dotenv";
import connectDb from "./Database/ConnectDb.js";
import UserRoute from "./Routes/UserRoute.js"
import { notFound,errorHandlar } from "./Middlewares/ErrorHandler.js";
import cors from "cors"

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use("/api/user",UserRoute)


app.get("/",(req,res)=>{
    res.send("ok")
})





app.use(notFound)
app.use(errorHandlar)
app.listen(process.env.PORT,()=>{
    connectDb();
    console.log(`server running in ${process.env.PORT}`)
})
