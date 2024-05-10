import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQueriesUsers } from "@/db/users/useQueriesUsers";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

export default function Home() {
  const { getUser, updateUser, createUser, deleteUser, dropUserTable } = useQueriesUsers();

  const handleConnection = async () => {
    // const response = await dropUserTable()
    // console.log(response)

    // const response = await deleteUser(82)
    // console.log(response)

    // const listUsers = await getUser()
    // console.log(listUsers)
    
    // const body = {
    //   name: "Marco Bravo",
    //   password: "panconjamon",
    //   active: 1,
    // };
    // const response = await createUser(body);
    // console.log(response);

    // const body = {
    //   id: 82,
    //   name: "Santa Isabel",
    //   password: "asdfasf",
    //   active: 0,
    // };
    // const users = await updateUser(body);
    // console.log(users);
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
