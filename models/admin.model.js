import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  HospitalName: {
    type: String,
    required: true,
  },
  docters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Docter",
    },
  ],
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
  ],
  address: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

export const Admin = mongoose.model("Admin", adminSchema);
