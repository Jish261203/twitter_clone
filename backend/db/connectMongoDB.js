import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected to mongodb: ${con.connection.host}`);
	} catch (error) {
		console.log(`Error connection to mongodb:${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;
