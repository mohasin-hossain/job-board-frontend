import { z } from "zod";

// Zod validation schema for the Application Form
export const applicationValidationSchema = z.object({
  applicant_name: z
    .string({ required_error: "Applicant name is required" })
    .min(3, "Applicant name must be at least 3 characters long"),

  applicant_email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),

  cover_letter: z
    .string({ required_error: "Cover letter is required" })
    .min(20, "Cover letter must be at least 20 characters long"),
});
