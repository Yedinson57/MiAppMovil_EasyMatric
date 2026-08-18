import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import ScreenContainer from "../../components/ScreenContainer";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Colors from "../../constants/colors";

export default function Form() {
  // Captura el rol enviado desde register.jsx
  // Roles: admin, teacher, student
  const { role } = useLocalSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    console.log("Registrando usuario:", {
      name,
      email,
      password,
      role,
    });

    // Redirigir según el rol
    if (role === "admin") {
      // Administrador
      router.replace("/(protected)/(admin)");
    } else if (role === "teacher") {
      // Docente
      router.replace("/(protected)/(teacher)");
    } else {
      // Estudiante
      router.replace("/(protected)/(tabs)");
    }
  }

  // Nombre del rol que se mostrará en pantalla
  const roleLabel =
    role === "admin"
      ? "Administrador"
      : role === "teacher"
      ? "Docente"
      : "Estudiante";

  return (
    <ScreenContainer>
      <View style={styles.container}>

        {/* Título */}
        <Text style={styles.title}>
          Registro de {roleLabel}
        </Text>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Completa tus datos para crear tu cuenta
        </Text>

        {/* Nombre */}
        <CustomInput
          label="Nombre Completo"
          placeholder="Ingresa tu nombre"
          icon="person-outline"
          value={name}
          onChangeText={setName}
        />

        {/* Email */}
        <CustomInput
          label="Email"
          placeholder="Ingresa tu correo"
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
        />

        {/* Contraseña */}
        <CustomInput
          label="Contraseña"
          placeholder="Crea una contraseña"
          icon="lock-closed-outline"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Botón crear cuenta */}
        <CustomButton
          title="Crear Cuenta"
          onPress={handleRegister}
        />

        {/* Volver */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>
            Volver a la selección de rol
          </Text>
        </TouchableOpacity>

      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 24,
    marginTop: 4,
  },

  backButton: {
    marginTop: 20,
    alignItems: "center",
  },

  backText: {
    color: Colors.primary,
    fontWeight: "600",
  },
});