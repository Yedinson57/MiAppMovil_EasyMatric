import { Drawer } from "expo-router/drawer";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

// IMPORTACIÓN DEL LOGO
import logo from "../../../assets/icons/LogoAzul.png";

export default function AdminLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerType: "front", // Forzar vista flotante estilo móvil
        headerStyle: {
          backgroundColor: "#152e4d",
        },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#152e4d",
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerStyle: {
          backgroundColor: "#FFFFFF",
          width: 300,
        },
      }}
    >
      <Drawer.Screen
        name="dashboard"
        options={{
          title: "Inicio",
          drawerLabel: "Inicio",
        }}
      />
      <Drawer.Screen
        name="registerschool"
        options={{
          title: "Registrar Escuela",
          drawerLabel: "Registrar Escuela",
        }}
      />
      <Drawer.Screen
        name="matriculas"
        options={{
          title: "Matrículas",
          drawerLabel: "Matrículas",
        }}
      />
      <Drawer.Screen
        name="students"
        options={{
          title: "Estudiantes",
          drawerLabel: "Estudiantes",
        }}
      />
      <Drawer.Screen
        name="roles"
        options={{
          title: "Roles",
          drawerLabel: "Roles",
        }}
      />
      <Drawer.Screen
        name="reports"
        options={{
          title: "Reportes",
          drawerLabel: "Reportes",
        }}
      />
      <Drawer.Screen
        name="catalogs"
        options={{
          title: "Catálogos",
          drawerLabel: "Catálogos",
        }}
      />
      <Drawer.Screen
        name="perfil"
        options={{
          title: "Perfil",
          drawerLabel: "Perfil",
        }}
      />
      <Drawer.Screen
        name="documentation"
        options={{
          title: "Revisión Documentación",
          drawerLabel: "Revisión Documentación",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: "Configuración",
          drawerLabel: "Configuración",
        }}
      />
    </Drawer>
  );
}

function CustomDrawerContent() {
  const handleLogout = () => {
    if (Platform.OS === "web") {
      const confirmLogout = window.confirm(
        "¿Estás seguro de que deseas cerrar sesión?"
      );
      if (confirmLogout) {
        router.replace("/(auth)/login");
      }
    } else {
      Alert.alert(
        "Cerrar sesión",
        "¿Estás seguro de que deseas cerrar sesión?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Cerrar sesión",
            style: "destructive",
            onPress: () => {
              router.replace("/(auth)/login");
            },
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>EASYmatric</Text>
          <Text style={styles.logoSubtitle}>Portal Administrativo</Text>
        </View>

        {/* MENÚ ADMINISTRADOR */}
        <View style={styles.menuContainer}>
          <DrawerItem
            icon="home-outline"
            label="Inicio"
            onPress={() => router.push("/(protected)/(admin)")}
          />
          <DrawerItem
            icon="plus-circle-outline"
            label="Registrar Escuela"
            onPress={() => router.push("/(protected)/(admin)/registerschool")}
          />
          <DrawerItem
            icon="document-text-outline"
            label="Matrículas"
            onPress={() => router.push("/(protected)/(admin)/matriculas")}
          />
          <DrawerItem
            icon="people-outline"
            label="Estudiantes"
            onPress={() => router.push("/(protected)/(admin)/students")}
          />
          <DrawerItem
            icon="shield-outline"
            label="Roles"
            onPress={() => router.push("/(protected)/(admin)/roles")}
          />
          <DrawerItem
            icon="folder-open-outline"
            label="Catálogos"
            onPress={() => router.push("/(protected)/(admin)/catalogs")}
          />
          <DrawerItem
            icon="person-outline"
            label="Perfil"
            onPress={() => router.push("/(protected)/(admin)/perfil")}
          />
          <DrawerItem
            icon="bar-chart-outline"
            label="Reportes"
            onPress={() => router.push("/(protected)/(admin)/reports")}
          />
          <DrawerItem
            icon="checkbox-outline"
            label="Documentación"
            onPress={() => router.push("/(protected)/(admin)/documentation")}
          />
        </View>

        {/* ROL ACTUAL */}
        <View style={styles.roleSection}>
          <Text style={styles.sectionLabel}>ROL ACTUAL</Text>
          <View style={styles.roleContainer}>
            <View style={styles.roleIcon}>
              <Ionicons
                name="shield-checkmark-outline"
                size={21}
                color="#152e4d"
              />
            </View>
            <View>
              <Text style={styles.roleTitle}>Administrador</Text>
              <Text style={styles.roleSubtitle}>Gestión de Sistema</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* CERRAR SESIÓN */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={23}
            color="#DC2626"
          />
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DrawerItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Ionicons name={icon} size={23} color="#152e4d" />
      <Text style={styles.menuLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  logo: {
    width: 120,
    height: 80,
    marginBottom: 5,
  },
  logoText: {
    fontSize: 23,
    fontWeight: "800",
    color: "#152e4d",
  },
  logoSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 3,
  },
  menuContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 5,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1F2937",
    marginLeft: 15,
  },
  roleSection: {
    marginTop: 15,
    marginHorizontal: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#9CA3AF",
    letterSpacing: 1,
    marginBottom: 12,
  },
  roleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF3C7",
    borderRadius: 14,
    padding: 13,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  roleIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  roleTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#152e4d",
  },
  roleSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    padding: 15,
  },
  logoutButton: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#DC2626",
    marginLeft: 15,
  },
});