import React from "react";
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,} from "react-native";
import { Feather } from "@expo/vector-icons";
import ScreenContainer from "../../../components/ScreenContainer";

export default function Enrollment() {
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Encabezado Principal (Reemplaza la barra superior) */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>Seguimiento de Matrículas</Text>
          <Text style={styles.subtitle}>
            Monitorea el estado de tus inscripciones y descarga tus comprobantes
            oficiales.
          </Text>
        </View>

        {/* Tarjeta 1: I.E. San Vicente (Aprobado) */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Feather name="home" size={20} color="#0284c7" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.institutionTitle}>I.E. San Vicente</Text>
              <Text style={styles.processId}>ID Proceso: #EM-2026-882</Text>
            </View>
            <View style={[styles.badge, styles.badgeSuccess]}>
              <Text style={styles.badgeSuccessText}>Aprobado</Text>
            </View>
          </View>

          {/* Módulos Inscritos */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Feather name="layers" size={14} color="#64748b" />
              <Text style={styles.sectionTitle}>Módulos Inscritos:</Text>
            </View>
            <View style={styles.chipContainer}>
              <View style={styles.chip}>
                <Text style={styles.chipText}>Ciencias Naturales</Text>
              </View>
              <View style={styles.chip}>
                <Text style={styles.chipText}>Matemáticas Avanzadas</Text>
              </View>
              <View style={styles.chip}>
                <Text style={styles.chipText}>Inglés Técnico</Text>
              </View>
              <View style={styles.chip}>
                <Text style={styles.chipText}>Lenguaje y Comunicación</Text>
              </View>
            </View>
          </View>

          {/* Estado del Proceso (Stepper) */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Feather name="activity" size={14} color="#64748b" />
              <Text style={styles.sectionTitle}>Estado del Proceso:</Text>
            </View>

            <View style={styles.stepper}>
              {/* Paso 1 */}
              <View style={styles.stepItem}>
                <View style={[styles.stepCircle, styles.stepCompleted]}>
                  <Text style={styles.stepCircleText}>1</Text>
                </View>
                <Text style={styles.stepLabel}>Solicitud</Text>
              </View>
              <View style={[styles.stepLine, styles.lineCompleted]} />

              {/* Paso 2 */}
              <View style={styles.stepItem}>
                <View style={[styles.stepCircle, styles.stepCompleted]}>
                  <Text style={styles.stepCircleText}>2</Text>
                </View>
                <Text style={styles.stepLabel}>Documentación</Text>
              </View>
              <View style={[styles.stepLine, styles.lineCompleted]} />

              {/* Paso 3 */}
              <View style={styles.stepItem}>
                <View style={[styles.stepCircle, styles.stepCompleted]}>
                  <Text style={styles.stepCircleText}>3</Text>
                </View>
                <Text style={styles.stepLabel}>Revisión</Text>
              </View>
              <View style={[styles.stepLine, styles.lineCompleted]} />

              {/* Paso 4 */}
              <View style={styles.stepItem}>
                <View style={[styles.stepCircle, styles.stepActive]}>
                  <Text style={styles.stepCircleText}>4</Text>
                </View>
                <Text style={styles.stepLabel}>Finalizado</Text>
              </View>
            </View>
          </View>

          {/* Botones de Acción */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.btnSecondary} activeOpacity={0.7}>
              <Feather name="eye" size={16} color="#334155" />
              <Text style={styles.btnSecondaryText}>Detalles</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.7}>
              <Feather name="file-text" size={16} color="#ffffff" />
              <Text style={styles.btnPrimaryText}>Descargar Comprobante</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tarjeta 2: Colegio Mayor de Cauca (En Revisión) */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Feather name="home" size={20} color="#0284c7" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.institutionTitle}>Colegio Mayor de Cauca</Text>
              <Text style={styles.processId}>ID Proceso: #EM-2026-915</Text>
            </View>
            <View style={[styles.badge, styles.badgeWarning]}>
              <Text style={styles.badgeWarningText}>En Revisión</Text>
            </View>
          </View>

          <Text style={styles.infoText}>
            Tu documentación está siendo validada por la secretaría de la
            institución. Este proceso puede tardar hasta 48 horas.
          </Text>

          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.btnDisabled}
              disabled={true}
              activeOpacity={1}
            >
              <Feather name="lock" size={16} color="#94a3b8" />
              <Text style={styles.btnDisabledText}>
                Comprobante no disponible
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerSection: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
    lineHeight: 18,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#f0f9ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  institutionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0f172a",
  },
  processId: {
    fontSize: 12,
    color: "#94a3b8",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeSuccess: { backgroundColor: "#dcfce7" },
  badgeSuccessText: { color: "#16a34a", fontSize: 11, fontWeight: "600" },
  badgeWarning: { backgroundColor: "#fef3c7" },
  badgeWarningText: { color: "#d97706", fontSize: 11, fontWeight: "600" },

  section: {
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  chipText: {
    fontSize: 12,
    color: "#334155",
  },

  /* Stepper */
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  stepItem: {
    alignItems: "center",
  },
  stepCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  stepCompleted: { backgroundColor: "#22c55e" },
  stepActive: { backgroundColor: "#3b82f6" },
  stepCircleText: { color: "#ffffff", fontSize: 11, fontWeight: "bold" },
  stepLabel: { fontSize: 10, color: "#64748b" },
  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#e2e8f0",
    marginBottom: 16,
    marginHorizontal: 4,
  },
  lineCompleted: { backgroundColor: "#22c55e" },

  infoText: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 20,
    marginTop: 12,
  },

  /* Acciones */
  actionsContainer: {
    marginTop: 16,
    gap: 8,
  },
  btnPrimary: {
    backgroundColor: "#0f172a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  btnPrimaryText: { color: "#ffffff", fontWeight: "600", fontSize: 13 },
  btnSecondary: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    gap: 8,
  },
  btnSecondaryText: { color: "#334155", fontWeight: "600", fontSize: 13 },
  btnDisabled: {
    backgroundColor: "#f1f5f9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  btnDisabledText: { color: "#94a3b8", fontWeight: "500", fontSize: 13 },
});