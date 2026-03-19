import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!!!", error);
  });



/*
import express from "express"
const app = express()

(async () => { 
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}
            /${DB_NAME}` )
            app.on ("error", (err) => {
                console.log("Error :", err)
                throw error
            })
            app.listen(process.env.PORT,() =>{ 
                console.log (`app is running on port ${process.env.port}`)
            })    
            
    } catch (error) {
        console.error("Error :", error)
        throw err
    }
})()*/