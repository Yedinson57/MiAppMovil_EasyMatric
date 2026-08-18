import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import Colors from "../../constants/colors";

export default function Register() {
  const roles = [
    {
      id: "admin",
      title: "Administrador",
      subtitle: "Gestión institucional y control",
      icon: "shield-checkmark-outline",
    },
    {
      id: "teacher",
      title: "Docente",
      subtitle: "Gestión de módulos y evaluación",
      icon: "folder-open-outline",
    },
    {
      id: "student",
      title: "Estudiante / Aspirante",
      subtitle: "Proceso de matrícula y consultas",
      icon: "school-outline",
    },
  ];

  function handleSelectRole(roleId) {
    // Redirige al formulario enviando el rol seleccionado
    router.push({
      pathname: "/form",
      params: { role: roleId },
    });
  }

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Logo />

        <Text style={styles.title}>Bienvenido a EasyMatric</Text>
        <Text style={styles.subtitle}>
          Selecciona tu perfil para continuar con el registro
        </Text>

        {/* Lista de perfiles */}
        <View style={styles.rolesContainer}>
          {roles.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => handleSelectRole(item.id)}
              activeOpacity={0.7}
            >
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={24} color={Colors.primary} />
              </View>

              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Enlace a Login */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>¿Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
            <Text style={styles.loginLink}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Botones inferiores opcionales */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity 
            style={styles.secondaryButton} 
            onPress={() => router.replace("/(auth)/login")}
          >
            <Ionicons name="home-outline" size={16} color={Colors.primary} />
            <Text style={styles.secondaryButtonText}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton} 
            onPress={() => router.push("/faq")}
          >
            <Ionicons name="headset-outline" size={16} color={Colors.primary} />
            <Text style={styles.secondaryButtonText}>Soporte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 24,
    textAlign: "center",
  },
  rolesContainer: {
    width: "100%",
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },
  loginText: {
    color: "#64748B",
    fontSize: 14,
  },
  loginLink: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: 14,
  },
  bottomButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  secondaryButtonText: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: 13,
  },
});