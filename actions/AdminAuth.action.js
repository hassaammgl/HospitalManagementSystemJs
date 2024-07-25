"use server";
import { connectDatabase } from "@/lib";
import { Admin } from "@/models";
import { hashPassword, validateData } from "@/lib";

const onSubmitSignup = async (values) => {
  const {
    username,
    email,
    password,
    dob,
    phone,
    gender,
    address,
    HospitalName,
  } = values;
  await connectDatabase();

  const { error, message } = validateData(values);

  if (error) {
    console.log(message);
    return {
      success: false,
      message: message,
    };
  }

  const hashedPassword = await hashPassword(password);

  const admin = new Admin({
    username,
    email,
    password: hashedPassword,
    dob,
    phone,
    gender,
    address,
    HospitalName,
  });

  console.log(admin);
  await admin.save();

  return {
    success: true,
    message: "Signup successful",
  }
};
const onSubmitLogin = async (values) => {};

export { onSubmitSignup, onSubmitLogin };
