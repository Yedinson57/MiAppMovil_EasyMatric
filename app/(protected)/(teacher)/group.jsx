import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function GroupModule() {
  const [students, setStudents] = useState([
    {
      id: "01",
      name: "Nicolás Mateo Salazar",
      enrollment: "PRI01",
      gender: "Masculino",
      grade: "4.5",
    },
    {
      id: "02",
      name: "Salome Catalina López",
      enrollment: "PRI02",
      gender: "Femenino",
      grade: "3.8",
    },
    {
      id: "03",
      name: "Ginna Gabriela Goyes",
      enrollment: "PRI03",
      gender: "Femenino",
      grade: "3.8",
    },
    {
      id: "04",
      name: "Alex Santiago Gomez Ayala",
      enrollment: "PRI04",
      gender: "Masculino",
      grade: "3.8",
    },
    {
      id: "05",
      name: "Jhosntin Fabian Castillo",
      enrollment: "PRI05",
      gender: "Masculino",
      grade: "3.8",
    },
    {
      id: "06",
      name: "Yeraldin Fernanda España",
      enrollment: "PRI06",
      gender: "Femenino",
      grade: "3.8",
    },
    {
      id: "07",
      name: "María Alejandra Gomez Gomez",
      enrollment: "PRI07",
      gender: "Femenino",
      grade: "3.8",
    },
    {
      id: "08",
      name: "Yannin Ayala",
      enrollment: "PRI08",
      gender: "Femenino",
      grade: "3.8",
    },
    {
      id: "09",
      name: "Yuneidi Rincon",
      enrollment: "PRI09",
      gender: "Femenino",
      grade: "3.8",
    },
    {
      id: "10",
      name: "Cristian Alejandro Guerrero",
      enrollment: "PRI10",
      gender: "Masculino",
      grade: "3.8",
    },
  ]);

  const [search, setSearch] = useState("");

  const updateGrade = (id, value) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id
          ? { ...student, grade: value }
          : student
      )
    );
  };

  const saveStudentGrade = (student) => {
    Alert.alert(
      "Nota guardada",
      `La nota de ${student.name} es ${student.grade}.`
    );
  };

  const saveAllGrades = () => {
    Alert.alert(
      "Notas guardadas",
      "Todas las notas han sido guardadas correctamente."
    );
  };

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.enrollment}`
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
          <View style={styles.titleRow}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="arrow-back"
                size={22}
                color="#152E4D"
              />
            </Pressable>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Estudiantes e Historial de Notas
              </Text>

              <Text style={styles.moduleText}>
                Módulo:
              </Text>

              <Text style={styles.moduleName}>
                Comprensión Lectora y Redacción
                {"\n"}
                (3° Primaria)
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.saveAllButton}
            onPress={saveAllGrades}
          >
            <Ionicons
              name="save-outline"
              size={20}
              color="#FFFFFF"
            />

            <Text style={styles.saveAllText}>
              Guardar Todas las Notas
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
            placeholder="Buscar estudiante..."
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* CONTADOR */}

        <View style={styles.summaryContainer}>
          <View style={styles.summaryIcon}>
            <Ionicons
              name="people-outline"
              size={21}
              color="#152E4D"
            />
          </View>

          <View>
            <Text style={styles.summaryTitle}>
              Estudiantes inscritos
            </Text>

            <Text style={styles.summaryText}>
              {filteredStudents.length} estudiantes encontrados
            </Text>
          </View>
        </View>

        {/* ESTUDIANTES */}

        <View style={styles.studentsContainer}>
          {filteredStudents.map((student) => (
            <View
              key={student.id}
              style={styles.studentCard}
            >
              {/* CABECERA DE LA TARJETA */}

              <View style={styles.studentHeader}>
                <View style={styles.studentNumber}>
                  <Text style={styles.studentNumberText}>
                    {student.id}
                  </Text>
                </View>

                <View style={styles.studentNameContainer}>
                  <Text
                    style={styles.studentName}
                    numberOfLines={2}
                  >
                    {student.name}
                  </Text>

                  <View style={styles.enrollmentBadge}>
                    <Text style={styles.enrollmentText}>
                      {student.enrollment}
                    </Text>
                  </View>
                </View>
              </View>

              {/* INFORMACIÓN */}

              <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                  <Ionicons
                    name={
                      student.gender === "Masculino"
                        ? "male-outline"
                        : "female-outline"
                    }
                    size={18}
                    color="#64748B"
                  />

                  <Text style={styles.infoLabel}>
                    Género
                  </Text>

                  <Text style={styles.infoValue}>
                    {student.gender}
                  </Text>
                </View>

                <View style={styles.gradeContainer}>
                  <Text style={styles.gradeLabel}>
                    Nota Final
                  </Text>

                  <TextInput
                    style={styles.gradeInput}
                    value={student.grade}
                    onChangeText={(value) =>
                      updateGrade(student.id, value)
                    }
                    keyboardType="decimal-pad"
                    placeholder="0.0"
                    placeholderTextColor="#94A3B8"
                    maxLength={3}
                  />

                  <Text style={styles.gradeMax}>
                    / 5.0
                  </Text>
                </View>
              </View>

              {/* ACCIÓN */}

              <Pressable
                style={styles.saveStudentButton}
                onPress={() => saveStudentGrade(student)}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#152E4D"
                />

                <Text style={styles.saveStudentText}>
                  Guardar nota
                </Text>
              </Pressable>
            </View>
          ))}

          {/* SIN RESULTADOS */}

          {filteredStudents.length === 0 && (
            <View style={styles.emptyContainer}>
              <Ionicons
                name="people-outline"
                size={45}
                color="#94A3B8"
              />

              <Text style={styles.emptyTitle}>
                No se encontraron estudiantes
              </Text>

              <Text style={styles.emptyText}>
                Intenta realizar otra búsqueda.
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

  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontSize: 23,
    fontWeight: "800",
    color: "#152E4D",
    lineHeight: 29,
    marginBottom: 8,
  },

  moduleText: {
    fontSize: 13,
    color: "#64748B",
  },

  moduleName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#152E4D",
    lineHeight: 20,
    marginTop: 2,
  },

  saveAllButton: {
    minHeight: 50,

    backgroundColor: "#152E4D",

    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 18,
  },

  saveAllText: {
    color: "#FFFFFF",
    fontSize: 14,
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

    marginBottom: 15,
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    fontSize: 15,
    color: "#1E293B",
  },

  /* RESUMEN */

  summaryContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#E0F2FE",

    borderRadius: 14,

    padding: 14,

    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#BAE6FD",
  },

  summaryIcon: {
    width: 42,
    height: 42,

    borderRadius: 12,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  summaryTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#152E4D",
  },

  summaryText: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },

  /* ESTUDIANTES */

  studentsContainer: {
    gap: 14,
  },

  studentCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    padding: 16,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    elevation: 2,

    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  studentHeader: {
    flexDirection: "row",
    alignItems: "flex-start",

    marginBottom: 15,
  },

  studentNumber: {
    width: 38,
    height: 38,

    borderRadius: 11,

    backgroundColor: "#E0F2FE",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  studentNumberText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#152E4D",
  },

  studentNameContainer: {
    flex: 1,
  },

  studentName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#152E4D",

    lineHeight: 21,

    marginBottom: 6,
  },

  enrollmentBadge: {
    alignSelf: "flex-start",

    backgroundColor: "#F1F5F9",

    paddingHorizontal: 9,
    paddingVertical: 4,

    borderRadius: 7,
  },

  enrollmentText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
  },

  /* INFORMACIÓN */

  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",

    paddingTop: 14,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoItem: {
    flex: 1,

    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  infoLabel: {
    fontSize: 12,
    color: "#94A3B8",
    marginLeft: 6,
    marginRight: 5,
  },

  infoValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
  },

  /* NOTA */

  gradeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  gradeLabel: {
    fontSize: 12,
    color: "#64748B",
    marginRight: 7,
  },

  gradeInput: {
    width: 55,
    height: 40,

    borderRadius: 9,

    borderWidth: 1,
    borderColor: "#CBD5E1",

    backgroundColor: "#F8FAFC",

    textAlign: "center",

    fontSize: 16,
    fontWeight: "700",
    color: "#152E4D",
  },

  gradeMax: {
    fontSize: 12,
    color: "#94A3B8",
    marginLeft: 4,
  },

  /* GUARDAR */

  saveStudentButton: {
    height: 44,

    marginTop: 15,

    borderRadius: 10,

    backgroundColor: "#F1F5F9",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  saveStudentText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#152E4D",
    marginLeft: 7,
  },

  /* VACÍO */

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