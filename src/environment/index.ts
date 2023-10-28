import * as dotenv from "dotenv";
import { ZodError, z } from "zod";

const environmentSchema = z.object(
  {
    NODE_ENV: z.enum(["development", "production"], {
      required_error: "NODE_ENV is required",
      invalid_type_error:
        "NODE_ENV must be either 'development' or 'production'",
    }),
    PORT: z.string({
      required_error: "PORT is required",
      invalid_type_error: "PORT must be a string",
    }),
    DATABASE_URL: z.string({
      required_error: "DATABASE_URL is required",
      invalid_type_error: "DATABASE_URL must be a string",
    }),
    PGHOST: z.string({
      required_error: "PGHOST is required",
      invalid_type_error: "PGHOST must be a string",
    }),
    PGDATABASE: z.string({
      required_error: "PGDATABASE is required",
      invalid_type_error: "PGDATABASE must be a string",
    }),
    PGPORT: z.string({
      required_error: "PGPORT is required",
      invalid_type_error: "PGPORT must be a string",
    }),
    PGUSER: z.string({
      required_error: "PGUSER is required",
      invalid_type_error: "PGUSER must be a string",
    }),
    PGPASSWORD: z.string({
      required_error: "PGPASSWORD is required",
      invalid_type_error: "PGPASSWORD must be a string",
    }),
    PGSSLMODE: z.string({
      required_error: "PGSSLMODE is required",
      invalid_type_error: "PGSSLMODE must be a string",
    }),
  },
  {
    required_error: "Environment was not found",
  }
);

export const loadEnvIntoProcess = () => {
  try {
    // if available, load .env file into process.env
    dotenv.config();

    // make sure process.env contains all required variables
    environmentSchema.parse(process.env);
  } catch (error) {
    console.error("Something went wrong while parsing environment");

    if (error instanceof ZodError) {
      console.error(error.format());
      // format zod error to show which env variables are missing then print it to console (including name of the missing env variable)
      process.exit(1);
    }

    throw error;
  }
};
