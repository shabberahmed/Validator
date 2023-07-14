import mongoose from "mongoose";

async function conn(){
   await mongoose.connect(process.env.URL)
.then("connected to mongoose")
.catch((err)=>console.log("mongoose error",err))
}
export default conn