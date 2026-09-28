import { Drawer } from "expo-router/drawer";
import InstitutionalDrawer, { BRAND } from "../../../components/RoleDrawer";

const SCREEN_TITLES = {
  index: "Administrador",
  registerschool: "Registrar Escuela",
  matriculas: "Matrículas",
  students: "Estudiantes",
  roles: "Roles",
  catalogs: "Catálogos",
  perfil: "Perfil",
  documentation: "Revisión Documentación",
};

const SCREEN_META = {
  index: { label: "Inicio", icon: "home-outline" },
  registerschool: { label: "Registrar Escuela", icon: "add-circle-outline" },
  matriculas: { label: "Matrículas", icon: "document-text-outline" },
  students: { label: "Estudiantes", icon: "people-outline" },
  roles: { label: "Roles", icon: "shield-outline" },
  catalogs: { label: "Catálogos", icon: "folder-open-outline" },
  perfil: { label: "Perfil", icon: "person-outline" },
  documentation: { label: "Documentación", icon: "checkbox-outline" },
};

export default function AdminLayout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <InstitutionalDrawer {...props} screenMeta={SCREEN_META} />
      )}
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerType: "front",
        headerStyle: { backgroundColor: BRAND },
        headerTintColor: "#fff",
        drawerStyle: { backgroundColor: "#FFFFFF", width: 300 },
        title: SCREEN_TITLES[route.name] ?? "Administrador",
      })}
    >
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: "Administrador",
          title: "Administrador",
          drawerLabel: "Inicio",
        }}
      />
      <Drawer.Screen
        name="registerschool"
        options={{ title: "Registrar Escuela" }}
      />
      <Drawer.Screen name="matriculas" options={{ title: "Matrículas" }} />
      <Drawer.Screen name="students" options={{ title: "Estudiantes" }} />
      <Drawer.Screen name="roles" options={{ title: "Roles" }} />
      <Drawer.Screen name="catalogs" options={{ title: "Catálogos" }} />
      <Drawer.Screen name="perfil" options={{ title: "Perfil" }} />
      <Drawer.Screen
        name="documentation"
        options={{ title: "Revisión Documentación" }}
      />
    </Drawer>
  );
}
