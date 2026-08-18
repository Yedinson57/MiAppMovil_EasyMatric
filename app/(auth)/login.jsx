import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import RoleSelector from "../../components/RoleSelector";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Colors from "../../constants/colors";

export default function Login() {
  // Rol seleccionado
  const [role, setRole] = useState("student");

  // Datos del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Iniciar sesión según el rol
  function handleLogin() {
    console.log("Iniciando sesión:", {
      email,
      password,
      role,
    });

    // ADMINISTRADOR
    if (role === "admin") {
      router.replace("/(protected)/(admin)");
    }

    // DOCENTE
    else if (role === "teacher") {
      router.replace("/(protected)/(teacher)");
    }

    // ESTUDIANTE
    else {
      router.replace("/(protected)/(tabs)");
    }
  }

  return (
    <ScreenContainer>

      {/* SECCIÓN SUPERIOR */}
      <View style={styles.topSection}>
        <Logo />
      </View>

      {/* SECCIÓN INFERIOR */}
      <View style={styles.bottomSection}>

        {/* TÍTULO */}
        <Text style={styles.welcome}>
          Welcome Back!
        </Text>

        {/* SELECTOR DE ROL */}
        <RoleSelector
          selectedRole={role}
          onSelect={setRole}
        />

        {/* EMAIL */}
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
        />

        {/* CONTRASEÑA */}
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          icon="lock-closed-outline"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* RECUPERAR CONTRASEÑA */}
        <TouchableOpacity
          onPress={() =>
            router.push("/(auth)/forgot_password")
          }
        >
          <Text style={styles.forgot}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* BOTÓN LOGIN */}
        <CustomButton
          title="Login"
          onPress={handleLogin}
        />

        {/* REGISTRO */}
        <View style={styles.registerContainer}>

          <Text style={styles.registerText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push("/(auth)/register")
            }
          >
            <Text style={styles.register}>
              Register
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </ScreenContainer>
  );
}

const styles = StyleSheet.create({

  topSection: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomSection: {
    flex: 2,
    backgroundColor: "#fff",
    padding: 25,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -25,
  },

  welcome: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },

  forgot: {
    color: Colors.primary,
    alignSelf: "flex-end",
    marginBottom: 10,
    fontWeight: "600",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  registerText: {
    color: Colors.textSecondary,
  },

  register: {
    color: Colors.primary,
    fontWeight: "700",
    marginLeft: 6,
  },

});