const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //const connectionString = "mongodb://localhost:27017/citas";
    const connectionString = process.env.ATLAS_URI;
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;