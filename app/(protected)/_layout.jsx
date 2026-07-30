import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: "#152e4d",
        },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#152e4d",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ title: "Inicio", drawerLabel: "Inicio" }}
      />

      <Drawer.Screen
        name="about"
        options={{ title: "Nosotros" }}
      />

      <Drawer.Screen
        name="services"
        options={{ title: "Servicios" }}
      />

      <Drawer.Screen
        name="faq"
        options={{ title: "Preguntas" }}
      />

      <Drawer.Screen
        name="contact"
        options={{ title: "Contacto" }}
      />
    </Drawer>
  );
}