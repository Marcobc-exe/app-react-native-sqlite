import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQueriesUsers } from "@/db/users/useQueriesUsers";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

export default function Home() {
  const { getUser, updateUser } = useQueriesUsers()
  const handleConnection = async () => {
    // const db = await openDatabaseAsync("dbTesting.db");
    // await db.runAsync("INSERT INTO users (name, password) VALUES (?,?)", "Marco", "qwerty123")
    // await db.runAsync(`
    //   INSERT INTO farms (ownerId, razonSocial, farmName)
    //   VALUES (?,?,?)
    //   `,
    //   1, "Iansa", "Finca Don Felipe"
    // )
    // const users = await updateUser(1, "Pedro", "123456")
    // console.log(users)
    // const farms = await db.getAllAsync(
    //   "SELECT * FROM farms WHERE id=?",
    //   users.id
    // );
    // console.log(farms);

    // await db.runAsync("DELETE FROM users WHERE id=3")
    // await db.runAsync("DROP TABLE IF EXISTS users")
    // await db.runAsync("DROP TABLE IF EXISTS farms")
  };

  useEffect(() => {
    handleConnection();
  }, []);

  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText type="title">Hello world</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
