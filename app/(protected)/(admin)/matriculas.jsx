import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Importación corregida a 3 niveles
import ScreenContainer from "../../../components/ScreenContainer";

const DOCUMENTATION_DATA = [
  { id: "1", user: "Ana Rodríguez", documentName: "ver_documento.pdf", sendDate: "27/04/2026", status: "Pendiente", grade: "6°" },
  { id: "2", user: "Breiner Pérez", documentName: "Ver_Documento.pdf", sendDate: "26/04/2026", status: "Pendiente", grade: "6°" },
  { id: "3", user: "Valentina Ospina", documentName: "ver_documento.pdf", sendDate: "26/04/2026", status: "Pendiente", grade: "7°" },
  { id: "4", user: "Carlos Andrés Mendoza", documentName: "ver_documento.pdf", sendDate: "27/04/2026", status: "Pendiente", grade: "8°" },
  { id: "5", user: "Angie Marcela Ortiz", documentName: "ver_documento.pdf", sendDate: "27/04/2026", status: "Pendiente", grade: "9°" },
  { id: "6", user: "Mariana Lucía Torres", documentName: "ver_documento.pdf", sendDate: "02/04/2026", status: "Pendiente", grade: "10°" },
  { id: "7", user: "Sofía Elena Gómez", documentName: "ver_documento.pdf", sendDate: "21/02/2026", status: "Pendiente", grade: "11°" },
  { id: "8", user: "Samuel David Quintero", documentName: "ver_documento.pdf", sendDate: "27/03/2026", status: "Pendiente", grade: "11°" },
  { id: "9", user: "Isabella Caicedo", documentName: "ver_documento.pdf", sendDate: "03/04/2026", status: "Pendiente", grade: "6°" },
  { id: "10", user: "Mateo Holguín", documentName: "ver_documento.pdf", sendDate: "17/04/2026", status: "Pendiente", grade: "7°" },
];

const GRADES = ["Todos", "6°", "7°", "8°", "9°", "10°", "11°"];

export default function DocumentationScreen() {
  const [documents, setDocuments] = useState(DOCUMENTATION_DATA);
  const [selectedGrade, setSelectedGrade] = useState("Todos");
  const [modalVisible, setModalVisible] = useState(false);

  const handleApprove = (id, name) => {
    Alert.alert("Aprobar Documento", `¿Deseas aprobar la documentación de ${name}?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Aprobar",
        onPress: () => {
          setDocuments((prev) =>
            prev.map((doc) => (doc.id === id ? { ...doc, status: "Aprobado" } : doc))
          );
        },
      },
    ]);
  };

  const handleReject = (id, name) => {
    Alert.alert("Rechazar Documento", `¿Deseas rechazar la documentación de ${name}?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Rechazar",
        style: "destructive",
        onPress: () => {
          setDocuments((prev) =>
            prev.map((doc) => (doc.id === id ? { ...doc, status: "Rechazado" } : doc))
          );
        },
      },
    ]);
  };

  const handleOpenDoc = (docName, user) => {
    Alert.alert("Visualizador", `Abriendo ${docName} de ${user}`);
  };

  const filteredDocs = documents.filter(
    (doc) => selectedGrade === "Todos" || doc.grade === selectedGrade
  );

  return (
    <ScreenContainer style={{ backgroundColor: "#F8FAFC" }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* ENCABEZADO */}
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>Revisión de Documentación</Text>
          <Text style={styles.subtitle}>
            Revisión de Solicitudes y Validacion Matrículas
          </Text>
        </View>

        {/* CONTENEDOR PRINCIPAL */}
        <View style={styles.card}>
          {/* BOTÓN FILTRAR POR GRADO */}
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={styles.dropdownBtn}
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
            >
              <Text style={styles.dropdownText}>
                {selectedGrade === "Todos" ? "Filtra por grado" : `Grado: ${selectedGrade}`}
              </Text>
              <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* TABLA HORIZONTAL DESLIZABLE */}
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={styles.tableWrapper}>
              {/* ENCABEZADOS DE LA TABLA */}
              <View style={styles.tableHeader}>
                <Text style={[styles.headerText, { width: 160 }]}>Usuario</Text>
                <Text style={[styles.headerText, { width: 160 }]}>Documento</Text>
                <Text style={[styles.headerText, { width: 120 }]}>Fecha Envío</Text>
                <Text style={[styles.headerText, { width: 130 }]}>Estado Actual</Text>
                <Text style={[styles.headerText, { width: 180, textAlign: "center" }]}>
                  Acciones
                </Text>
              </View>

              {/* FILAS CON CADA REGISTRO Y SUS BOTONES */}
              {filteredDocs.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  {/* Usuario */}
                  <Text style={[styles.cellText, styles.userNameText, { width: 160 }]} numberOfLines={1}>
                    {item.user}
                  </Text>

                  {/* Documento */}
                  <TouchableOpacity
                    style={{ width: 160 }}
                    onPress={() => handleOpenDoc(item.documentName, item.user)}
                  >
                    <Text style={styles.linkText} numberOfLines={1}>
                      {item.documentName}
                    </Text>
                  </TouchableOpacity>

                  {/* Fecha Envío */}
                  <Text style={[styles.cellText, { width: 120 }]}>
                    {item.sendDate}
                  </Text>

                  {/* Estado Actual */}
                  <View style={{ width: 130 }}>
                    <View
                      style={[
                        styles.badgeContainer,
                        item.status === "Aprobado" && styles.badgeSuccess,
                        item.status === "Rechazado" && styles.badgeDanger,
                      ]}
                    >
                      <Text
                        style={[
                          styles.badgeText,
                          item.status === "Aprobado" && styles.badgeTextSuccess,
                          item.status === "Rechazado" && styles.badgeTextDanger,
                        ]}
                      >
                        {item.status}
                      </Text>
                    </View>
                  </View>

                  {/* Acciones: Botones Aprobar y Rechazar */}
                  <View style={{ width: 180, flexDirection: "row", justifyContent: "center", gap: 8 }}>
                    {item.status === "Pendiente" ? (
                      <>
                        <TouchableOpacity
                          style={styles.btnApprove}
                          onPress={() => handleApprove(item.id, item.user)}
                          activeOpacity={0.8}
                        >
                          <Text style={styles.btnText}>Aprobar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.btnReject}
                          onPress={() => handleReject(item.id, item.user)}
                          activeOpacity={0.8}
                        >
                          <Text style={styles.btnText}>Rechazar</Text>
                        </TouchableOpacity>
                      </>
                    ) : (
                      <Text style={styles.finalStatusText}>{item.status}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* MODAL PARA SELECCIONAR EL GRADO */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filtrar por Grado</Text>
            {GRADES.map((grade) => (
              <TouchableOpacity
                key={grade}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedGrade(grade);
                  setModalVisible(false);
                }}
              >
                <Text
                  style={[
                    styles.modalItemText,
                    selectedGrade === grade && { color: "#3B82F6", fontWeight: "700" },
                  ]}
                >
                  {grade === "Todos" ? "Mostrar Todos" : `Grado ${grade}`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0F172A",
  },
  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  filterContainer: {
    marginBottom: 16,
    alignItems: "flex-start",
  },
  dropdownBtn: {
    backgroundColor: "#3B82F6",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    gap: 8,
  },
  dropdownText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  tableWrapper: {
    paddingRight: 10,
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingBottom: 12,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F8FAFC",
  },
  cellText: {
    fontSize: 13,
    color: "#334155",
  },
  userNameText: {
    fontWeight: "500",
    color: "#0F172A",
  },
  linkText: {
    fontSize: 13,
    color: "#3B82F6",
    textDecorationLine: "underline",
  },
  badgeContainer: {
    backgroundColor: "#FEF3C7",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  badgeSuccess: {
    backgroundColor: "#DCFCE7",
  },
  badgeDanger: {
    backgroundColor: "#FEE2E2",
  },
  badgeText: {
    color: "#D97706",
    fontSize: 12,
    fontWeight: "600",
  },
  badgeTextSuccess: {
    color: "#16A34A",
  },
  badgeTextDanger: {
    color: "#DC2626",
  },
  btnApprove: {
    backgroundColor: "#22C55E",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnReject: {
    backgroundColor: "#EF4444",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  finalStatusText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    width: "80%",
    maxWidth: 320,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#0F172A",
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 14,
    color: "#334155",
  },
});