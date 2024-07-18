import { connect, disconnect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
  }
};

export { connectDB, disconnectDB };
