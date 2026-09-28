import { Stack } from "expo-router";

const infoScreenOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: "#152e4d" },
  headerTintColor: "#fff",
};

export default function ProtectedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(admin)" options={{ headerShown: false }} />
      <Stack.Screen name="(teacher)" options={{ headerShown: false }} />
      <Stack.Screen name="(students)" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ ...infoScreenOptions, title: "Nosotros" }} />
      <Stack.Screen name="services" options={{ ...infoScreenOptions, title: "Servicios" }} />
      <Stack.Screen name="faq" options={{ ...infoScreenOptions, title: "Preguntas" }} />
      <Stack.Screen name="contact" options={{ ...infoScreenOptions, title: "Contacto" }} />
      <Stack.Screen name="process" options={{ ...infoScreenOptions, title: "Proceso" }} />
      <Stack.Screen
        name="institution-detail"
        options={{ ...infoScreenOptions, title: "Institución" }}
      />
    </Stack>
  );
}
