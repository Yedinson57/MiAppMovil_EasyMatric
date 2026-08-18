import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const INITIAL_STUDENTS = [
  { id: "01", name: "Ana Rodriguez Sandoval", enrollmentId: "19AB3", grade: "6°", age: 12, gender: "Femenino", level: "Secundaria" },
  { id: "02", name: "Breiner Andres Perez", enrollmentId: "29AB5", grade: "6°", age: 14, gender: "Masculino", level: "Secundaria" },
  { id: "03", name: "Andres Camilo Dominguez", enrollmentId: "39AG2", grade: "6°", age: 15, gender: "Masculino", level: "Secundaria" },
  { id: "04", name: "Carla Maria Sanchez", enrollmentId: "39JB9", grade: "7°", age: 17, gender: "Femenino", level: "Secundaria" },
  { id: "05", name: "Jorge Enrique Rivera", enrollmentId: "40JB1", grade: "8°", age: 16, gender: "Masculino", level: "Secundaria" },
  { id: "06", name: "Juan Pablo Gómez", enrollmentId: "40JB9", grade: "8°", age: 17, gender: "Masculino", level: "Secundaria" },
  { id: "07", name: "Luisa Valentina Rodriguez", enrollmentId: "38KB9", grade: "9°", age: 18, gender: "Femenino", level: "Secundaria" },
  { id: "08", name: "Sebastián Ramírez López", enrollmentId: "39HB5", grade: "9°", age: 15, gender: "Masculino", level: "Secundaria" },
  { id: "09", name: "Daniela Rodríguez Cruz", enrollmentId: "37AB1", grade: "10°", age: 16, gender: "Femenino", level: "Secundaria" },
  { id: "10", name: "Kevin Santiago López", enrollmentId: "40LB7", grade: "10°", age: 18, gender: "Masculino", level: "Secundaria" },
  { id: "11", name: "Natalia Andrea Pardo", enrollmentId: "390M2", grade: "11°", age: 19, gender: "Femenino", level: "Secundaria" },
  { id: "12", name: "Cristian Camilo Sánchez", enrollmentId: "37WT3", grade: "11°", age: 18, gender: "Masculino", level: "Secundaria" },
];

export default function StudentsScreen() {
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Todos");

  const filteredStudents = INITIAL_STUDENTS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.enrollmentId.toLowerCase().includes(search.toLowerCase()) ||
      item.grade.toLowerCase().includes(search.toLowerCase());

    const matchesLevel =
      selectedLevel === "Todos" || item.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  const renderStudentCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.nameContainer}>
          <Text style={styles.numberText}>#{item.id}</Text>
          <Text style={styles.studentName}>{item.name}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.badgeEnrollment}>
          <Text style={styles.badgeText}>ID: {item.enrollmentId}</Text>
        </View>
        <View style={styles.badgeGrade}>
          <Text style={styles.badgeGradeText}>Grado {item.grade}</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Edad: </Text>
          {item.age} años
        </Text>
        <Text style={styles.dotSeparator}>•</Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Género: </Text>
          {item.gender}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#152e4d" />
      
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={renderStudentCard}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* TITULO Y BOTON DE NUEVO REGISTRO */}
            <View style={styles.headerContainer}>
              <View style={styles.titleSection}>
                <Text style={styles.title}>Lista de Estudiantes</Text>
                <Text style={styles.subtitle}>
                  Visualiza y gestiona la información de los alumnos matriculados.
                </Text>
              </View>

              <TouchableOpacity style={styles.newButton} activeOpacity={0.8}>
                <Ionicons name="person-add-outline" size={18} color="#FFFFFF" />
                <Text style={styles.newButtonText}>Nuevo Registro</Text>
              </TouchableOpacity>
            </View>

            {/* BUSCADOR */}
            <View style={styles.searchBox}>
              <Ionicons name="search-outline" size={18} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar por nombre, ID o grado..."
                placeholderTextColor="#9CA3AF"
                value={search}
                onChangeText={setSearch}
              />
              {search.length > 0 && (
                <TouchableOpacity onPress={() => setSearch("")}>
                  <Ionicons name="close-circle" size={18} color="#9CA3AF" />
                </TouchableOpacity>
              )}
            </View>

            {/* FILTRO DE NIVELES */}
            <View style={styles.levelContainer}>
              {["Todos", "Preescolar", "Primaria", "Secundaria"].map((lvl) => (
                <TouchableOpacity
                  key={lvl}
                  onPress={() => setSelectedLevel(lvl)}
                  style={[
                    styles.levelTab,
                    selectedLevel === lvl && styles.levelTabActive,
                  ]}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.levelText,
                      selectedLevel === lvl && styles.levelTextActive,
                    ]}
                  >
                    {lvl}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="people-outline" size={48} color="#9CA3AF" />
            <Text style={styles.emptyText}>No se encontraron estudiantes</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  listContent: {
    padding: 16,
    paddingBottom: 30,
  },
  headerContainer: {
    marginBottom: 16,
    gap: 12,
  },
  titleSection: {
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
  },
  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
    lineHeight: 18,
  },
  newButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  newButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#1E293B",
  },
  levelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 6,
  },
  levelTab: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
  },
  levelTabActive: {
    backgroundColor: "#1E3A8A",
  },
  levelText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600",
  },
  levelTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  numberText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#94A3B8",
    marginRight: 8,
  },
  studentName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    flex: 1,
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  badgeEnrollment: {
    backgroundColor: "#EFF6FF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  badgeText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "700",
  },
  badgeGrade: {
    backgroundColor: "#F1F5F9",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  badgeGradeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#334155",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F8FAFC",
    paddingTop: 8,
  },
  infoText: {
    fontSize: 12,
    color: "#475569",
  },
  infoLabel: {
    color: "#94A3B8",
  },
  dotSeparator: {
    marginHorizontal: 8,
    color: "#CBD5E1",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 14,
    color: "#9CA3AF",
  },
});