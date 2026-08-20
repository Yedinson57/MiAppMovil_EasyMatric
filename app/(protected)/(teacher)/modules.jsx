import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function TeacherModules() {
  const [search, setSearch] = useState("");

  const modules = [
    {
      id: "01",
      name: "Comprensión Lectora y Redacción",
      grade: "3° Primaria",
      students: 28,
      status: "Activo",
    },
    {
      id: "02",
      name: "Matemáticas Fundamentales",
      grade: "4° Primaria",
      students: 25,
      status: "Activo",
    },
    {
      id: "03",
      name: "Ciencias Naturales y Entorno",
      grade: "5° Primaria",
      students: 30,
      status: "Pendiente",
    },
  ];

  const filteredModules = modules.filter((module) =>
    `${module.name} ${module.grade}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* ENCABEZADO */}

        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Mis Módulos Asignados
            </Text>

            <Text style={styles.description}>
              Gestiona los contenidos, revisa los estudiantes
              inscritos y sube las calificaciones finales.
            </Text>
          </View>

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push("/(protected)/(teacher)/upload")}
          >
            <Ionicons
              name="add"
              size={20}
              color="#FFFFFF"
            />

            <Text style={styles.primaryButtonText}>
              Subir Nuevo Módulo
            </Text>
          </Pressable>
        </View>

        {/* BUSCADOR */}

        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={21}
            color="#64748B"
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar módulo o grado..."
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* MÓDULOS */}

        <View style={styles.modulesContainer}>
          {filteredModules.map((module) => (
            <View
              key={module.id}
              style={styles.moduleCard}
            >
              {/* Número */}

              <View style={styles.moduleNumber}>
                <Text style={styles.moduleNumberText}>
                  {module.id}
                </Text>
              </View>

              {/* Información */}

              <View style={styles.moduleInfo}>
                <Text
                  style={styles.moduleName}
                  numberOfLines={2}
                >
                  {module.name}
                </Text>

                <View style={styles.infoRow}>
                  <Ionicons
                    name="school-outline"
                    size={17}
                    color="#64748B"
                  />

                  <Text style={styles.infoText}>
                    {module.grade}
                  </Text>
                </View>

                <View style={styles.infoRow}>
                  <Ionicons
                    name="people-outline"
                    size={17}
                    color="#64748B"
                  />

                  <Text style={styles.infoText}>
                    {module.students} Alumnos
                  </Text>
                </View>

                {/* Estado */}

                <View
                  style={[
                    styles.statusBadge,
                    module.status === "Activo"
                      ? styles.statusActive
                      : styles.statusPending,
                  ]}
                >
                  <View
                    style={[
                      styles.statusDot,
                      module.status === "Activo"
                        ? styles.dotActive
                        : styles.dotPending,
                    ]}
                  />

                  <Text
                    style={[
                      styles.statusText,
                      module.status === "Activo"
                        ? styles.statusActiveText
                        : styles.statusPendingText,
                    ]}
                  >
                    {module.status}
                  </Text>
                </View>
              </View>

              {/* Acción */}

              <Pressable
                style={styles.viewButton}
                onPress={() =>
                  router.push("/(protected)/(teacher)/group")
                }
              >
                <Ionicons
                  name="eye-outline"
                  size={19}
                  color="#152E4D"
                />

                <Text style={styles.viewButtonText}>
                  Ver Grupo
                </Text>
              </Pressable>
            </View>
          ))}

          {/* SIN RESULTADOS */}

          {filteredModules.length === 0 && (
            <View style={styles.emptyContainer}>
              <Ionicons
                name="search-outline"
                size={40}
                color="#94A3B8"
              />

              <Text style={styles.emptyTitle}>
                No se encontraron módulos
              </Text>

              <Text style={styles.emptyText}>
                Intenta buscar con otro nombre o grado.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
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

  /* ENCABEZADO */

  header: {
    marginBottom: 20,
  },

  titleContainer: {
    marginBottom: 18,
  },

  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#152E4D",
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#64748B",
  },

  primaryButton: {
    minHeight: 50,
    backgroundColor: "#152E4D",
    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 18,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 8,
  },

  /* BUSCADOR */

  searchContainer: {
    height: 52,

    backgroundColor: "#FFFFFF",

    borderRadius: 12,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 15,

    marginBottom: 18,
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    fontSize: 15,
    color: "#1E293B",
  },

  /* MÓDULOS */

  modulesContainer: {
    gap: 14,
  },

  moduleCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    padding: 16,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  moduleNumber: {
    position: "absolute",

    top: 16,
    right: 16,

    width: 34,
    height: 34,

    borderRadius: 10,

    backgroundColor: "#E0F2FE",

    justifyContent: "center",
    alignItems: "center",
  },

  moduleNumberText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#152E4D",
  },

  moduleInfo: {
    paddingRight: 45,
  },

  moduleName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#152E4D",

    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 7,
  },

  infoText: {
    fontSize: 14,
    color: "#64748B",

    marginLeft: 8,
  },

  /* ESTADO */

  statusBadge: {
    alignSelf: "flex-start",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 20,

    marginTop: 5,
  },

  statusActive: {
    backgroundColor: "#DCFCE7",
  },

  statusPending: {
    backgroundColor: "#FEF3C7",
  },

  statusDot: {
    width: 7,
    height: 7,

    borderRadius: 10,

    marginRight: 6,
  },

  dotActive: {
    backgroundColor: "#16A34A",
  },

  dotPending: {
    backgroundColor: "#D97706",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },

  statusActiveText: {
    color: "#15803D",
  },

  statusPendingText: {
    color: "#B45309",
  },

  /* BOTÓN VER GRUPO */

  viewButton: {
    marginTop: 15,

    height: 44,

    borderRadius: 10,

    backgroundColor: "#F1F5F9",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  viewButtonText: {
    fontSize: 14,
    fontWeight: "700",

    color: "#152E4D",

    marginLeft: 7,
  },

  /* SIN RESULTADOS */

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 60,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#152E4D",

    marginTop: 12,
  },

  emptyText: {
    fontSize: 14,
    color: "#64748B",

    marginTop: 5,
    textAlign: "center",
  },
});