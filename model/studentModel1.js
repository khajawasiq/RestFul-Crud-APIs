import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Corrected spelling
  },
  email: {
    type: String,
    required: true, // Corrected spelling
  },
  age: {
    type: Number,
    required: true, // Corrected spelling
  },
});

// Model name should be singular by convention
export default mongoose.model("students", studentSchema);
