import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Colors from "../../constants/colors";

// Esquema de validación con Yup
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),
});

export default function ForgotPassword() {
  const router = useRouter();

  // Función segura para regresar sin romper la app
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(auth)/login");
    }
  };

  const handleResetPassword = (values) => {
    const cleanEmail = values.email.trim();

    Alert.alert(
      "Enlace enviado",
      `Hemos enviado las instrucciones para restablecer tu contraseña a:\n\n${cleanEmail}`,
      [
        {
          text: "Volver al Login",
          onPress: handleBack,
        },
      ]
    );
  };

  return (
    <ScreenContainer>

      {/* SECCIÓN SUPERIOR */}
      <View style={styles.topSection}>
        <Logo />
      </View>

      {/* SECCIÓN INFERIOR */}
      <View style={styles.bottomSection}>

        <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
        
        <Text style={styles.subtitle}>
          Ingresa el correo electrónico asociado a tu cuenta de EasyMatric y te enviaremos un enlace de recuperación.
        </Text>

        {/* FORMULARIO FORMIK */}
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={handleResetPassword}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              {/* INPUT EMAIL */}
              <CustomInput
                label="Email"
                placeholder="Correo Electrónico"
                icon="mail-outline"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* BOTÓN DE ENVIAR */}
              <CustomButton
                title="Enviar instrucciones"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>

        {/* VOLVER AL LOGIN */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backText}>
            ← Volver a Iniciar Sesión
          </Text>
        </TouchableOpacity>

      </View>

    </ScreenContainer>
  );
}

const styles = StyleSheet.create({

  topSection: {
    flex: 1,
    backgroundColor: Colors.primary || "#2563EB",
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

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text || "#0F172A",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary || "#64748B",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 20,
  },

  errorText: {
    color: "#DC2626",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 12,
    marginLeft: 3,
  },

  backButton: {
    marginTop: 25,
    alignItems: "center",
  },

  backText: {
    color: Colors.primary || "#2563EB",
    fontWeight: "700",
    fontSize: 15,
  },

});