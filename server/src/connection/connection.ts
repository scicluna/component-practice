// src/database.ts
import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/users');

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

export default connectDatabase;
