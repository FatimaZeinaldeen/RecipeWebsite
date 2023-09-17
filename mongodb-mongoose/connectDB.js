import mongoose from 'mongoose';
const url="mongodb+srv://FatimaZeinaldeen:FatimaZeinaldeen@cluster0.pxrudjw.mongodb.net/RecipeDB";

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
connectdb(url);
