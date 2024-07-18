import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  appointment: {
    type: Schema.Types.ObjectId,
    ref: "Appointment",
  },
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref: "Report",
    },
  ],
  patientId: {
    type: String,
    required: true,
    unique: true,
    default: `P${Math.floor(Math.random()) * 100000}`,
  },
  address: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

export const Patient = mongoose.model("Patient", patientSchema);
