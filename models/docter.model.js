import mongoose, { Schema } from "mongoose";

const docterSchema = new Schema({
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
  pendingAppointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  newAppointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  rejectedAppointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  previousAppointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
  ],
  specialties: [
    {
      type: String,
      required: true,
    },
  ],
  docterId: {
    type: String,
    required: true,
    unique: true,
    default: `D${Math.floor(Math.random()) * 100000}`,
  },
  address: {
    type: String,
    required: true,
  },
  availableDays: {
    type: Array,
    required: true,
    default: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
});

mongoose.models = {};

export const Docter = mongoose.model("Docter", docterSchema);
