import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TeacherTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#152E4D",
        tabBarInactiveTintColor: "#9CA3AF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="modules"
        options={{
          title: "Mis Módulos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="book-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="upload"
        options={{
          title: "Subir Módulo",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="cloud-upload-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Mi Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* group NO es una pestaña */}
      <Tabs.Screen
        name="group"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}