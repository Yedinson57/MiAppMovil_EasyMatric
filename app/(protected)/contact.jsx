import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "../../components/ScreenContainer";
import Colors from "../../constants/colors";

export default function ContactScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        {/* Título */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Contacto y Soporte
          </Text>

          <Text style={styles.subtitle}>
            ¿Tiene preguntas sobre el proceso de inscripción?
            Estamos aquí para ayudarle.
          </Text>
        </View>


        {/* Información de contacto */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Informacion de Contacto
          </Text>


          {/* Teléfono */}
          <View style={styles.contactItem}>

            <View style={styles.iconContainer}>
              <Ionicons
                name="call"
                size={22}
                color={Colors.primary}
              />
            </View>

            <View style={styles.contactText}>
              <Text style={styles.contactTitle}>
                Soporte Telefonico
              </Text>

              <Text style={styles.contactValue}>
                (602) 820 0000 - Ext 102
              </Text>
            </View>

          </View>


          {/* Correo */}
          <View style={styles.contactItem}>

            <View style={styles.iconContainer}>
              <Ionicons
                name="mail"
                size={22}
                color={Colors.primary}
              />
            </View>

            <View style={styles.contactText}>
              <Text style={styles.contactTitle}>
                Email
              </Text>

              <Text style={styles.contactValue}>
                secretaria@easymatric.edu.co
              </Text>
            </View>

          </View>


          {/* Horario */}
          <View style={styles.contactItem}>

            <View style={styles.iconContainer}>
              <Ionicons
                name="time"
                size={22}
                color={Colors.primary}
              />
            </View>

            <View style={styles.contactText}>
              <Text style={styles.contactTitle}>
                Horario de atención
              </Text>

              <Text style={styles.contactValue}>
                Lunes a Viernes
              </Text>

              <Text style={styles.contactValue}>
                7:00 AM - 4:00 PM
              </Text>
            </View>

          </View>

        </View>


        {/* Formulario */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Envianos un mensaje
          </Text>

          <Text style={styles.formDescription}>
            Cuéntenos sobre su pregunta o problema y nuestro equipo le ayudará.
          </Text>


          {/* Nombre */}
          <View style={styles.inputGroup}>

            <Text style={styles.label}>
              Nombre Completo
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ex. Juan Pérez"
              placeholderTextColor={Colors.textSecondary}
            />

          </View>


          {/* Correo */}
          <View style={styles.inputGroup}>

            <Text style={styles.label}>
              Email
            </Text>

            <TextInput
              style={styles.input}
              placeholder="email@example.com"
              placeholderTextColor={Colors.textSecondary}
              keyboardType="email-address"
              autoCapitalize="none"
            />

          </View>


          {/* Mensaje */}
          <View style={styles.inputGroup}>

            <Text style={styles.label}>
              Mensaje
            </Text>

            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Tell us about your question..."
              placeholderTextColor={Colors.textSecondary}
              multiline
              textAlignVertical="top"
            />

          </View>


          {/* Botón */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => console.log("Consulta enviada")}
          >

            <Ionicons
              name="send"
              size={18}
              color="#FFFFFF"
            />

            <Text style={styles.buttonText}>
              ENVIAR MENSAJE
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>
    </ScreenContainer>
  );
}


const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 40,
  },


  /* HEADER */

  header: {
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.text,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
    marginTop: 8,
  },


  /* CARD */

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: 20,
  },


  /* CONTACT INFORMATION */

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  contactText: {
    flex: 1,
  },

  contactTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 4,
  },

  contactValue: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },


  /* FORM */

  formDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textSecondary,
    marginTop: -10,
    marginBottom: 20,
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 13,
    paddingHorizontal: 15,
    fontSize: 15,
    color: Colors.text,
    backgroundColor: "#FAFAFA",
  },

  messageInput: {
    height: 120,
    paddingTop: 15,
  },


  /* BUTTON */

  button: {
    height: 54,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
    marginTop: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

});