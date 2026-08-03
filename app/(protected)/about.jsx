import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* Subtítulo azul superior */}
      <Text style={styles.topSubtitle}>SOBRE NOSOTROS</Text>

      {/* Título Principal */}
      <Text style={styles.mainTitle}>
        Un equipo comprometido con la educación digital
      </Text>

      {/* Línea decorativa */}
      <View style={styles.titleDivider} />

      {/* Párrafos descriptivos */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.paragraph}>
          Somos un equipo conformado por{" "}
          <Text style={styles.boldText}>seis aprendices del SENA</Text>, unidos
          con el propósito de desarrollar soluciones tecnológicas que mejoren
          los procesos educativos en las instituciones públicas.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>EasyMatric</Text> surge como una
          iniciativa orientada a resolver una necesidad real: la dificultad de
          gestionar procesos de matrícula de forma ordenada, rápida y
          transparente. Más que digitalizar formularios, buscamos transformar
          la relación entre la institución y el estudiante.
        </Text>
      </View>

      {/* Tarjetas Misión, Visión y Objetivo */}
      <View style={styles.cardsContainer}>
        {/* Tarjeta Misión */}
        <View style={[styles.card, styles.cardBlue]}>
          <Text style={styles.cardTitle}>Misión</Text>
          <Text style={styles.cardText}>
            Facilitar procesos académicos mediante una plataforma segura que
            reduzca tiempos y mejore la atención institucional.
          </Text>
        </View>

        {/* Tarjeta Visión */}
        <View style={[styles.card, styles.cardGreen]}>
          <Text style={styles.cardTitle}>Visión</Text>
          <Text style={styles.cardText}>
            Convertirnos en una referencia tecnológica para la modernización
            educativa en instituciones públicas y privadas.
          </Text>
        </View>

        {/* Tarjeta Objetivo */}
        <View style={[styles.card, styles.cardYellow]}>
          <Text style={styles.cardTitle}>Objetivo</Text>
          <Text style={styles.cardText}>
            Automatizar el proceso de matrícula para disminuir errores y
            centralizar la información estudiantil.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  topSubtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563eb",
    letterSpacing: 1.2,
    textAlign: "center",
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1e293b",
    textAlign: "center",
  },
  titleDivider: {
    width: 48,
    height: 4,
    backgroundColor: "#1e40af",
    borderRadius: 2,
    marginVertical: 16,
  },
  descriptionContainer: {
    marginBottom: 28,
  },
  paragraph: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 12,
  },
  boldText: {
    fontWeight: "700",
    color: "#334155",
  },
  cardsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 24,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardBlue: {
    borderBottomColor: "#3b82f6",
  },
  cardGreen: {
    borderBottomColor: "#22c55e",
  },
  cardYellow: {
    borderBottomColor: "#f59e0b",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 13,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 18,
  },
});