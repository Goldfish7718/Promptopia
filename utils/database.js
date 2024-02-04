import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('Database is already connected');
        return;
    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: 'Promptopia',
            })

            isConnected = true;

            console.log("Database Connected");
        } catch (err) {
            console.log(err);
        }
    }
}