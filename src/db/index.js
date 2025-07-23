import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
export async function connectDB() {
    try {
        const connectionIns=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(connectionIns.connection.host);
    } catch (error) {
        console.log("connection error "+error);
        process.exit(1);
    }

}

// export connectDB