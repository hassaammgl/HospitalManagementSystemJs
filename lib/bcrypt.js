"use server";

import bcryptjs from "bcryptjs";


export const hashPassword = (password) => {
  return bcryptjs.hash(password, 10);
};

export const verifyPassword = (password, hashedPassword) => {
  return bcryptjs.compare(password, hashedPassword);
};
