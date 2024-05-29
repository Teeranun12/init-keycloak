import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: ".env" });

const config = {
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "password",
  database: process.env.DATABASE_DATABASE || "init-keycloak",
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities: true,
  synchronize: false,
};
export default registerAs("typeorm", () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
