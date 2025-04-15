import { DataSource } from "typeorm";
import * as SQLite from "expo-sqlite";

import { UserCnpj } from "./models/User";

const db = SQLite.openDatabaseAsync("inovadb.db");

export const MainDataSource = new DataSource({
    type: "expo",
    database: "inovadb.db",
    driver: db,
    entities: [
        UserCnpj
    ],
    synchronize: true
})