import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import Colors from "../../constants/colors";

// Definición de roles con sus íconos
const ROLES = [
  { id: "student", label: "Student", icon: "school-outline" },
  { id: "teacher", label: "Teacher", icon: "person-outline" },
  { id: "admin", label: "Admin", icon: "shield-checkmark-outline" },
];

// Diccionario de usuarios demo válidos
const DEMO_USERS = {
  "admin@soy.easymatric.edu": {
    password: "admin123",
    role: "admin",
    route: "/(protected)/(admin)",
  },
  "instructor@soy.easymatric.edu": {
    password: "instructor124",
    role: "teacher",
    route: "/(protected)/(teacher)",
  },
  "aprendiz@soy.easymatric.edu": {
    password: "aprendiz789",
    role: "student",
    route: "/(protected)/(tabs)",
  },
};

export default function Login() {
  const router = useRouter();

  // Estados del formulario
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estados de errores para mostrar directo en la interfaz
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Función de validación e inicio de sesión
  const handleLogin = () => {
    let isValid = true;
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    // 1. Validar campo Email (Formato)
    if (!cleanEmail) {
      setEmailError("El correo es obligatorio");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(cleanEmail)) {
      setEmailError("Correo electrónico inválido");
      isValid = false;
    } else {
      setEmailError("");
    }

    // 2. Validar campo Contraseña (Formato)
    if (!cleanPassword) {
      setPasswordError("La contraseña es obligatoria");
      isValid = false;
    } else if (cleanPassword.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isValid) return;

    // 3. Verificar si el correo existe en la base de datos
    const user = DEMO_USERS[cleanEmail];

    if (!user) {
      setEmailError("Este correo electrónico no está registrado");
      return;
    }

    // 4. Verificar si la contraseña coincide
    if (user.password !== cleanPassword) {
      setPasswordError("Contraseña incorrecta");
      return;
    }

    // 5. Verificar si el rol seleccionado arriba coincide con la cuenta
    if (user.role !== role) {
      const rolesNombres = {
        admin: "Admin",
        teacher: "Teacher",
        student: "Student",
      };
      setEmailError(
        `Este correo pertenece al rol ${rolesNombres[user.role]}. Selecciona ese rol arriba.`
      );
      return;
    }

    // 6. Redirección exitosa
    router.replace(user.route);
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Logo />

        <Text style={styles.title}>¡Hola de nuevo!</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar en EasyMatric</Text>

        {/* SELECTOR DE ROL */}
        <View style={styles.roleContainer}>
          {ROLES.map((r) => {
            const isSelected = role === r.id;
            return (
              <TouchableOpacity
                key={r.id}
                style={[styles.roleButton, isSelected && styles.selectedRoleButton]}
                onPress={() => {
                  setRole(r.id);
                  if (emailError) setEmailError("");
                }}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={r.icon}
                  size={22}
                  color={isSelected ? Colors.primary || "#2563EB" : "#64748B"}
                />
                <Text style={[styles.roleText, isSelected && styles.selectedRoleText]}>
                  {r.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* CAMPO CORREO */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={[styles.input, emailError ? styles.inputError : null]}
            placeholder="correo@ejemplo.com"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (emailError) setEmailError("");
            }}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        {/* CAMPO CONTRASEÑA */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={[styles.input, passwordError ? styles.inputError : null]}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (passwordError) setPasswordError("");
            }}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>

        {/* OLVIDÉ CONTRASEÑA */}
        <TouchableOpacity
          style={styles.forgotContainer}
          onPress={() => router.push("/(auth)/forgot_password")}
        >
          <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        {/* BOTÓN INICIAR SESIÓN */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          <Ionicons name="log-in-outline" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        {/* REGISTRO */}
        <View style={styles.registerRow}>
          <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/(auth)/register",
                params: { role: role },
              })
            }
          >
            <Text style={styles.registerLink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
    textAlign: "center",
  },
  roleContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: 4,
  },
  selectedRoleButton: {
    borderColor: Colors.primary || "#2563EB",
    backgroundColor: "#EFF6FF",
  },
  roleText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
  },
  selectedRoleText: {
    color: Colors.primary || "#2563EB",
  },
  fieldContainer: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 11,
    fontSize: 15,
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
  },
  inputError: {
    borderColor: "#DC2626",
  },
  errorText: {
    color: "#DC2626",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 3,
  },
  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 20,
    marginTop: -4,
  },
  forgotText: {
    color: Colors.primary || "#2563EB",
    fontSize: 13,
    fontWeight: "600",
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.primary || "#2563EB",
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 6,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  registerText: {
    color: "#64748B",
    fontSize: 13,
  },
  registerLink: {
    color: Colors.primary || "#2563EB",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 5,
  },
});