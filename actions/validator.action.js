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
    userType: Joi.string()
      .required()
      .valid("admin" || "docter" || "patient"),
  });

  schema.validate(data, (err, value) => {
    if (err) {
      // throw new Error(err);
      console.log(err);
    } else {
      console.log("Data is valid");
      console.log(value);
    }
  });
};
