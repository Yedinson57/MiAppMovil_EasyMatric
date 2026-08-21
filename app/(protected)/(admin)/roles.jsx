import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Importaciones con las rutas corregidas a 3 niveles
import ScreenContainer from "../../../components/ScreenContainer";

const ROLES_DATA = [
  {
    id: "1",
    name: "ADMINISTRADOR",
    users: "2 usuarios",
    permissions: "Acceso Total",
    lastEdit: "10 Abr, 2026",
    badgeColor: "#FEE2E2",
    textColor: "#EF4444",
  },
  {
    id: "2",
    name: "RECTOR",
    users: "1 usuario",
    permissions: "3 niveles",
    lastEdit: "02 Mar, 2026",
    badgeColor: "#FEF3C7",
    textColor: "#D97706",
  },
  {
    id: "3",
    name: "COORDINADOR",
    users: "1 usuario",
    permissions: "3 niveles",
    lastEdit: "21 Abr, 2026",
    badgeColor: "#DCFCE7",
    textColor: "#16A34A",
  },
  {
    id: "4",
    name: "DOCENTE",
    users: "5 usuarios",
    permissions: "2 niveles",
    lastEdit: "15 Abr, 2026",
    badgeColor: "#DCFCE7",
    textColor: "#16A34A",
  },
  {
    id: "5",
    name: "ESTUDIANTE",
    users: "320 usuarios",
    permissions: "Solo Lectura",
    lastEdit: "20 Abr, 2026",
    badgeColor: "#DBEAFE",
    textColor: "#2563EB",
  },
];

export default function RolesScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roles, setRoles] = useState(ROLES_DATA);

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAction = (roleName) => {
    Alert.alert("Opciones de Rol", `Opciones para el rol: ${roleName}`, [
      { text: "Editar Permisos", onPress: () => {} },
      { text: "Eliminar", style: "destructive", onPress: () => {} },
      { text: "Cancelar", style: "cancel" },
    ]);
  };

  return (
    <ScreenContainer style={{ backgroundColor: "#F8FAFC" }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* ENCABEZADO */}
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>Gestión de Roles y Accesos</Text>
          <Text style={styles.subtitle}>
            Configura los niveles de seguridad y permisos para los usuarios de la plataforma.
          </Text>
        </View>

        {/* BANNER DE SEGURIDAD */}
        <View style={styles.securityBanner}>
          <View style={styles.securityLeft}>
            <View style={styles.shieldIconContainer}>
              <Ionicons name="shield-checkmark" size={24} color="#3B82F6" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.securityTitle}>Seguridad del Sitio</Text>
              <Text style={styles.securityText}>
                Actualmente tienes 1 página con acceso restringido para niveles directivos.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnPermissions}>
            <Text style={styles.btnPermissionsText}>Ver Permisos →</Text>
          </TouchableOpacity>
        </View>

        {/* TARJETA PRINCIPAL: TABLA DE ROLES */}
        <View style={styles.card}>
          {/* BARRA SUPERIOR: TÍTULO, BUSCADOR Y BOTÓN NUEVO */}
          <View style={styles.topActionsContainer}>
            <Text style={styles.tableTitle}>Listado de Roles</Text>

            <View style={styles.searchAndButtonRow}>
              <View style={styles.searchBox}>
                <Ionicons name="search-outline" size={18} color="#94A3B8" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Buscar rol..."
                  placeholderTextColor="#94A3B8"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>

              <TouchableOpacity style={styles.btnAddRole}>
                <Text style={styles.btnAddRoleText}>+ Nuevo Rol</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TABLA HORIZONTAL CON SCROLL */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tableContainer}>
              {/* ENCABEZADOS DE COLUMNA */}
              <View style={styles.tableHeader}>
                <Text style={[styles.headerText, { flex: 2 }]}>NOMBRE DEL ROL</Text>
                <Text style={[styles.headerText, { flex: 1.5 }]}>USUARIOS</Text>
                <Text style={[styles.headerText, { flex: 1.5 }]}>PERMISOS</Text>
                <Text style={[styles.headerText, { flex: 1.5 }]}>ÚLTIMA EDICIÓN</Text>
                <Text style={[styles.headerText, { flex: 1, textAlign: "center" }]}>
                  ACCIONES
                </Text>
              </View>

              {/* FILAS DE ROLES */}
              {filteredRoles.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  {/* Nombre del Rol (Badge) */}
                  <View style={{ flex: 2, alignItems: "flex-start" }}>
                    <View
                      style={[
                        styles.badgeRole,
                        { backgroundColor: item.badgeColor },
                      ]}
                    >
                      <Text
                        style={[
                          styles.badgeRoleText,
                          { color: item.textColor },
                        ]}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>

                  {/* Usuarios */}
                  <Text style={[styles.cellText, { flex: 1.5 }]}>
                    {item.users}
                  </Text>

                  {/* Permisos */}
                  <Text style={[styles.cellTextItalic, { flex: 1.5 }]}>
                    {item.permissions}
                  </Text>

                  {/* Última Edición */}
                  <Text style={[styles.cellText, { flex: 1.5 }]}>
                    {item.lastEdit}
                  </Text>

                  {/* Acciones */}
                  <TouchableOpacity
                    style={{ flex: 1, alignItems: "center" }}
                    onPress={() => handleAction(item.name)}
                  >
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={20}
                      color="#94A3B8"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 16,
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
  securityBanner: {
    backgroundColor: "#1E2235",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 12,
    flexWrap: "wrap",
  },
  securityLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    minWidth: 240,
  },
  shieldIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(59, 130, 246, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  securityTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  securityText: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 2,
  },
  btnPermissions: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  btnPermissionsText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  topActionsContainer: {
    marginBottom: 20,
    gap: 12,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },
  searchAndButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 38,
    flex: 1,
    minWidth: 180,
  },
  searchInput: {
    flex: 1,
    marginLeft: 6,
    fontSize: 13,
    color: "#0F172A",
  },
  btnAddRole: {
    backgroundColor: "#3B82F6",
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnAddRoleText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  tableContainer: {
    minWidth: 680,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingBottom: 12,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F8FAFC",
  },
  badgeRole: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeRoleText: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  cellText: {
    fontSize: 13,
    color: "#334155",
  },
  cellTextItalic: {
    fontSize: 13,
    color: "#64748B",
    fontStyle: "italic",
  },
});