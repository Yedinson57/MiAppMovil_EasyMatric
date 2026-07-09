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
        name="index"
        options={{ title: " Inicio" }}
      />

      <Drawer.Screen
        name="nosotros"
        options={{ title: " Nosotros" }}
      />

      <Drawer.Screen
        name="servicios"
        options={{ title: " Servicios" }}
      />

      <Drawer.Screen
        name="preguntas"
        options={{ title: " Preguntas" }}
      />

      <Drawer.Screen
        name="contacto"
        options={{ title: " Contacto" }}
      />

      <Drawer.Screen
        name="login"
        options={{ title: " Iniciar sesión" }}
      />
    </Drawer>
  );
}