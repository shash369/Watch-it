import { app } from "./app.js";
import { connectDB } from "./db/index.js"
import dotenv from "dotenv";
dotenv.config();



connectDB().
then(()=>{
  
   app.listen(process.env.PORT||8000,()=>{
     console.log("app is listining at port 8000");
   })
   app.get('/postman',(req,res)=>{
    res.send("hello postman sucessfull connection")
   })
   
}).catch((err)=>{
    console.log("database connection error"+err);
    
})