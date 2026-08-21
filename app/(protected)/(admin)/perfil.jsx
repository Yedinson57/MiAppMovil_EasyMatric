import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileMobileScreen() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [weeklyReportEnabled, setWeeklyReportEnabled] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. TARJETA DE PERFIL GENERAL */}
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300?img=11" }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.cameraButton} activeOpacity={0.8}>
            <Ionicons name="camera" size={14} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>Juan Andres Estrada Erazo</Text>
        <Text style={styles.userRole}>Rector Institucional</Text>

        <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.8}>
          <Ionicons name="create-outline" size={16} color="#FFFFFF" />
          <Text style={styles.editProfileText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* 2. DATOS DE IDENTIFICACIÓN */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="id-card-outline" size={18} color="#2563EB" />
          <Text style={styles.cardTitle}>Datos de Identificación</Text>
        </View>

        <Text style={styles.inputLabel}>Número de Cédula</Text>
        <View style={styles.readOnlyInput}>
          <Text style={styles.inputText}>10058191</Text>
        </View>

        <Text style={styles.inputLabel}>Cargo Oficial</Text>
        <View style={styles.readOnlyInput}>
          <Text style={styles.inputText}>Rector Académico</Text>
        </View>

        <Text style={styles.inputLabel}>Correo Institucional</Text>
        <View style={styles.readOnlyInput}>
          <Text style={styles.inputText}>juanestrada@soysena.edu.co</Text>
        </View>
      </View>

      {/* 3. ENTIDAD VINCULADA */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="business-outline" size={18} color="#2563EB" />
          <Text style={styles.cardTitle}>Entidad Vinculada</Text>
        </View>

        <Text style={styles.inputLabel}>Institución Educativa</Text>
        <View style={styles.readOnlyInput}>
          <Text style={styles.inputText}>Institución Educación San Vicente</Text>
        </View>

        <Text style={styles.inputLabel}>NIT Institucional</Text>
        <View style={styles.readOnlyInput}>
          <Text style={styles.inputText}>800.123.456-1</Text>
        </View>

        <Text style={styles.inputLabel}>Teléfono Oficina</Text>
        <View style={styles.readOnlyInput}>
          <Text style={styles.inputText}>602 823 4567</Text>
        </View>
      </View>

      {/* 4. MI ACTIVIDAD */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="stats-chart-outline" size={18} color="#2563EB" />
          <Text style={styles.cardTitle}>Mi Actividad</Text>
        </View>

        <View style={styles.activityRow}>
          <Text style={styles.activityLabel}>Matrículas revisadas</Text>
          <Text style={styles.activityValue}>124</Text>
        </View>
        <View style={styles.activityRow}>
          <Text style={styles.activityLabel}>Sedes a cargo</Text>
          <Text style={styles.activityValue}>02</Text>
        </View>
      </View>

      {/* 5. SEGURIDAD */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="shield-checkmark-outline" size={18} color="#2563EB" />
          <Text style={styles.cardTitle}>Seguridad</Text>
        </View>

        <Text style={styles.securitySubtext}>Control de acceso y credenciales.</Text>

        <TouchableOpacity style={styles.changePasswordButton} activeOpacity={0.8}>
          <Text style={styles.changePasswordText}>Cambiar mi clave</Text>
        </TouchableOpacity>
      </View>

      {/* 6. CONFIGURACIÓN DE SISTEMA */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="settings-outline" size={18} color="#2563EB" />
          <Text style={styles.cardTitle}>Sistema</Text>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Alertas de Cupos</Text>
          <Switch
            value={alertsEnabled}
            onValueChange={setAlertsEnabled}
            trackColor={{ false: "#E5E7EB", true: "#3B82F6" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Modo Reporte Semanal</Text>
          <Switch
            value={weeklyReportEnabled}
            onValueChange={setWeeklyReportEnabled}
            trackColor={{ false: "#E5E7EB", true: "#3B82F6" }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  avatarContainer: {
    alignSelf: "center",
    position: "relative",
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  cameraButton: {
    position: "absolute",
    bottom: 2,
    right: 2,
    backgroundColor: "#1D4ED8",
    padding: 7,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },
  userRole: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 16,
  },
  editProfileButton: {
    flexDirection: "row",
    backgroundColor: "#3B82F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    gap: 6,
  },
  editProfileText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  inputLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 10,
    marginBottom: 4,
  },
  readOnlyInput: {
    backgroundColor: "#F8FAFC",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  inputText: {
    fontSize: 14,
    color: "#1E293B",
    fontWeight: "500",
  },
  activityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  activityLabel: {
    fontSize: 14,
    color: "#64748B",
  },
  activityValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },
  securitySubtext: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: 14,
  },
  changePasswordButton: {
    backgroundColor: "#F1F5F9",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  changePasswordText: {
    fontSize: 14,
    color: "#334155",
    fontWeight: "600",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  switchLabel: {
    fontSize: 14,
    color: "#334155",
  },
});