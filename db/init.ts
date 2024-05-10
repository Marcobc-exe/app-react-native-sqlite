import { SQLiteDatabase } from "expo-sqlite";

export const initCreateTables = async (db: SQLiteDatabase) => {
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY UNIQUE NOT NULL, 
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      active INTEGER NOT NULL
    )`
  );

  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS farms (
      id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
      ownerId INTEGER REFERENCES users (id) NOT NULL,
      razonSocial TEXT NOT NULL,
      farmName TEXT NOT NULL
    )`
  );
};
