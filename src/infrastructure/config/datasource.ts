import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "init-keycloak",
  synchronize: false,
  entities: ["src/**/entity/*.entity.{ts,js}"],
  migrations: ["src/db/migrations/*{.ts,.js}"],
});
