"use server";

import Joi from "joi";

export const validateData = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    avatar: Joi.string(),
    password: Joi.string().required().max(20).min(8),
    email: Joi.string().required().email(),
    dob: Joi.string().required(),
    gender: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    HospitalName: Joi.string().required(),
  });

  schema.validate(data, (err, value) => {
    if (err) {
      console.log(err);
      return {
        error: true,
        message: err.message,
      }
    } else {
      console.log("Data is valid");
      console.log(value);
      return {
        error: false,
        message: "Data is valid",
      }
    }
  });
};
