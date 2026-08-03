import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function faq() {
  const preguntas = [
    {
      id: "1",
      icon: "smartphone",
      pregunta: "¿Se puede usar desde celular?",
      respuesta:
        '¡Totalmente! EasyMatric está diseñada bajo la filosofía "Mobile First". Puedes realizar inscripciones, subir documentos y consultar estados desde cualquier smartphone o tablet con acceso a internet.',
    },
    {
      id: "2",
      icon: "shield",
      pregunta: "¿Es segura la información?",
      respuesta:
        "La seguridad es nuestra prioridad. Utilizamos cifrado de datos y protocolos seguros para garantizar que la información personal de estudiantes y acudientes esté protegida contra accesos no autorizados.",
    },
    {
      id: "3",
      icon: "grid",
      pregunta: "¿Puede adaptarse a varias instituciones?",
      respuesta:
        "Sí. Nuestra arquitectura permite parametrizar cupos, grados y requisitos específicos según las necesidades de cada institución educativa, ya sea pública o privada.",
    },
    {
      id: "4",
      icon: "upload-cloud",
      pregunta: "¿Cómo se suben los documentos?",
      respuesta:
        "El sistema permite cargar archivos en formato PDF o imagen directamente desde el formulario de matrícula, eliminando la necesidad de entregar carpetas físicas en la institución.",
    },
    {
      id: "5",
      icon: "clock",
      pregunta: "¿Cuánto tiempo toma el proceso?",
      respuesta:
        "Un proceso que antes tomaba horas de fila ahora puede completarse en menos de 10 minutos desde la comodidad de tu hogar.",
    },
    {
      id: "6",
      icon: "headphones",
      pregunta: "¿Qué pasa si cometo un error en el registro?",
      respuesta:
        "EasyMatric cuenta con un módulo de soporte y edición donde el administrador o el usuario (según el rol) puede corregir datos antes de la validación final de la matrícula.",
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* Título Principal */}
      <Text style={styles.titulo}>Preguntas Frecuentes</Text>

      {/* Línea decorativa verde */}
      <View style={styles.lineaDecorativa} />

      {/* Contenedor de preguntas */}
      <View style={styles.listaContainer}>
        {preguntas.map((item) => (
          <View key={item.id} style={styles.tarjeta}>
            <View style={styles.encabezadoTarjeta}>
              <Feather name={item.icon} size={20} color="#2563eb" />
              <Text style={styles.preguntaTexto}>{item.pregunta}</Text>
            </View>
            <Text style={styles.respuestaTexto}>{item.respuesta}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#f8fafc",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
  },
  lineaDecorativa: {
    width: 40,
    height: 4,
    backgroundColor: "#16a34a",
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 24,
  },
  listaContainer: {
    width: "100%",
    gap: 16,
  },
  tarjeta: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#2563eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  encabezadoTarjeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  preguntaTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0f172a",
    flex: 1,
  },
  respuestaTexto: {
    fontSize: 13,
    color: "#64748b",
    lineHeight: 20,
  },
});