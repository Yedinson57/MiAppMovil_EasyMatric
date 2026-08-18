import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// DATOS DE CATÁLOGOS / DOCUMENTOS INSTITUCIONALES
const CATALOGS = [
  {
    id: "1",
    title: "Manual de Convivencia",
    icon: "file-pdf-box",
    type: "pdf",
  },
  {
    id: "2",
    title: "Oferta Académica 2026",
    icon: "file-document-outline",
    type: "doc",
  },
  {
    id: "3",
    title: "Proyectos Transversales",
    icon: "file-powerpoint-outline",
    type: "ppt",
  },
];

// DATOS DE ESTUDIANTES Y SUS NOTAS
const STUDENTS = [
  {
    id: "1",
    name: "Ana Rodriguez Sandoval",
    grade: "Grado 11° - Jornada Mañana",
    avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    grades: [
      { module: "Artes", eval: "9.0", rec: "10", recHighlight: "success" },
      { module: "Inglés", eval: "10", rec: "8.0" },
      { module: "Historia", eval: "10", rec: "10" },
      { module: "Ciencias Naturales", eval: "7.0", rec: "9.0" },
    ],
  },
  {
    id: "2",
    name: "Andres Camilo Dominguez",
    grade: "Grado 11° - Jornada Mañana",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    grades: [
      { module: "Artes", eval: "9.0", rec: "10" },
      { module: "Inglés", eval: "10", rec: "8.0" },
      { module: "Ciencias Sociales", eval: "5.0", rec: "10", evalHighlight: "danger" },
      { module: "Física", eval: "7.0", rec: "8.0" },
    ],
  },
];

export default function CatalogsAndNotesScreen() {
  const [studentsList, setStudentsList] = useState(STUDENTS);

  const handleOpenDocument = (title) => {
    Alert.alert("Ver Documento", `Abriendo ${title}...`);
  };

  const handleAddGrade = (studentName) => {
    Alert.alert("Añadir Nota", `Agregar nueva calificación para ${studentName}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* ENCABEZADO */}
        <View style={styles.header}>
          <Text style={styles.title}>Panel de Catálogos y Notas</Text>
          <Text style={styles.subtitle}>
            Gestiona los documentos institucionales y el rendimiento académico de los estudiantes.
          </Text>
        </View>

        {/* SECCIÓN 1: CATÁLOGOS Y DOCUMENTOS (SCROLL HORIZONTAL) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.catalogsContainer}
        >
          {CATALOGS.map((item) => (
            <View key={item.id} style={styles.catalogCard}>
              <View style={styles.catalogBadgeIcon}>
                <MaterialCommunityIcons name={item.icon} size={22} color="#3B82F6" />
              </View>

              <View style={styles.documentPlaceholder}>
                <Ionicons name="image-outline" size={24} color="#94A3B8" />
                <Text style={styles.placeholderText}>Documento</Text>
              </View>

              <Text style={styles.catalogTitle} numberOfLines={2}>
                {item.title}
              </Text>

              <TouchableOpacity
                style={styles.viewDocButton}
                onPress={() => handleOpenDocument(item.title)}
                activeOpacity={0.8}
              >
                <Ionicons name="eye-outline" size={16} color="#334155" />
                <Text style={styles.viewDocButtonText}>Ver Documento</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* SECCIÓN 2: TARJETAS DE ESTUDIANTES Y NOTAS */}
        <View style={styles.studentsContainer}>
          {studentsList.map((student) => (
            <View key={student.id} style={styles.studentCard}>
              {/* ENCABEZADO DEL ESTUDIANTE */}
              <View style={styles.studentHeader}>
                <Image source={{ uri: student.avatar }} style={styles.avatar} />
                <View style={styles.studentInfo}>
                  <Text style={styles.studentName}>{student.name}</Text>
                  <Text style={styles.studentGrade}>{student.grade}</Text>
                </View>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => handleAddGrade(student.name)}
                >
                  <Ionicons name="add" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              {/* TABLA DE NOTAS */}
              <View style={styles.notesTable}>
                {/* CABECERA DE TABLA */}
                <View style={styles.tableHeaderRow}>
                  <Text style={[styles.tableHeaderText, { flex: 2 }]}>Módulo</Text>
                  <Text style={[styles.tableHeaderText, { flex: 1, textAlign: "center" }]}>
                    Evaluación
                  </Text>
                  <Text style={[styles.tableHeaderText, { flex: 1, textAlign: "center" }]}>
                    Recuperación
                  </Text>
                </View>

                {/* FILAS DE NOTAS */}
                {student.grades.map((gradeItem, idx) => (
                  <View key={idx} style={styles.tableRow}>
                    <Text style={[styles.moduleText, { flex: 2 }]}>{gradeItem.module}</Text>

                    {/* VALOR EVALUACIÓN */}
                    <Text
                      style={[
                        styles.gradeText,
                        { flex: 1, textAlign: "center" },
                        gradeItem.evalHighlight === "danger" && styles.textDanger,
                      ]}
                    >
                      {gradeItem.eval}
                    </Text>

                    {/* VALOR RECUPERACIÓN */}
                    <Text
                      style={[
                        styles.gradeText,
                        { flex: 1, textAlign: "center" },
                        gradeItem.recHighlight === "success" && styles.textSuccess,
                      ]}
                    >
                      {gradeItem.rec}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    paddingVertical: 20,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
  },

  /* ESTILOS DE CATÁLOGOS */
  catalogsContainer: {
    paddingHorizontal: 20,
    gap: 14,
    paddingBottom: 20,
  },
  catalogCard: {
    width: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  catalogBadgeIcon: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  documentPlaceholder: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 10,
    marginBottom: 12,
  },
  placeholderText: {
    fontSize: 13,
    color: "#94A3B8",
    fontWeight: "500",
  },
  catalogTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 16,
    height: 40,
  },
  viewDocButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 6,
    width: "100%",
    justifyContent: "center",
  },
  viewDocButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },

  /* ESTILOS DE ESTUDIANTES Y TABLA DE NOTAS */
  studentsContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  studentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  studentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
    backgroundColor: "#E2E8F0",
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  studentGrade: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 2,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
  },

  /* TABLA DE NOTAS */
  notesTable: {
    width: "100%",
  },
  tableHeaderRow: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    marginBottom: 6,
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94A3B8",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F8FAFC",
  },
  moduleText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E293B",
  },
  gradeText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
  },
  textSuccess: {
    color: "#22C55E",
  },
  textDanger: {
    color: "#EF4444",
  },
});