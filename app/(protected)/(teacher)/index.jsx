import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function TeacherHome() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* BIENVENIDA */}

      <View style={styles.welcome}>
        <View style={styles.welcomeText}>
          <Text style={styles.greeting}>
            Bienvenido, Carlos
          </Text>

          <Text style={styles.welcomeDescription}>
            Gestiona tus módulos y estudiantes desde
            EasyMatric.
          </Text>
        </View>

        <View style={styles.teacherIcon}>
          <Ionicons
            name="school-outline"
            size={30}
            color="#152E4D"
          />
        </View>
      </View>

      {/* ESTADÍSTICAS */}

      <View style={styles.statsRow}>
        <StatCard
          icon="book-outline"
          value="3"
          label="Módulos"
        />

        <StatCard
          icon="people-outline"
          value="83"
          label="Estudiantes"
        />
      </View>

      <View style={styles.statsRow}>
        <StatCard
          icon="checkmark-circle-outline"
          value="2"
          label="Activos"
        />

        <StatCard
          icon="time-outline"
          value="1"
          label="Pendiente"
        />
      </View>

      {/* ACCIONES RÁPIDAS */}

      <Text style={styles.sectionTitle}>
        Acciones rápidas
      </Text>

      <View style={styles.quickActions}>
        <QuickAction
          icon="book-outline"
          title="Mis Módulos"
          description="Gestionar módulos"
          onPress={() =>
            router.push(
              "/(protected)/(Docente)/modules"
            )
          }
        />

        <QuickAction
          icon="cloud-upload-outline"
          title="Subir Módulo"
          description="Crear una asignatura"
          onPress={() =>
            router.push(
              "/(protected)/(Docente)/upload"
            )
          }
        />

        <QuickAction
          icon="person-outline"
          title="Mi Perfil"
          description="Ver información"
          onPress={() =>
            router.push(
              "/(protected)/(Docente)/profile"
            )
          }
        />

        <QuickAction
          icon="people-outline"
          title="Estudiantes"
          description="Ver grupos"
          onPress={() =>
            router.push(
              "/(protected)/(Docente)/group"
            )
          }
        />
      </View>

      {/* MÓDULOS RECIENTES */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Mis módulos
        </Text>

        <Pressable
          onPress={() =>
            router.push(
              "/(protected)/(Docente)/modules"
            )
          }
        >
          <Text style={styles.seeMore}>
            Ver todos
          </Text>
        </Pressable>
      </View>

      <ModuleCard
        name="Comprensión Lectora y Redacción"
        grade="3° Primaria"
        students="28 estudiantes"
        active
      />

      <ModuleCard
        name="Matemáticas Fundamentales"
        grade="4° Primaria"
        students="25 estudiantes"
        active
      />

      <ModuleCard
        name="Ciencias Naturales y Entorno"
        grade="5° Primaria"
        students="30 estudiantes"
      />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIcon}>
        <Ionicons
          name={icon}
          size={21}
          color="#152E4D"
        />
      </View>

      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function QuickAction({
  icon,
  title,
  description,
  onPress,
}) {
  return (
    <Pressable
      style={styles.quickAction}
      onPress={onPress}
    >
      <View style={styles.quickIcon}>
        <Ionicons
          name={icon}
          size={22}
          color="#152E4D"
        />
      </View>

      <Text style={styles.quickTitle}>
        {title}
      </Text>

      <Text style={styles.quickDescription}>
        {description}
      </Text>
    </Pressable>
  );
}

function ModuleCard({
  name,
  grade,
  students,
  active,
}) {
  return (
    <View style={styles.moduleCard}>
      <View style={styles.moduleIcon}>
        <Ionicons
          name="book-outline"
          size={22}
          color="#152E4D"
        />
      </View>

      <View style={styles.moduleInfo}>
        <Text
          style={styles.moduleName}
          numberOfLines={2}
        >
          {name}
        </Text>

        <Text style={styles.moduleDetails}>
          {grade} · {students}
        </Text>
      </View>

      <View
        style={[
          styles.status,
          active
            ? styles.statusActive
            : styles.statusPending,
        ]}
      >
        <Text
          style={[
            styles.statusText,
            active
              ? styles.statusTextActive
              : styles.statusTextPending,
          ]}
        >
          {active ? "Activo" : "Pendiente"}
        </Text>
      </View>
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

  welcome: {
    backgroundColor: "#E0F2FE",
    borderRadius: 18,

    padding: 20,

    flexDirection: "row",
    alignItems: "center",

    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#BAE6FD",
  },

  welcomeText: {
    flex: 1,
  },

  greeting: {
    fontSize: 22,
    fontWeight: "800",
    color: "#152E4D",
  },

  welcomeDescription: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 19,
    marginTop: 6,
  },

  teacherIcon: {
    width: 55,
    height: 55,
    borderRadius: 16,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    marginLeft: 12,
  },

  /* ESTADÍSTICAS */

  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  statCard: {
    flex: 1,

    backgroundColor: "#FFFFFF",

    borderRadius: 15,

    padding: 15,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  statIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,

    backgroundColor: "#E0F2FE",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 10,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: "#152E4D",
  },

  statLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },

  /* SECCIONES */

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#152E4D",
    marginTop: 10,
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 12,
  },

  seeMore: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0284C7",
  },

  /* ACCIONES */

  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  quickAction: {
    width: "48%",

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    padding: 14,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  quickIcon: {
    width: 40,
    height: 40,
    borderRadius: 11,

    backgroundColor: "#E0F2FE",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 10,
  },

  quickTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#152E4D",
  },

  quickDescription: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 3,
  },

  /* MÓDULOS */

  moduleCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    padding: 14,

    flexDirection: "row",
    alignItems: "center",

    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  moduleIcon: {
    width: 43,
    height: 43,
    borderRadius: 12,

    backgroundColor: "#E0F2FE",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  moduleInfo: {
    flex: 1,
  },

  moduleName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#152E4D",
    lineHeight: 19,
  },

  moduleDetails: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 4,
  },

  status: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },

  statusActive: {
    backgroundColor: "#DCFCE7",
  },

  statusPending: {
    backgroundColor: "#FEF3C7",
  },

  statusText: {
    fontSize: 10,
    fontWeight: "700",
  },

  statusTextActive: {
    color: "#15803D",
  },

  statusTextPending: {
    color: "#A16207",
  },
});