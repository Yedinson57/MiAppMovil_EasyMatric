import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BRAND = "#152e4d";

const PERIODS = ["Este mes", "Trimestre", "Año 2026"];

const KPI = [
  {
    id: "enroll",
    label: "Matrículas",
    value: "1,842",
    delta: "+12.4%",
    up: true,
    icon: "document-text-outline",
    tint: "#ECFDF5",
    color: "#059669",
  },
  {
    id: "students",
    label: "Estudiantes",
    value: "3,516",
    delta: "+8.1%",
    up: true,
    icon: "people-outline",
    tint: "#EFF6FF",
    color: "#2563EB",
  },
  {
    id: "schools",
    label: "Instituciones",
    value: "24",
    delta: "+2",
    up: true,
    icon: "business-outline",
    tint: "#FEF3C7",
    color: "#D97706",
  },
  {
    id: "pending",
    label: "Pendientes",
    value: "67",
    delta: "-5.2%",
    up: false,
    icon: "time-outline",
    tint: "#FEF2F2",
    color: "#DC2626",
  },
];

const MONTHS = [
  { label: "Ene", value: 48 },
  { label: "Feb", value: 62 },
  { label: "Mar", value: 71 },
  { label: "Abr", value: 58 },
  { label: "May", value: 84 },
  { label: "Jun", value: 91 },
];

const STATUSES = [
  { label: "Aprobadas", value: 1284, percent: 70, color: "#10B981" },
  { label: "En revisión", value: 491, percent: 27, color: "#F59E0B" },
  { label: "Rechazadas", value: 67, percent: 3, color: "#EF4444" },
];

const INSTITUTIONS = [
  { name: "I.E. Técnico Industrial", city: "Cali", enrollments: 412, rate: "96%" },
  { name: "Colegio San Martín", city: "Palmira", enrollments: 287, rate: "91%" },
  { name: "I.E. María Inmaculada", city: "Yumbo", enrollments: 254, rate: "88%" },
  { name: "Centro Educativo Norte", city: "Jamundí", enrollments: 198, rate: "84%" },
];

const EXPORTS = [
  { title: "Matrículas por sede", date: "28 sep 2026", type: "PDF" },
  { title: "Estudiantes activos", date: "26 sep 2026", type: "XLSX" },
  { title: "Documentos pendientes", date: "22 sep 2026", type: "PDF" },
];

export default function Reports() {
  const [period, setPeriod] = useState("Trimestre");
  const maxBar = Math.max(...MONTHS.map((item) => item.value));

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.kicker}>PANEL ANALÍTICO</Text>
          <Text style={styles.heroTitle}>Reportes institucionales</Text>
          <Text style={styles.heroCopy}>
            Resumen ficticio del periodo académico. Los valores son de
            demostración para el portal administrador.
          </Text>
        </View>
        <View style={styles.heroBadge}>
          <Ionicons name="bar-chart" size={26} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.periodRow}>
        {PERIODS.map((item) => {
          const active = item === period;
          return (
            <Pressable
              key={item}
              onPress={() => setPeriod(item)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.kpiGrid}>
        {KPI.map((item) => (
          <View key={item.id} style={styles.kpiCard}>
            <View style={[styles.kpiIcon, { backgroundColor: item.tint }]}>
              <Ionicons name={item.icon} size={20} color={item.color} />
            </View>
            <Text style={styles.kpiLabel}>{item.label}</Text>
            <Text style={styles.kpiValue}>{item.value}</Text>
            <Text style={[styles.kpiDelta, { color: item.up ? "#059669" : "#DC2626" }]}>
              {item.delta} vs periodo anterior
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.panel}>
        <View style={styles.panelHeader}>
          <Text style={styles.panelTitle}>Matrículas mensuales</Text>
          <Text style={styles.panelHint}>{period}</Text>
        </View>
        <View style={styles.chartRow}>
          {MONTHS.map((month) => (
            <View key={month.label} style={styles.barCol}>
              <Text style={styles.barValue}>{month.value}</Text>
              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.barFill,
                    { height: `${Math.round((month.value / maxBar) * 100)}%` },
                  ]}
                />
              </View>
              <Text style={styles.barLabel}>{month.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Estado de solicitudes</Text>
        {STATUSES.map((item) => (
          <View key={item.label} style={styles.statusBlock}>
            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>{item.label}</Text>
              <Text style={styles.statusMeta}>
                {item.value} · {item.percent}%
              </Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${item.percent}%`, backgroundColor: item.color },
                ]}
              />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Top instituciones</Text>
        {INSTITUTIONS.map((item, index) => (
          <View
            key={item.name}
            style={[styles.tableRow, index === INSTITUTIONS.length - 1 && styles.tableRowLast]}
          >
            <View style={styles.rank}>
              <Text style={styles.rankText}>{index + 1}</Text>
            </View>
            <View style={styles.tableMain}>
              <Text style={styles.tableName}>{item.name}</Text>
              <Text style={styles.tableCity}>{item.city}</Text>
            </View>
            <View style={styles.tableStats}>
              <Text style={styles.tableEnroll}>{item.enrollments}</Text>
              <Text style={styles.tableRate}>{item.rate} avance</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Exportaciones recientes</Text>
        {EXPORTS.map((item) => (
          <View key={item.title} style={styles.exportRow}>
            <View style={styles.exportIcon}>
              <Ionicons name="download-outline" size={18} color={BRAND} />
            </View>
            <View style={styles.exportText}>
              <Text style={styles.exportTitle}>{item.title}</Text>
              <Text style={styles.exportDate}>
                {item.type} · {item.date}
              </Text>
            </View>
            <View style={styles.filePill}>
              <Text style={styles.filePillText}>{item.type}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    maxWidth: 720,
    width: "100%",
    alignSelf: "center",
  },
  hero: {
    backgroundColor: "#152e4d",
    borderRadius: 16,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#152e4d",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 3,
  },
  heroText: {
    flex: 1,
    paddingRight: 12,
  },
  kicker: {
    color: "#93C5FD",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 8,
    letterSpacing: -0.2,
    lineHeight: 30,
  },
  heroCopy: {
    color: "#CBD5E1",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    fontWeight: "400",
  },
  heroBadge: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.28)",
    opacity: 0.92,
    alignItems: "center",
    justifyContent: "center",
  },
  periodRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  chipActive: {
    backgroundColor: "#152e4d",
    borderColor: "#152e4d",
    shadowColor: "#152e4d",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#64748B",
  },
  chipTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  kpiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  kpiCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#1E293B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  kpiIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(30, 41, 59, 0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    opacity: 0.95,
  },
  kpiLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#64748B",
  },
  kpiValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 4,
  },
  kpiDelta: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 4,
  },
  panel: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginTop: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#1E293B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  panelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  panelTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 12,
  },
  panelHint: {
    fontSize: 14,
    fontWeight: "400",
    color: "#64748B",
    marginBottom: 12,
  },
  chartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 160,
  },
  barCol: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  barValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 6,
  },
  barTrack: {
    flex: 1,
    width: 18,
    backgroundColor: "#E8EEF5",
    borderRadius: 12,
    justifyContent: "flex-end",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  barFill: {
    width: "100%",
    backgroundColor: "#152e4d",
    borderRadius: 12,
    opacity: 0.92,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "400",
    color: "#64748B",
  },
  statusBlock: {
    marginBottom: 14,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  statusLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
  },
  statusMeta: {
    fontSize: 14,
    fontWeight: "400",
    color: "#64748B",
  },
  progressTrack: {
    height: 8,
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 12,
    opacity: 0.9,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  tableRowLast: {
    borderBottomWidth: 0,
  },
  rank: {
    width: 28,
    height: 28,
    borderRadius: 12,
    backgroundColor: "#E8EEF5",
    borderWidth: 1,
    borderColor: "#C5D0DE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    opacity: 0.95,
  },
  rankText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#152e4d",
  },
  tableMain: {
    flex: 1,
  },
  tableName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
  },
  tableCity: {
    fontSize: 14,
    fontWeight: "400",
    color: "#64748B",
    marginTop: 2,
  },
  tableStats: {
    alignItems: "flex-end",
  },
  tableEnroll: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
  },
  tableRate: {
    fontSize: 12,
    color: "#059669",
    fontWeight: "400",
    marginTop: 2,
  },
  exportRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  exportIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    opacity: 0.95,
  },
  exportText: {
    flex: 1,
  },
  exportTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
  },
  exportDate: {
    fontSize: 14,
    fontWeight: "400",
    color: "#64748B",
    marginTop: 2,
  },
  filePill: {
    backgroundColor: "#152e4d",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: "#152e4d",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  filePillText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
});
