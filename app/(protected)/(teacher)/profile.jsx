import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TeacherProfile() {
  const [newStudents, setNewStudents] = useState(true);
  const [closingReminders, setClosingReminders] = useState(true);

  const updateProfile = () => {
    Alert.alert(
      "Actualizar datos",
      "La edición del perfil se conectará posteriormente con Laravel."
    );
  };

  const changePassword = () => {
    Alert.alert(
      "Cambiar contraseña",
      "Esta función se conectará posteriormente con el sistema de autenticación."
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* PERFIL */}

      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={48}
            color="#152E4D"
          />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            Carlos Alberto Mendoza
          </Text>

          <Text style={styles.role}>
            Docente de Planta - Humanidades
          </Text>

          <View style={styles.location}>
            <Ionicons
              name="location-outline"
              size={15}
              color="#64748B"
            />

            <Text style={styles.locationText}>
              Popayán, Colombia
            </Text>
          </View>
        </View>
      </View>

      <Pressable
        style={styles.updateButton}
        onPress={updateProfile}
      >
        <Ionicons
          name="create-outline"
          size={19}
          color="#FFFFFF"
        />

        <Text style={styles.updateButtonText}>
          Actualizar Datos
        </Text>
      </Pressable>

      {/* INFORMACIÓN PROFESIONAL */}

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#152E4D"
          />

          <Text style={styles.cardTitle}>
            Información Profesional
          </Text>
        </View>

        <ProfileData
          label="Nombres"
          value="Carlos Alberto"
        />

        <ProfileData
          label="Apellidos"
          value="Mendoza Ruíz"
        />

        <ProfileData
          label="Número de Identificación"
          value="10.452.963"
        />

        <ProfileData
          label="ID Registro Docente"
          value="DOC-2026-88"
        />

        <ProfileData
          label="Especialidad Académica"
          value="Licenciatura en Lengua Castellana y Literatura"
        />

        <ProfileData
          label="Sede Educativa Asignada"
          value="Institución Educación San Vicente - Sede Principal"
        />

        <ProfileData
          label="Teléfono de Contacto"
          value="315 789 0123"
        />

        <ProfileData
          label="Correo Institucional"
          value="carlos.mendoza@easymatric.edu.co"
          last
        />
      </View>

      {/* SEGURIDAD */}

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="shield-checkmark-outline"
            size={22}
            color="#152E4D"
          />

          <Text style={styles.cardTitle}>
            Seguridad
          </Text>
        </View>

        <Text style={styles.securityText}>
          Mantén tu cuenta protegida y actualiza tu contraseña
          periódicamente.
        </Text>

        <Pressable
          style={styles.securityButton}
          onPress={changePassword}
        >
          <Ionicons
            name="key-outline"
            size={19}
            color="#152E4D"
          />

          <Text style={styles.securityButtonText}>
            Cambiar contraseña
          </Text>
        </Pressable>
      </View>

      {/* PREFERENCIAS */}

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="settings-outline"
            size={22}
            color="#152E4D"
          />

          <Text style={styles.cardTitle}>
            Preferencias
          </Text>
        </View>

        <Preference
          title="Avisos de Alumnos Nuevos"
          value={newStudents}
          onChange={setNewStudents}
        />

        <Preference
          title="Recordatorios de Cierre"
          value={closingReminders}
          onChange={setClosingReminders}
        />
      </View>
    </ScrollView>
  );
}

function ProfileData({ label, value, last }) {
  return (
    <View
      style={[
        styles.dataItem,
        last && styles.dataItemLast,
      ]}
    >
      <Text style={styles.dataLabel}>
        {label}
      </Text>

      <View style={styles.dataBox}>
        <Text style={styles.dataValue}>
          {value}
        </Text>
      </View>
    </View>
  );
}

function Preference({ title, value, onChange }) {
  return (
    <View style={styles.preference}>
      <Text style={styles.preferenceText}>
        {title}
      </Text>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{
          false: "#CBD5E1",
          true: "#BAE6FD",
        }}
        thumbColor={value ? "#152E4D" : "#F8FAFC"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  profileHeader: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,

    backgroundColor: "#E0F2FE",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: "800",
    color: "#152E4D",
  },

  role: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  locationText: {
    fontSize: 12,
    color: "#64748B",
    marginLeft: 4,
  },

  updateButton: {
    height: 48,
    backgroundColor: "#152E4D",
    borderRadius: 11,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 12,
    marginBottom: 16,
  },

  updateButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 8,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#152E4D",
    marginLeft: 9,
  },

  dataItem: {
    marginBottom: 14,
  },

  dataItemLast: {
    marginBottom: 0,
  },

  dataLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
    marginBottom: 6,
  },

  dataBox: {
    backgroundColor: "#F8FAFC",
    borderRadius: 9,
    padding: 12,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  dataValue: {
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
  },

  securityText: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 20,
    marginBottom: 15,
  },

  securityButton: {
    height: 46,

    backgroundColor: "#E0F2FE",

    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  securityButtonText: {
    color: "#152E4D",
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 8,
  },

  preference: {
    minHeight: 55,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  preferenceText: {
    flex: 1,
    fontSize: 14,
    color: "#334155",
    marginRight: 10,
  },
});