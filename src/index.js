import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js"

const app = express()
dotenv.config()

connectDB()
.then(() => {
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
   })
})
.catch((error) => {
    console.log (" MONGO db onnection failed !!!", error);
})



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