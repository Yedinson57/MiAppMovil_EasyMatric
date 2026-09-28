import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import ScreenContainer from "../components/ScreenContainer";
import Colors from "../constants/colors";

const FEATURES = [
  {
    icon: "school-outline",
    title: "Matriculas",
    text: "Gestiona procesos, plazos y solicitudes desde un solo lugar.",
  },
  {
    icon: "calendar-outline",
    title: "Programación",
    text: "Consulta fechas importantes y actualizaciones del calendario académico.",
  },
  {
    icon: "shield-checkmark-outline",
    title: "Seguridad",
    text: "Acceso controlado para estudiantes, docentes y administradores.",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <View style={styles.logoBadge}>
              <Ionicons name="school" size={20} color={Colors.primary} />
            </View>
            <Text style={styles.brandText}>EasyMatric</Text>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.8}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.loginText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.eyebrow}>PLATAFORMA EDUCATIVA</Text>
            <Text style={styles.title}>
              Transformamos{"\n"}
              la matrícula{"\n"}
              estudiantil
            </Text>

            <Text style={styles.description}>
              EasyMatric moderniza la gestión académica en instituciones públicas,
              facilitando la matrícula, la información estudiantil y la
              coordinación institucional desde cualquier dispositivo.
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.8}
              onPress={() => router.push("/(auth)/login")}
            >
              <Text style={styles.primaryText}>Comenzar</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              activeOpacity={0.8}
              onPress={() => router.push("/(protected)/about")}
            >
              <Text style={styles.secondaryText}>Conocer más</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsRow}>
          <StatCard value="12K+" label="Estudiantes" />
          <StatCard value="98%" label="Satisfacción" />
          <StatCard value="24/7" label="Acceso" />
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>¿Por qué elegir EasyMatric?</Text>

          {FEATURES.map((feature) => (
            <View key={feature.title} style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Ionicons name={feature.icon} size={22} color={Colors.primary} />
              </View>
              <View style={styles.featureTextWrap}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

function StatCard({ value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoBadge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
  },
  brandText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0f172a",
  },
  loginButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "#EFF6FF",
  },
  loginText: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: 14,
  },
  hero: {
    paddingTop: 10,
    marginBottom: 24,
  },
  heroText: {
    marginBottom: 20,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.2,
    color: Colors.primary,
    fontWeight: "700",
    marginBottom: 10,
  },
  title: {
    fontSize: 42,
    color: "#0f172a",
    fontWeight: "800",
    lineHeight: 43,
    marginBottom: 18,
  },
  description: {
    fontSize: 16,
    color: "#475569",
    lineHeight: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },
  primaryButton: {
    flex: 1,
    minHeight: 52,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    flex: 1,
    minHeight: 52,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
  },
  statValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0f172a",
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#64748B",
  },
  featuresSection: {
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 16,
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F8FAFC",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },
  featureIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  featureTextWrap: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  featureText: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 19,
  },
});