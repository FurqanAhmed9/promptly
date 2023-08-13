import mongoose from "mongoose";
const {MONGODB_URI}=process.env;

let isConnected=false;

export const connectToDB=async()=>{
    mongoose.set("strictQuery",true);

    if(isConnected){
      console.log("MongoDB is already connected")
      
      return
    }

    try {
        await mongoose.connect(MONGODB_URI,{
            dbName:"share_prompt",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        isConnected=true
        console.log("MongoDB Connected")

    } catch (error) {
        console.log("Error connecting to MongoDB: ",MONGODB_URI," ",error);
    }
}
