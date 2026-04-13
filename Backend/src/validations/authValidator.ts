import { z } from "zod";

export const userSchema = z.object({
  email: z.email("Invalid email").optional(),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile must be 10 digits").optional(),
  password: z.string().min(6, "Password must be at least 6 chars"),
})
.refine(data => data.email || data.mobile, {
  message: "Either email or mobile is required",
})
.refine(data => !(data.email && data.mobile), {
  message: "Provide either email or mobile, not both",
});