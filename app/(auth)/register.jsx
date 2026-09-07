import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";

import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import Colors from "../../constants/colors";

const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),

  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Debes confirmar la contraseña"),

  role: Yup.string()
    .required("Debes seleccionar un rol"),
});

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

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },

    validationSchema,

    onSubmit: (values) => {
      Alert.alert(
        "Registro exitoso",
        `Usuario: ${values.nombre}\nRol: ${values.role}`
      );

      console.log("Datos enviados:", values);

      // Por ahora regresamos al login
      router.replace("/(auth)/login");
    },
  });

  return (
    <ScreenContainer>

      <View style={styles.container}>

        <Logo />

        <Text style={styles.title}>
          Crear cuenta
        </Text>

        <Text style={styles.subtitle}>
          Completa tus datos para registrarte en EasyMatric
        </Text>


        {/* NOMBRE */}

        <View style={styles.fieldContainer}>

          <Text style={styles.label}>
            Nombre completo
          </Text>

          <TextInput
            style={[
              styles.input,
              formik.touched.nombre &&
              formik.errors.nombre &&
              styles.inputError,
            ]}
            placeholder="Ej. Carlos Mendoza"
            placeholderTextColor="#94A3B8"
            onChangeText={formik.handleChange("nombre")}
            onBlur={formik.handleBlur("nombre")}
            value={formik.values.nombre}
          />

          {formik.touched.nombre && formik.errors.nombre && (
            <Text style={styles.errorText}>
              {formik.errors.nombre}
            </Text>
          )}

        </View>


        {/* EMAIL */}

        <View style={styles.fieldContainer}>

          <Text style={styles.label}>
            Correo electrónico
          </Text>

          <TextInput
            style={[
              styles.input,
              formik.touched.email &&
              formik.errors.email &&
              styles.inputError,
            ]}
            placeholder="correo@ejemplo.com"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email && (
            <Text style={styles.errorText}>
              {formik.errors.email}
            </Text>
          )}

        </View>


        {/* CONTRASEÑA */}

        <View style={styles.fieldContainer}>

          <Text style={styles.label}>
            Contraseña
          </Text>

          <TextInput
            style={[
              styles.input,
              formik.touched.password &&
              formik.errors.password &&
              styles.inputError,
            ]}
            placeholder="Mínimo 6 caracteres"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password && (
            <Text style={styles.errorText}>
              {formik.errors.password}
            </Text>
          )}

        </View>


        {/* CONFIRMAR CONTRASEÑA */}

        <View style={styles.fieldContainer}>

          <Text style={styles.label}>
            Confirmar contraseña
          </Text>

          <TextInput
            style={[
              styles.input,
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword &&
              styles.inputError,
            ]}
            placeholder="Repite tu contraseña"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            onChangeText={formik.handleChange("confirmPassword")}
            onBlur={formik.handleBlur("confirmPassword")}
            value={formik.values.confirmPassword}
          />

          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword && (
              <Text style={styles.errorText}>
                {formik.errors.confirmPassword}
              </Text>
            )}

        </View>


        {/* SELECCIÓN DE ROL */}

        <Text style={styles.labelRol}>
          Selecciona tu rol
        </Text>

        <View style={styles.rolesContainer}>

          {roles.map((item) => {

            const selected = formik.values.role === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.roleCard,
                  selected && styles.roleCardSelected,
                ]}
                onPress={() =>
                  formik.setFieldValue("role", item.id)
                }
                activeOpacity={0.7}
              >

                <View
                  style={[
                    styles.iconBox,
                    selected && styles.iconBoxSelected,
                  ]}
                >

                  <Ionicons
                    name={item.icon}
                    size={22}
                    color={
                      selected
                        ? "#FFFFFF"
                        : Colors.primary
                    }
                  />

                </View>

                <View style={styles.roleTextContainer}>

                  <Text style={styles.roleTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.roleSubtitle}>
                    {item.subtitle}
                  </Text>

                </View>

                {selected && (
                  <Ionicons
                    name="checkmark-circle"
                    size={22}
                    color={Colors.primary}
                  />
                )}

              </TouchableOpacity>
            );
          })}

        </View>

        {formik.touched.role && formik.errors.role && (
          <Text style={styles.errorText}>
            {formik.errors.role}
          </Text>
        )}


        {/* BOTÓN */}

        <TouchableOpacity
          style={styles.registerButton}
          onPress={formik.handleSubmit}
          disabled={formik.isSubmitting}
          activeOpacity={0.8}
        >

          <Text style={styles.registerButtonText}>
            Registrarse
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#FFFFFF"
          />

        </TouchableOpacity>


        {/* LOGIN */}

        <View style={styles.loginRow}>

          <Text style={styles.loginText}>
            ¿Ya tienes una cuenta?
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.replace("/(auth)/login")
            }
          >

            <Text style={styles.loginLink}>
              Inicia sesión
            </Text>

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
    marginBottom: 10,
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

  labelRol: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginTop: 5,
    marginBottom: 8,
  },

  rolesContainer: {
    gap: 8,
  },

  roleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  roleCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: "#EFF6FF",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  iconBoxSelected: {
    backgroundColor: Colors.primary,
  },

  roleTextContainer: {
    flex: 1,
    marginLeft: 10,
  },

  roleTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },

  roleSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2,
  },

  registerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.primary,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 18,
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },

  loginText: {
    color: "#64748B",
    fontSize: 13,
  },

  loginLink: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 5,
  },

});