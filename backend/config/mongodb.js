import mongoose from "mongoose";

const url = process.env.URL;
const connectDB = async () => {
    try {
        // Attach event listeners before connecting
        mongoose.connection.on('connected', () => {
            console.log("DB connected");
        });
        
        mongoose.connection.on('error', (err) => {
            console.error("DB connection error:", err);
        });

        await mongoose.connect(url);
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};

export default connectDB;
