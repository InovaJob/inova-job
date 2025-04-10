import { DataSource } from "typeorm";
import * as SQLite from "expo-sqlite";

import { UserCnpj } from "./models/User";

const db = SQLite.openDatabaseAsync("database.db");

export const AppDataSource = new DataSource({
    type: "expo",
    driver: db,
    database: "database.db",
    synchronize: true,
    entities: [
        UserCnpj
    ]  
})
