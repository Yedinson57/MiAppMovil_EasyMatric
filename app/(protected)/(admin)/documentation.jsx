import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// DATOS INICIALES EXTRAÍDOS DE LA IMAGEN
const DOCUMENTATION_DATA = [
  { id: "1", user: "Ana Rodríguez", documentName: "ver_documento.pdf", sendDate: "27/04/2026", status: "Pendiente", grade: "6°" },
  { id: "2", user: "Breiner Pérez", documentName: "Ver_Documento.pdf", sendDate: "26/04/2026", status: "Pendiente", grade: "6°" },
  { id: "3", user: "Valentina Ospina", documentName: "ver_documento.pdf", sendDate: "26/04/2026", status: "Pendiente", grade: "7°" },
  { id: "4", user: "Carlos Andrés Mendoza", documentName: "ver_documento.pdf", sendDate: "27/04/2026", status: "Pendiente", grade: "8°" },
  { id: "5", user: "Angie Marcela Ortiz", documentName: "ver_documento.pdf", sendDate: "27/04/2026", status: "Pendiente", grade: "9°" },
  { id: "6", user: "Mariana Lucía Torres", documentName: "ver_documento.pdf", sendDate: "02/04/2026", status: "Pendiente", grade: "10°" },
  { id: "7", user: "Sofía Elena Gómez", documentName: "ver_documento.pdf", sendDate: "21/02/2026", status: "Pendiente", grade: "11°" },
  { id: "8", user: "Samuel David Quintero", documentName: "ver_documento.pdf", sendDate: "27/03/2026", status: "Pendiente", grade: "11°" },
];

export default function Documentation() {
  const [documents, setDocuments] = useState(DOCUMENTATION_DATA);
  const [selectedGrade, setSelectedGrade] = useState("Todos");

  const handleApprove = (id, name) => {
    Alert.alert("Aprobar Documento", `¿Deseas aprobar el documento de ${name}?`, [
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
    Alert.alert("Rechazar Documento", `¿Deseas rechazar el documento de ${name}?`, [
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

  const handleOpenDoc = (docName) => {
    Alert.alert("Abrir Documento", `Abriendo ${docName}...`);
  };

  const filteredDocs = documents.filter(
    (doc) => selectedGrade === "Todos" || doc.grade === selectedGrade
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* TÍTULO PRINCIPAL */}
        <Text style={styles.mainTitle}>Revisión de Documentación</Text>

        {/* TARJETA CONTENEDORA */}
        <View style={styles.whiteCard}>
          {/* BOTÓN DROPDOWN / FILTRO */}
          <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.dropdownBtn}>
              <Text style={styles.dropdownText}>Filtra por grado</Text>
              <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* TABLA CON SCROLL HORIZONTAL */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tableContainer}>
              {/* CABECERA */}
              <View style={styles.tableHeader}>
                <Text style={[styles.headerText, { flex: 2 }]}>Usuario</Text>
                <Text style={[styles.headerText, { flex: 2 }]}>Documento</Text>
                <Text style={[styles.headerText, { flex: 1.5 }]}>Fecha Envío</Text>
                <Text style={[styles.headerText, { flex: 1.5 }]}>Estado Actual</Text>
                <Text style={[styles.headerText, { flex: 2, textAlign: "center" }]}>
                  Acciones
                </Text>
              </View>

              {/* FILAS */}
              {filteredDocs.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  {/* USUARIO */}
                  <Text style={[styles.cellText, styles.userNameText, { flex: 2 }]}>
                    {item.user}
                  </Text>

                  {/* DOCUMENTO */}
                  <TouchableOpacity
                    style={{ flex: 2 }}
                    onPress={() => handleOpenDoc(item.documentName)}
                  >
                    <Text style={styles.linkText}>{item.documentName}</Text>
                  </TouchableOpacity>

                  {/* FECHA */}
                  <Text style={[styles.cellText, { flex: 1.5 }]}>{item.sendDate}</Text>

                  {/* ESTADO */}
                  <View style={{ flex: 1.5 }}>
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

                  {/* ACCIONES */}
                  <View style={[styles.actionsCell, { flex: 2 }]}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  container: {
    padding: 24,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#000000",
    marginBottom: 20,
  },
  whiteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  filterContainer: {
    marginBottom: 24,
    alignItems: "flex-start",
  },
  dropdownBtn: {
    backgroundColor: "#3B82F6",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  dropdownText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  tableContainer: {
    minWidth: 750,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 12,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  cellText: {
    fontSize: 14,
    color: "#374151",
  },
  userNameText: {
    fontWeight: "500",
    color: "#1F2937",
  },
  linkText: {
    fontSize: 14,
    color: "#2563EB",
    textDecorationLine: "underline",
  },
  badgeContainer: {
    backgroundColor: "#FEF3C7",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
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
    fontSize: 13,
    fontWeight: "600",
  },
  badgeTextSuccess: {
    color: "#16A34A",
  },
  badgeTextDanger: {
    color: "#DC2626",
  },
  actionsCell: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  btnApprove: {
    backgroundColor: "#22C55E",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  btnReject: {
    backgroundColor: "#EF4444",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  finalStatusText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6B7280",
  },
});