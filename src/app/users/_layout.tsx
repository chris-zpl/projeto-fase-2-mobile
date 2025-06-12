import { Stack } from "expo-router";
import { colors } from "@/styles/colors";

export default function UsersLayout() {
  return (
    <Stack
      screenOptions={{
        title:"",
        headerStyle: {
          backgroundColor: colors.gray[100],
        },
        headerTintColor: colors.gray[300],
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[userId]" />
      <Stack.Screen name="[userId]/[albumId]" />
      <Stack.Screen
        name="[userId]/[albumId]/[photoId]"
        options={{
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: colors.white,
        }}
      />
    </Stack>
  );
}
