import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UploadModule() {
  const [allowEnrollment, setAllowEnrollment] = useState(true);

  const [form, setForm] = useState({
    name: "",
    grade: "",
    capacity: "",
    hours: "",
    period: "Primer Periodo",
    openingDate: "",
    closingDate: "",
    description: "",
  });

  const updateField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const publishModule = () => {
    if (
      !form.name ||
      !form.grade ||
      !form.capacity ||
      !form.hours ||
      !form.description
    ) {
      Alert.alert(
        "Campos incompletos",
        "Completa los campos principales antes de publicar el módulo."
      );
      return;
    }

    Alert.alert(
      "Módulo publicado",
      "El módulo ha sido preparado correctamente para su publicación."
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* ENCABEZADO */}

      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons
            name="cloud-upload"
            size={28}
            color="#152E4D"
          />
        </View>

        <View style={styles.headerText}>
          <Text style={styles.title}>
            Configuración y Carga de Módulos
          </Text>

          <Text style={styles.subtitle}>
            Oferta Académica e Inscripciones
          </Text>
        </View>
      </View>

      {/* BOTÓN PUBLICAR */}

      <Pressable
        style={styles.publishButton}
        onPress={publishModule}
      >
        <Ionicons
          name="add-circle-outline"
          size={21}
          color="#FFFFFF"
        />

        <Text style={styles.publishText}>
          Publicar Módulo
        </Text>
      </Pressable>

      {/* PARÁMETROS */}

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="options-outline"
            size={22}
            color="#152E4D"
          />

          <Text style={styles.cardTitle}>
            Parámetros de la Asignatura
          </Text>
        </View>

        {/* NOMBRE */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Nombre del Módulo / Asignatura
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ej. Lengua Castellana y Comprensión Crítica"
            placeholderTextColor="#94A3B8"
            value={form.name}
            onChangeText={(value) =>
              updateField("name", value)
            }
          />
        </View>

        {/* GRADO */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Grado / Curso Destino
          </Text>

          <View style={styles.selectContainer}>
            <Ionicons
              name="school-outline"
              size={19}
              color="#64748B"
            />

            <Text style={styles.selectText}>
              {form.grade || "Seleccione un grado..."}
            </Text>
          </View>

          <View style={styles.gradeOptions}>
            {[
              "Grado 9° A",
              "Grado 9° B",
              "Grado 10° A",
              "Grado 10° B",
              "Grado 11° A",
            ].map((grade) => (
              <Pressable
                key={grade}
                style={[
                  styles.gradeOption,
                  form.grade === grade &&
                    styles.gradeOptionActive,
                ]}
                onPress={() =>
                  updateField("grade", grade)
                }
              >
                <Text
                  style={[
                    styles.gradeOptionText,
                    form.grade === grade &&
                      styles.gradeOptionTextActive,
                  ]}
                >
                  {grade}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* CUPOS */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Límite de Cupos Disponibles
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ej. 35"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            value={form.capacity}
            onChangeText={(value) =>
              updateField("capacity", value)
            }
          />
        </View>

        {/* HORAS */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Horas Semanales
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ej. 4"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            value={form.hours}
            onChangeText={(value) =>
              updateField("hours", value)
            }
          />
        </View>

        {/* PERIODO */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Periodo Escolar
          </Text>

          <View style={styles.periodContainer}>
            {[
              "Primer Periodo",
              "Segundo Periodo",
              "Tercer Periodo",
            ].map((period) => (
              <Pressable
                key={period}
                style={[
                  styles.periodOption,
                  form.period === period &&
                    styles.periodActive,
                ]}
                onPress={() =>
                  updateField("period", period)
                }
              >
                <Text
                  style={[
                    styles.periodText,
                    form.period === period &&
                      styles.periodTextActive,
                  ]}
                >
                  {period}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* FECHAS */}

        <View style={styles.dateRow}>
          <View style={styles.dateColumn}>
            <Text style={styles.label}>
              Apertura
            </Text>

            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#94A3B8"
              value={form.openingDate}
              onChangeText={(value) =>
                updateField("openingDate", value)
              }
            />
          </View>

          <View style={styles.dateColumn}>
            <Text style={styles.label}>
              Cierre
            </Text>

            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#94A3B8"
              value={form.closingDate}
              onChangeText={(value) =>
                updateField("closingDate", value)
              }
            />
          </View>
        </View>

        {/* DESCRIPCIÓN */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Descripción del Módulo y Competencias
          </Text>

          <TextInput
            style={styles.textArea}
            placeholder="Escriba los objetivos principales y temas clave..."
            placeholderTextColor="#94A3B8"
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            value={form.description}
            onChangeText={(value) =>
              updateField("description", value)
            }
          />
        </View>

        {/* ARCHIVO */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Documento Técnico del Módulo
          </Text>

          <Pressable
            style={styles.fileContainer}
            onPress={() =>
              Alert.alert(
                "Documento",
                "El selector de archivos se conectará posteriormente."
              )
            }
          >
            <View style={styles.fileIcon}>
              <Ionicons
                name="document-text-outline"
                size={30}
                color="#152E4D"
              />
            </View>

            <Text style={styles.fileTitle}>
              Seleccionar documento
            </Text>

            <Text style={styles.fileDescription}>
              PDF o DOCX — máximo 10 MB
            </Text>
          </Pressable>
        </View>
      </View>

      {/* ESTADO DE OFERTA */}

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#152E4D"
          />

          <Text style={styles.cardTitle}>
            Estado de Oferta
          </Text>
        </View>

        <Text style={styles.helpText}>
          Los módulos publicados quedan visibles para el
          proceso de selección de asignaturas por parte de
          los estudiantes.
        </Text>

        <View style={styles.switchRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.switchTitle}>
              Permitir auto-inscripción
            </Text>

            <Text style={styles.switchDescription}>
              Los estudiantes podrán inscribirse directamente.
            </Text>
          </View>

          <Switch
            value={allowEnrollment}
            onValueChange={setAllowEnrollment}
            trackColor={{
              false: "#CBD5E1",
              true: "#BAE6FD",
            }}
            thumbColor={
              allowEnrollment ? "#152E4D" : "#F8FAFC"
            }
          />
        </View>
      </View>

      {/* CONSEJOS */}

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="bulb-outline"
            size={22}
            color="#152E4D"
          />

          <Text style={styles.cardTitle}>
            Consejos Útiles
          </Text>
        </View>

        <View style={styles.tip}>
          <Ionicons
            name="checkmark-circle-outline"
            size={19}
            color="#0EA5E9"
          />

          <Text style={styles.tipText}>
            Establece el límite de cupos según la capacidad
            del aula asignada.
          </Text>
        </View>

        <View style={styles.tip}>
          <Ionicons
            name="checkmark-circle-outline"
            size={19}
            color="#0EA5E9"
          />

          <Text style={styles.tipText}>
            Verifica las fechas límite para evitar problemas
            con el calendario académico.
          </Text>
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

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  headerIcon: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  headerText: {
    flex: 1,
  },

  title: {
    fontSize: 21,
    fontWeight: "800",
    color: "#152E4D",
  },

  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },

  publishButton: {
    height: 50,
    backgroundColor: "#152E4D",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  publishText: {
    color: "#FFFFFF",
    fontSize: 15,
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

  inputGroup: {
    marginBottom: 17,
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 7,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    paddingHorizontal: 13,
    backgroundColor: "#FFFFFF",
    color: "#1E293B",
    fontSize: 14,
  },

  selectContainer: {
    height: 48,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
  },

  selectText: {
    marginLeft: 8,
    color: "#64748B",
    fontSize: 14,
  },

  gradeOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 9,
  },

  gradeOption: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#F1F5F9",
  },

  gradeOptionActive: {
    backgroundColor: "#E0F2FE",
  },

  gradeOptionText: {
    fontSize: 12,
    color: "#64748B",
  },

  gradeOptionTextActive: {
    color: "#152E4D",
    fontWeight: "700",
  },

  periodContainer: {
    gap: 8,
  },

  periodOption: {
    padding: 12,
    borderRadius: 9,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  periodActive: {
    backgroundColor: "#E0F2FE",
    borderColor: "#BAE6FD",
  },

  periodText: {
    fontSize: 13,
    color: "#64748B",
  },

  periodTextActive: {
    color: "#152E4D",
    fontWeight: "700",
  },

  dateRow: {
    flexDirection: "row",
    gap: 10,
  },

  dateColumn: {
    flex: 1,
  },

  textArea: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    padding: 13,
    backgroundColor: "#FFFFFF",
    color: "#1E293B",
    fontSize: 14,
  },

  fileContainer: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#BAE6FD",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
    backgroundColor: "#F8FCFF",
  },

  fileIcon: {
    width: 58,
    height: 58,
    borderRadius: 15,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  fileTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#152E4D",
  },

  fileDescription: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 5,
  },

  helpText: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 20,
    marginBottom: 17,
  },

  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    padding: 13,
    borderRadius: 11,
  },

  switchTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
  },

  switchDescription: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 3,
  },

  tip: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },

  tipText: {
    flex: 1,
    fontSize: 13,
    color: "#64748B",
    lineHeight: 19,
    marginLeft: 8,
  },
});