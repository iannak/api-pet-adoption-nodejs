import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database/database.sqlite",
  synchronize: true,

  entities: [],
})