import { Ionicons } from "@expo/vector-icons";
import { router, usePathname, useSegments } from "expo-router";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const logo = require("../assets/icons/LogoAzul.png");

export const BRAND = "#152e4d";

const MENU_ITEMS = [
  { label: "Nosotros", icon: "business-outline", href: "/about" },
  { label: "Servicios", icon: "briefcase-outline", href: "/services" },
  { label: "Preguntas", icon: "help-circle-outline", href: "/faq" },
  { label: "Contacto", icon: "mail-outline", href: "/contact" },
];

function getRoleInfo(segments) {
  if (segments.includes("(admin)")) {
    return {
      title: "Administrador",
      subtitle: "Gestión de Sistema",
      icon: "shield-checkmark-outline",
      portal: "Portal Administrativo",
    };
  }
  if (segments.includes("(teacher)")) {
    return {
      title: "Docente",
      subtitle: "Cuenta de Docente",
      icon: "briefcase-outline",
      portal: "Portal Docente",
    };
  }
  if (segments.includes("(students)")) {
    return {
      title: "Estudiante",
      subtitle: "Cuenta de Estudiante",
      icon: "school-outline",
      portal: "Portal Estudiantil",
    };
  }
  return {
    title: "EASYmatric",
    subtitle: "Información institucional",
    icon: "information-circle-outline",
    portal: "Digital Enrollment",
  };
}

export default function InstitutionalDrawer({
  navigation,
  state,
  screenMeta,
}) {
  const pathname = usePathname();
  const segments = useSegments();
  const currentRole = getRoleInfo(segments);
  const hasRoleRoutes = Boolean(screenMeta && state?.routes);

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
          { text: "Cancelar", style: "cancel" },
          {
            text: "Cerrar sesión",
            style: "destructive",
            onPress: () => router.replace("/(auth)/login"),
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
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.logoText}>EASYmatric</Text>
          <Text style={styles.logoSubtitle}>{currentRole.portal}</Text>
        </View>

        <View style={styles.menuContainer}>
          {hasRoleRoutes
            ? state.routes.map((route, index) => {
                const meta = screenMeta[route.name];
                if (!meta) return null;

                const isFocused = state.index === index;

                return (
                  <MenuItem
                    key={route.key}
                    icon={meta.icon}
                    label={meta.label}
                    isFocused={isFocused}
                    onPress={() => {
                      navigation.navigate(route.name);
                      navigation.closeDrawer();
                    }}
                  />
                );
              })
            : null}

          {hasRoleRoutes ? <View style={styles.extraDivider} /> : null}

          {MENU_ITEMS.map((item) => {
            const isFocused =
              pathname === item.href || pathname?.endsWith(item.href);

            return (
              <MenuItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                isFocused={isFocused}
                onPress={() => {
                  navigation.closeDrawer();
                  router.push(item.href);
                }}
              />
            );
          })}
        </View>

        <View style={styles.roleSection}>
          <Text style={styles.sectionLabel}>ROL ACTUAL</Text>
          <View style={styles.roleContainer}>
            <View style={styles.roleIcon}>
              <Ionicons name={currentRole.icon} size={21} color={BRAND} />
            </View>
            <View>
              <Text style={styles.roleTitle}>{currentRole.title}</Text>
              <Text style={styles.roleSubtitle}>{currentRole.subtitle}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={23} color="#DC2626" />
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MenuItem({ icon, label, onPress, isFocused }) {
  return (
    <TouchableOpacity
      style={[styles.menuItem, isFocused && styles.menuItemActive]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Ionicons name={icon} size={23} color={isFocused ? "#FFFFFF" : BRAND} />
      <Text style={[styles.menuLabel, isFocused && styles.menuLabelActive]}>
        {label}
      </Text>
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
    color: BRAND,
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
  extraDivider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
    marginHorizontal: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 5,
  },
  menuItemActive: {
    backgroundColor: BRAND,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1F2937",
    marginLeft: 15,
  },
  menuLabelActive: {
    color: "#FFFFFF",
    fontWeight: "700",
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
    backgroundColor: "#E8EEF5",
    borderRadius: 14,
    padding: 13,
    borderWidth: 1,
    borderColor: "#C5D0DE",
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
    color: BRAND,
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
