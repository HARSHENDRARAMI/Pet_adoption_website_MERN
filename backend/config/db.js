import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb+srv://hrcreates2021:MongoC0@cluster0.y2xcbrd.mongodb.net/?retryWrites=true&w=majority);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
