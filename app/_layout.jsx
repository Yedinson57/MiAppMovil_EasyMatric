import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function ProtectedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(admin)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}