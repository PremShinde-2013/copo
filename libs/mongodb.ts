// utils/connectDB.ts

import mongoose from "mongoose";

const connectDB = async () => {
	try {
		if (!process.env.MONGODB_URI) {
			throw new Error("MongoDB URI is not defined");
		}

		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

export default connectDB;
