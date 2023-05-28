import mongoose from "mongoose";
async function mongoCon() {
    try {
      await mongoose.connect('mongodb+srv://tester321:tester321@cluster0.tz3y6pr.mongodb.net/test', {
        serverSelectionTimeoutMS: 30000, // 30 seconds timeout

      });
  
      console.log('Connected to the database');
    } catch (error) {
      console.error('Connection error:', error);
    }
  }
  
  
  export {mongoCon}
  