import mongoose from "mongoose";


export const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/users')
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};