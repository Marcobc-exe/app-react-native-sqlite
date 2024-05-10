import { openDatabaseAsync, openDatabaseSync } from "expo-sqlite";

export const useQueriesUsers = () => {
  const getUser = async () => {
    const db = await openDatabaseAsync("dbTesting.db");
    const statement = await db.prepareAsync("SELECT * FROM users");

    try {
      const result = await statement.executeAsync();
      return await result.getAllAsync();
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  };

  type Create = {
    name: string;
    password: string;
    active: number;
  };

  const createUser = async (body: Create) => {
    const db = await openDatabaseAsync("dbTesting.db");
    const statement = await db.prepareAsync(
      "INSERT INTO users (name, password, active) VALUES ($name, $password, $active)"
    );

    try {
      const response = await statement.executeAsync({
        $name: body.name,
        $password: body.password,
        $active: body.active,
      });

      return await db.getFirstAsync(
        "SELECT * FROM users WHERE id=?",
        response.lastInsertRowId
      );
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  };

  type Update = {
    id: number;
    name: string;
    password: string;
    active: number;
  };

  const updateUser = async (body: Update) => {
    const db = await openDatabaseAsync("dbTesting.db");
    const statement = await db.prepareAsync(
      "UPDATE users SET name=$name, password=$password, active=$active WHERE id=$id"
    );

    try {
      await statement.executeAsync({
        $id: body.id,
        $name: body.name,
        $password: body.password,
        $active: body.active,
      });

      return await db.getFirstAsync("SELECT * FROM users WHERE id=?", body.id);
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  };

  const deleteUser = async (id: number) => {
    const db = await openDatabaseAsync("dbTesting.db");
    const statement = await db.prepareAsync("DELETE FROM users WHERE id=$id");

    try {
      return await statement.executeAsync({ $id: id });
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  };

  const dropUserTable = async () => {
    const db = await openDatabaseAsync("dbTesting.db");
    const statement = await db.prepareAsync("DROP TABLE IF EXISTS users");

    try {
      return await statement.executeAsync();
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  };

  return {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    dropUserTable,
  };
};
