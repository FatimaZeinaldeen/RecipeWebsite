import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectdb = async (dbURL) => {
    try{
        await mongoose.connect(dbURL).then(
            () => console.log("connected successfully..."),
            (err) => console.log("connection error", err)
        );
    }
    catch(error){
        console.log(error);
    }
};
connectdb(process.env.connectionString);
