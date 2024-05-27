import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: ".env" });

const config = {
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || "init-keycloak",
  password: process.env.DATABASE_PASSWORD || "keycloak",
  database: process.env.DATABASE_DATABASE || "password",
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrations: ["dist/migrations/*{.ts,.js}"],
  autoLoadEntities: true,
  synchronize: false,
};
export default registerAs("typeorm", () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
