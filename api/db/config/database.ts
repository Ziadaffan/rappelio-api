import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_DB_URI || "mongodb://localhost:27017/rappelio"
    );
    if (process.env.NODE_ENV === "development") {
      console.log(`🔌 Connected to MongoDB: ${conn.connection.host}`);
    }
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    if (process.env.NODE_ENV === "development") {
      console.log("⚠️ Please make sure to:");
      console.log("1. Check if your IP is whitelisted in MongoDB Atlas");
      console.log("2. Verify your connection string in .env file");
      console.log("3. Ensure your MongoDB Atlas cluster is running");
    }
    // En production, on ne veut pas arrêter le serveur
    if (process.env.NODE_ENV === "development") {
      process.exit(1);
    }
  }
};
