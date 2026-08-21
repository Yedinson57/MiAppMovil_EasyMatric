import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AdminHome() {
  // Datos de ejemplo para las métricas (puedes reemplazarlos con datos de tu API)
  const stats = [
    {
      id: "1",
      title: "Estudiantes",
      value: "1,248",
      icon: "people-outline",
      color: "#3B82F6",
      bgColor: "#EFF6FF",
    },
    {
      id: "2",
      title: "Matrículas",
      value: "450",
      icon: "document-text-outline",
      color: "#10B981",
      bgColor: "#ECFDF5",
    },
    {
      id: "3",
      title: "Instituciones",
      value: "18",
      icon: "business-outline",
      color: "#F59E0B",
      bgColor: "#FEF3C7",
    },
    {
      id: "4",
      title: "Pendientes",
      value: "32",
      icon: "time-outline",
      color: "#EF4444",
      bgColor: "#FEF2F2",
    },
  ];

  // Acciones rápidas para el Administrador
  const quickActions = [
    {
      id: "1",
      title: "Registrar Escuela",
      icon: "add-circle-outline",
      route: "/(protected)/(admin)/registerschool",
    },
    {
      id: "2",
      title: "Ver Matrículas",
      icon: "folder-open-outline",
      route: "/(protected)/(admin)/matriculas",
    },
    {
      id: "3",
      title: "Revisar Docs",
      icon: "checkbox-outline",
      route: "/(protected)/(admin)/documentation",
    },
    {
      id: "4",
      title: "Generar Reportes",
      icon: "bar-chart-outline",
      route: "/(protected)/(admin)/reports",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* CABECERA */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>¡Hola, Administrador! 👋</Text>
          <Text style={styles.subtitle}>
            Resumen general del sistema EasyMatric
          </Text>
        </View>
        <TouchableOpacity
          style={styles.profileBadge}
          onPress={() => router.push("/(protected)/(admin)/perfil")}
        >
          <Ionicons name="person-circle-outline" size={40} color="#152e4d" />
        </TouchableOpacity>
      </View>

      {/* TARJETAS MÉTRICAS (GRID DE 2 COLUMNAS) */}
      <Text style={styles.sectionTitle}>Métricas clave</Text>
      <View style={styles.statsGrid}>
        {stats.map((item) => (
          <View key={item.id} style={styles.statCard}>
            <View
              style={[styles.iconContainer, { backgroundColor: item.bgColor }]}
            >
              <Ionicons name={item.icon} size={24} color={item.color} />
            </View>
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statTitle}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* ACCIONES RÁPIDAS */}
      <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
      <View style={styles.quickActionsContainer}>
        {quickActions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.actionButton}
            activeOpacity={0.7}
            onPress={() => router.push(action.route)}
          >
            <View style={styles.actionIconBg}>
              <Ionicons name={action.icon} size={22} color="#152e4d" />
            </View>
            <Text style={styles.actionText}>{action.title}</Text>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </View>

      {/* ACTIVIDAD RECIENTE */}
      <Text style={styles.sectionTitle}>Actividad Reciente</Text>
      <View style={styles.activityCard}>
        <View style={styles.activityItem}>
          <Ionicons name="checkmark-circle" size={20} color="#10B981" />
          <View style={styles.activityTextContainer}>
            <Text style={styles.activityTitle}>Nueva solicitud aprobada</Text>
            <Text style={styles.activitySub}>Institución Educativa Central</Text>
          </View>
          <Text style={styles.activityTime}>Hace 10m</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.activityItem}>
          <Ionicons name="document-text" size={20} color="#3B82F6" />
          <View style={styles.activityTextContainer}>
            <Text style={styles.activityTitle}>Documentos cargados</Text>
            <Text style={styles.activitySub}>Estudiante: Carlos Pérez</Text>
          </View>
          <Text style={styles.activityTime}>Hace 1h</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "800",
    color: "#152e4d",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  profileBadge: {
    padding: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 14,
    marginTop: 10,
  },
  /* METRICAS */
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statCard: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
  },
  statTitle: {
    fontSize: 13,
    color: "#64748B",
    fontWeight: "500",
    marginTop: 2,
  },
  /* ACCIONES RÁPIDAS */
  quickActionsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 15,
    elevation: 1,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  actionIconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  actionText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#334155",
  },
  /* ACTIVIDAD RECIENTE */
  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 1,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E293B",
  },
  activitySub: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  activityTime: {
    fontSize: 11,
    color: "#94A3B8",
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 12,
  },
});