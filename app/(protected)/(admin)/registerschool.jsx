import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

// Importaciones con las rutas corregidas a 4 niveles
import ScreenContainer from "../../../components/ScreenContainer";
import CustomInput from "../../../components/CustomInput";
import Colors from "../../../constants/colors";

export default function RegisterSchool() {
  // Datos de Institución y Rector
  const [nombreInstitucion, setNombreInstitucion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombreRector, setNombreRector] = useState("");

  // Información de Contacto
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [inicioClases, setInicioClases] = useState("");
  const [finClases, setFinClases] = useState("");

  // Estados ficticios de carga de archivos
  const [hasLogo, setHasLogo] = useState(false);
  const [hasFotoRector, setHasFotoRector] = useState(false);

  function handleSave() {
    if (!nombreInstitucion || !direccion || !email) {
      Alert.alert(
        "Campos Incompletos",
        "Por favor completa al menos el nombre de la institución, dirección y correo electrónico."
      );
      return;
    }

    Alert.alert(
      "¡Registro Exitoso!",
      `La institución "${nombreInstitucion}" ha sido configurada correctamente.`,
      [
        {
          text: "Aceptar",
          onPress: () => router.replace("/(protected)/(tabs)"),
        },
      ]
    );
  }

  return (
    <ScreenContainer style={{ backgroundColor: "#F8FAFC" }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* ENCABEZADO PRINCIPAL */}
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>Registra tu Institución</Text>
          <Text style={styles.subtitle}>
            Configura los detalles básicos para comenzar a recibir matrículas.
          </Text>
        </View>

        {/* TARJETA 1: DATOS DE INSTITUCIÓN */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconCircle}>
              <MaterialIcons name="domain" size={24} color="#3B82F6" />
            </View>
            <Text style={styles.cardTitle}>Datos de Institución</Text>
          </View>

          <CustomInput
            label=""
            placeholder="Nombre de la Institución"
            value={nombreInstitucion}
            onChangeText={setNombreInstitucion}
          />

          <TouchableOpacity
            style={[styles.uploadBtn, hasLogo && styles.uploadBtnActive]}
            onPress={() => {
              setHasLogo(!hasLogo);
              Alert.alert("Logo", hasLogo ? "Logo removido" : "Logo cargado correctamente.");
            }}
          >
            <Ionicons name="cloud-upload-outline" size={18} color="#475569" />
            <Text style={styles.uploadBtnText}>
              {hasLogo ? "✓ Logo Cargado" : "Logo Institucional"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* TARJETA 2: DESCRIPCIÓN GENERAL */}
        <View style={styles.card}>
          <Text style={styles.cardTitleAlone}>Descripción General</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe la visión, misión y valores..."
            placeholderTextColor="#94A3B8"
            multiline
            numberOfLines={4}
            value={descripcion}
            onChangeText={setDescripcion}
          />
        </View>

        {/* TARJETA 3: DATOS DEL RECTOR */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconCircle}>
              <Ionicons name="person-outline" size={22} color="#3B82F6" />
            </View>
            <Text style={styles.cardTitle}>Datos del Rector</Text>
          </View>

          <CustomInput
            label=""
            placeholder="Nombre completo"
            value={nombreRector}
            onChangeText={setNombreRector}
          />

          <TouchableOpacity
            style={[styles.uploadBtn, hasFotoRector && styles.uploadBtnActive]}
            onPress={() => {
              setHasFotoRector(!hasFotoRector);
              Alert.alert(
                "Foto Rector",
                hasFotoRector ? "Foto removida" : "Foto del rector cargada."
              );
            }}
          >
            <Ionicons name="camera-outline" size={18} color="#475569" />
            <Text style={styles.uploadBtnText}>
              {hasFotoRector ? "✓ Foto Cargada" : "Foto del Rector"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* TARJETA 4: INFORMACIÓN DE CONTACTO */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="information-circle-outline" size={22} color="#3B82F6" />
            <Text style={styles.cardTitle}>Información de Contacto</Text>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <CustomInput
                label=""
                placeholder="Dirección"
                value={direccion}
                onChangeText={setDireccion}
              />
            </View>
            <View style={{ flex: 1 }}>
              <CustomInput
                label=""
                placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <CustomInput
                label=""
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={{ flex: 1 }}>
              <CustomInput
                label=""
                placeholder="Ciudad / Municipio"
                value={ciudad}
                onChangeText={setCiudad}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Inicio de Clases</Text>
              <CustomInput
                label=""
                placeholder="dd / mm / aaaa"
                icon="calendar-outline"
                value={inicioClases}
                onChangeText={setInicioClases}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Fin de Clases</Text>
              <CustomInput
                label=""
                placeholder="dd / mm / aaaa"
                icon="calendar-outline"
                value={finClases}
                onChangeText={setFinClases}
              />
            </View>
          </View>
        </View>

        {/* TARJETA 5: GALERÍA E INSTITUCIÓN */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="image-outline" size={22} color="#1E293B" />
            <Text style={styles.cardTitle}>Galería e Institución</Text>
          </View>

          <Text style={styles.gallerySubtitle}>
            Sube fotos de la fachada y documentos de requisitos legales.
          </Text>

          <View style={styles.galleryGrid}>
            {/* Carga 1: Requisitos de Matrícula */}
            <TouchableOpacity style={styles.dashedBox}>
              <Feather name="upload" size={24} color="#3B82F6" />
              <Text style={styles.dashedTitle}>Requisitos de Matrícula</Text>
              <Text style={styles.dashedFormat}>Formatos: JPG, PNG</Text>
            </TouchableOpacity>

            {/* Carga 2: Preview Fachada Principal */}
            <View style={styles.previewBox}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
                }}
                style={styles.previewImage}
              />
              <View style={styles.previewTag}>
                <Text style={styles.previewTagText}>Fachada Principal</Text>
              </View>
            </View>

            {/* Carga 3: Documentos Extra */}
            <TouchableOpacity style={styles.dashedBox}>
              <Feather name="upload" size={24} color="#3B82F6" />
              <Text style={styles.dashedTitle}>Documentos Extra</Text>
              <Text style={styles.dashedFormat}>Formatos: JPG, PNG</Text>
            </TouchableOpacity>

            {/* Carga 4: Añadir Campo */}
            <TouchableOpacity style={styles.addBox}>
              <Ionicons name="add-circle-outline" size={26} color="#94A3B8" />
              <Text style={styles.addBoxText}>Añadir Campo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTÓN FINAL DE GUARDAR */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="cloud-upload-outline" size={20} color="#FFFFFF" />
          <Text style={styles.saveButtonText}>Guardar y Finalizar</Text>
        </TouchableOpacity>
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
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
  },
  cardTitleAlone: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 10,
  },
  uploadBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 10,
    alignSelf: "center",
    gap: 6,
  },
  uploadBtnActive: {
    backgroundColor: "#DCFCE7",
  },
  uploadBtnText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
  },
  textArea: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: "#1E293B",
    textAlignVertical: "top",
    minHeight: 90,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  inputLabel: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: -4,
    fontWeight: "500",
  },
  gallerySubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: -6,
    marginBottom: 14,
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },
  dashedBox: {
    width: "48%",
    height: 110,
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
    borderStyle: "dashed",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    padding: 8,
  },
  dashedTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 6,
    textAlign: "center",
  },
  dashedFormat: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 2,
  },
  previewBox: {
    width: "48%",
    height: 110,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  previewTag: {
    position: "absolute",
    bottom: 6,
    left: 6,
    right: 6,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 6,
    paddingVertical: 3,
    alignItems: "center",
  },
  previewTagText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1E293B",
  },
  addBox: {
    width: "48%",
    height: 110,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  addBoxText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
    marginTop: 4,
  },
  saveButton: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});