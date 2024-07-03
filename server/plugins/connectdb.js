import mongoose from 'mongoose';

export default defineEventHandler(async () => {
  const MONGODB_URI = process.env.PUBLIC_MONGO_ID; // Replace with your connection URI

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
});
