import { z } from "zod";

export const sexEnum = z.enum(["MALE", "FEMALE"]);