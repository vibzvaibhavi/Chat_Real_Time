import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const {MONGO_URI} = process.env;
        if (!MONGO_URI) throw new Error("Mongo_URI is not sset");
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO CONNECTED", conn.connection.host)
    }  catch (error) {
        console.error("error connecting to mongodb", error)
        process.exit(1);

        
    }   
}