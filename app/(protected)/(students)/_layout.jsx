import { Drawer } from "expo-router/drawer";
import InstitutionalDrawer, { BRAND } from "../../../components/RoleDrawer";

export default function StudentsLayout() {
  return (
    <Drawer
      drawerContent={(props) => <InstitutionalDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerType: "front",
        headerStyle: { backgroundColor: BRAND },
        headerTintColor: "#fff",
        drawerStyle: { backgroundColor: "#FFFFFF", width: 300 },
        title: "Estudiante",
      }}
    >
      <Drawer.Screen
        name="(portal)"
        options={{
          title: "Estudiante",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
