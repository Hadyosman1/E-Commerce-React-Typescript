import { z } from "zod";

const loginScheme = z.object({
  email: z.string().min(1, { message: "Email address is required" }).email(),
  password: z.string().min(8, { message: "Must be at least 8 digits" }),
});

type LoginType = z.infer<typeof loginScheme>;

export { loginScheme, type LoginType };
