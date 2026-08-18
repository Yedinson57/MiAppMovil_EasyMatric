import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function InstitutionDetailScreen() {
  const router = useRouter();
  
  // Recibimos los parámetros enviados desde Institutions.jsx
  const { id, nombre, ubicacion } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Botón Volver */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#1A202C" />
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>

        {/* Header con datos dinámicos */}
        <View style={styles.headerCard}>
          <Text style={styles.headerTitle}>
            {nombre || "Institución Educativa Técnica Industrial"}
          </Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#A0AEC0" />
            <Text style={styles.locationText}>
              {ubicacion || "Popayán, Cauca — Sede Central"}
            </Text>
          </View>
        </View>

        {/* Acerca de la Sede */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Ionicons name="information-circle-outline" size={20} color="#1A202C" />
            <Text style={styles.cardTitle}>Acerca de nuestra Sede</Text>
          </View>
          
          <Text style={styles.descriptionText}>
            Nuestra institución se destaca por ofrecer un ambiente educativo moderno,
            enfocado en el desarrollo integral y técnico de los estudiantes en la región.
            Contamos con instalaciones adecuadas para el aprendizaje práctico y teórico,
            asegurando una formación de alta calidad.
          </Text>

          {/* Chips de Servicios */}
          <View style={styles.chipContainer}>
            <View style={styles.chip}>
              <Ionicons name="wifi-outline" size={14} color="#4A5568" />
              <Text style={styles.chipText}>Zona WiFi</Text>
            </View>
            <View style={styles.chip}>
              <Ionicons name="bus-outline" size={14} color="#4A5568" />
              <Text style={styles.chipText}>Transporte</Text>
            </View>
            <View style={styles.chip}>
              <Ionicons name="book-outline" size={14} color="#4A5568" />
              <Text style={styles.chipText}>Biblioteca</Text>
            </View>
            <View style={styles.chip}>
              <MaterialCommunityIcons name="coffee-outline" size={14} color="#4A5568" />
              <Text style={styles.chipText}>Comedor</Text>
            </View>
          </View>
        </View>

        {/* Proceso de Matrícula */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Inicia tu Proceso</Text>
          <Text style={styles.subText}>
            Asegura tu cupo de manera fácil y 100% digital a través de nuestra plataforma.
          </Text>
          <Text style={styles.boldSubtitle}>Requisitos:</Text>

          <View style={styles.checkItem}>
            <Ionicons name="checkmark" size={16} color="#38A169" />
            <Text style={styles.checkText}>Identidad del estudiante</Text>
          </View>
          <View style={styles.checkItem}>
            <Ionicons name="checkmark" size={16} color="#38A169" />
            <Text style={styles.checkText}>Certificados de notas</Text>
          </View>
          <View style={styles.checkItem}>
            <Ionicons name="checkmark" size={16} color="#38A169" />
            <Text style={styles.checkText}>Seguro estudiantil</Text>
          </View>

          {/* Botón configurado a la ruta /process */}
          <TouchableOpacity 
            style={styles.primaryButton}
            activeOpacity={0.8}
            onPress={() => router.push('/process')}
          >
            <Text style={styles.primaryButtonText}>INICIAR MATRÍCULA</Text>
            <FontAwesome5 name="rocket" size={14} color="#FFFFFF" style={{ marginLeft: 8 }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportButton}>
            <Ionicons name="logo-whatsapp" size={18} color="#25D366" />
            <Text style={styles.supportButtonText}>¿Necesitas soporte?</Text>
          </TouchableOpacity>
        </View>

        {/* Documentos Institucionales */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Ionicons name="document-text-outline" size={20} color="#1A202C" />
            <Text style={styles.cardTitle}>Documentos Institucionales</Text>
          </View>

          <TouchableOpacity style={styles.docCard} activeOpacity={0.7}>
            <MaterialCommunityIcons name="file-pdf-box" size={32} color="#E53E3E" />
            <View style={styles.docInfo}>
              <Text style={styles.docTitle}>Manual de Convivencia</Text>
              <Text style={styles.docSub}>Versión 2026 actualizada</Text>
            </View>
            <Ionicons name="eye-outline" size={20} color="#718096" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.docCard} activeOpacity={0.7}>
            <MaterialCommunityIcons name="file-pdf-box" size={32} color="#E53E3E" />
            <View style={styles.docInfo}>
              <Text style={styles.docTitle}>Proyecto Educativo (PEI)</Text>
              <Text style={styles.docSub}>Modelo de formación integral</Text>
            </View>
            <Ionicons name="eye-outline" size={20} color="#718096" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A202C",
  },
  headerCard: {
    backgroundColor: "#181A2A",
    borderRadius: 16,
    padding: 24,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationText: {
    color: "#A0AEC0",
    fontSize: 13,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A202C",
  },
  descriptionText: {
    fontSize: 14,
    color: "#4A5568",
    lineHeight: 20,
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDF2F7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  chipText: {
    fontSize: 13,
    color: "#4A5568",
    fontWeight: "500",
  },
  subText: {
    fontSize: 14,
    color: "#4A5568",
    marginVertical: 8,
  },
  boldSubtitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2D3748",
    marginVertical: 8,
  },
  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  checkText: {
    fontSize: 14,
    color: "#4A5568",
  },
  primaryButton: {
    backgroundColor: "#181A2A",
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  supportButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    gap: 6,
  },
  supportButtonText: {
    color: "#25D366",
    fontWeight: "600",
    fontSize: 14,
  },
  docCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7FAFC",
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    gap: 12,
  },
  docInfo: {
    flex: 1,
  },
  docTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2D3748",
  },
  docSub: {
    fontSize: 12,
    color: "#A0AEC0",
    marginTop: 2,
  },
});