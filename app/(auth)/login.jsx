import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import RoleSelector from "../../components/RoleSelector";
import Colors from "../../constants/colors";

export default function Login() {
  const router = useRouter();

  // Estados de formulario
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estados de errores de validación
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Función de validación e inicio de sesión
  const handleLogin = () => {
    let isValid = true;
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    const cleanRole = (role || "").toString().toLowerCase().trim();

    // Validar Email
    if (!cleanEmail) {
      setEmailError("El correo es obligatorio");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(cleanEmail)) {
      setEmailError("Correo electrónico inválido");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validar Contraseña
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

    // Identificación flexible del rol seleccionado
    const isAdminRole = cleanRole.includes("admin") || cleanRole === "administrador";
    const isTeacherRole = cleanRole.includes("teacher") || cleanRole.includes("docente") || cleanRole.includes("instructor");
    const isStudentRole = cleanRole.includes("student") || cleanRole.includes("estudiante") || cleanRole.includes("aprendiz");

    // Verificación de credenciales demo
    const isAdminUser = (cleanEmail === "admin@soy.easymatric.edu" || cleanEmail === "admin@soy.easymatric.edu") && cleanPassword === "admin123";
    const isTeacherUser = (cleanEmail === "instructor@soy.easymatric.edu" || cleanEmail === "instructor@soy.easymatric.edu") && cleanPassword === "instructor124";
    const isStudentUser = (cleanEmail === "aprendiz@soy.easymatric.edu" || cleanEmail === "aprendiz@soy.easymatric.edu") && cleanPassword === "aprendiz789";

    if (isAdminRole && isAdminUser) {
      router.replace("/(protected)/(admin)");
    } else if (isTeacherRole && isTeacherUser) {
      router.replace("/(protected)/(teacher)");
    } else if (isStudentRole && isStudentUser) {
      router.replace("/(protected)/(tabs)");
    } else {
      Alert.alert(
        "Error de autenticación",
        "El correo, contraseña o rol no coinciden.\n\nCredenciales de prueba:\n• Aprendiz: aprendiz@soy.easymatric.edu / aprendiz789\n• Instructor: instructor@soy.easymatric.edu / instructor124\n• Admin: admin@soy.easymatric.edu / admin123"
      );
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Logo />

        <Text style={styles.title}>¡Hola de nuevo!</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar en EasyMatric</Text>

        {/* SELECTOR DE ROL */}
        <RoleSelector selectedRole={role} onSelect={setRole} />

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