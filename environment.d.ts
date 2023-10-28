export interface ProcessEnv {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;

      DATABASE_URL: string;
      PGHOST: string;
      PGDATABASE: string;
      PGPORT: string;
      PGUSER: string;
      PGPASSWORD: string;
      PGSSLMODE: string;
    }
  }
}
