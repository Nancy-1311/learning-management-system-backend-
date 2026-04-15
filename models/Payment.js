import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },

  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
    required: true, 
  },

  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true, 
  },

  tutorName: String,

  amount: {
    type: Number,
    required: true, 
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Payment", paymentSchema);
