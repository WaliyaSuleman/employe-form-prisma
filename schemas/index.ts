import { z } from "zod"
export const employeeSchema = z.object({
    firstName: z.string().min(2, {
      message: "first name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "last name must be at least 2 characters.",
      }),
      email: z.string().email(),
      phoneNumber: z.string().min(11, {
        message: "phone number must be at least 11 characters.",
      }),

  })