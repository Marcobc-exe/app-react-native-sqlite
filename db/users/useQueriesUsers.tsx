import { openDatabaseAsync, openDatabaseSync } from "expo-sqlite";

export const useQueriesUsers = () => {
  const getUser = async () => {
    const db = await openDatabaseAsync("dbTesting.db");

    try {
      return await db.getFirstAsync("SELECT * FROM users");
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (name: string, password: string) => {
    const db = await openDatabaseAsync("dbTesting.db");

    try {
      return await db.runAsync(
        "INSERT INTO users (name, password) VALUES (?,?)",
        name,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (userId: number, name: string, password: string) => {
    const db = await openDatabaseAsync("dbTesting.db");

    try {
      return await db.runAsync(
        "UPDATE users SET name=?, password=? WHERE id=?",
        name,
        password,
        userId
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId: number) => {
    const db = await openDatabaseAsync("dbTesting.db");

    try {
      return await db.runAsync("DELETE FROM users WHERE id=?", userId);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUser,
    createUser,
    updateUser,
    deleteUser,
  };
};
