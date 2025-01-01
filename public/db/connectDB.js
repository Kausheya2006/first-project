import mongoose from "mongoose";

const connectDb = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://${process.env.NEXT_PUBLIC_URL}/item`, {
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  export default connectDb