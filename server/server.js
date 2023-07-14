import Express  from "express";
import cors from "cors"
import dotenv from "dotenv";
import conn from "./database/conn.js";
import route from "./routes/validationRoutes.js";
const app=Express()
app.use(Express.json())
app.use(cors())
dotenv.config()
app.use(route)
conn()
.then(()=>{
    app.listen(2000,()=>console.log("server started at 2000"))
})
.catch((err)=>console.log(err))
