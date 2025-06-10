import { Stack } from "expo-router";
import { colors } from "@/styles/colors";

export default function UserDetailsLayout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: colors.gray[100],
      },
      headerTintColor: colors.gray[300],
    }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="[albumId]" options={{}} />
    </Stack>
  );
}
