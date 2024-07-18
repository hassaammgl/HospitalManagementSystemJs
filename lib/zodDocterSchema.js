import { z } from "zod";

export const docterSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(20, {
      message: "Username must be less than 20 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .max(20, {
      message: "Password must be less than 20 characters.",
    }),

  confirmPassword: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .max(20, {
      message: "Password must be less than 20 characters.",
    }),
  dob: z.date({
    message: "Please enter a valid date.",
  }),
  phone: z
    .string()
    .min(11, {
      message: "Phone number must be 11 characters long.",
    })
    .max(11, {
      message: "Phone number must be 11 characters long.",
    }),
  gender: z.string({
    message: "Please select your gender.",
  }),

  avatar: z.string(),
  specialties: z.array(z.string()),
  address: z.string(),
  availableDays: z.array(z.string()),
});
