import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Platform, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import ScreenContainer from "../../../components/ScreenContainer";
import Colors from "../../../constants/colors";

const usuario = require("../../../assets/img01.png");

const datosPersonales = [
  ["Primer Nombre", "Juan"],
  ["Segundo Nombre", "Andres"],
  ["Primer Apellido", "Estrada"],
  ["Segundo Apellido", "Erazo"],
  ["Tipo de Documento", "C.C."],
  ["Número de Identificación", "10058191"],
  ["Teléfono Móvil", "310 123 4567"],
];

export default function Profile() {
  const router = useRouter();
  const [notifEmail, setNotifEmail] = useState(true);
  const [accesibilidad, setAccesibilidad] = useState(false);

  const irEditarPerfil = () => router.push("/(protected)/(tabs)/profile");
  const irCambiarContrasena = () => router.push("/(auth)/forgot_password");
  const cerrarSesion = () => router.replace("/(auth)/login");

  return (
    <ScreenContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Título simple en lugar de re-renderizar el Header con hamburguesa */}
        <Text style={styles.tituloPantalla}>Mi Perfil</Text>

        <View style={styles.filaCerrarSesion}>
          <TouchableOpacity
            onPress={cerrarSesion}
            hitSlop={10}
            style={styles.btnCerrarSesion}
          >
            <Ionicons name="log-out-outline" size={20} color={theme.azulNavy} />
            <Text style={styles.textoCerrarSesion}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.perfilHeader}>
          <View style={styles.filaInfoBasica}>
            <View style={styles.avatarZona}>
              <Image source={usuario} style={styles.avatarImg} />
              <TouchableOpacity style={styles.btnCambiarFoto}>
                <Ionicons name="camera-outline" size={16} color={theme.blanco} />
              </TouchableOpacity>
            </View>

            <View style={styles.textoUsuario}>
              <Text style={styles.nombreUsuario}>Juan Andres Estrada Erazo</Text>
              <Text style={styles.etiquetaRol}>Aspirante - Ciclo Lectivo 2026</Text>
              <View style={styles.filaUbicacion}>
                <Ionicons name="location-outline" size={14} color={theme.grisTexto} />
                <Text style={styles.textoUbicacion}>Popayán, Colombia</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.botonAccionPrincipal} onPress={irEditarPerfil}>
            <Ionicons name="create-outline" size={16} color={theme.blanco} />
            <Text style={styles.textoBotonPrincipal}>Actualizar Datos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tarjetaBlanca}>
          <View style={styles.tituloTarjetaFila}>
            <Ionicons name="person-outline" size={18} color={theme.cyanEm} />
            <Text style={styles.tituloTarjetaTexto}>Información Personal</Text>
          </View>

          <View style={styles.datosGrid}>
            {datosPersonales.map(([label, value]) => (
              <View style={styles.datoItem} key={label}>
                <Text style={styles.datoLabel}>{label}</Text>
                <View style={styles.cajaDato}>
                  <Text style={styles.cajaDatoTexto}>{value}</Text>
                </View>
              </View>
            ))}

            <View style={styles.datoItemAncho}>
              <Text style={styles.datoLabel}>Correo Institucional</Text>
              <View style={styles.cajaDato}>
                <Text style={styles.cajaDatoTexto}>juanestrada@soysena.edu.co</Text>
              </View>
            </View>

            <View style={styles.datoItemAncho}>
              <Text style={styles.datoLabel}>Institución Educativa de Interés</Text>
              <View style={styles.cajaDato}>
                <Text style={styles.cajaDatoTexto}>Institución Educación San Vicente</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tarjetaBlanca}>
          <View style={styles.tituloTarjetaFila}>
            <Ionicons name="pulse-outline" size={18} color={theme.cyanEm} />
            <Text style={styles.tituloTarjetaTexto}>Estado de Matrícula</Text>
          </View>

          <View style={styles.barraExterna}>
            <View style={[styles.barraInterna, { width: "85%" }]} />
          </View>
          <Text style={styles.textoProgreso}>85% Completado</Text>
          <Text style={styles.notaAyuda}>
            Tu proceso está en revisión por la secretaría académica.
          </Text>
        </View>

        <View style={styles.tarjetaBlanca}>
          <View style={styles.tituloTarjetaFila}>
            <Ionicons name="shield-checkmark-outline" size={18} color={theme.cyanEm} />
            <Text style={styles.tituloTarjetaTexto}>Seguridad</Text>
          </View>
          <Text style={styles.textoNormal}>Protege tu información personal.</Text>
          <TouchableOpacity style={styles.btnSeguridad} onPress={irCambiarContrasena}>
            <Text style={styles.btnSeguridadTexto}>Cambiar contraseña</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.tarjetaBlanca, styles.ultimaTarjeta]}>
          <View style={styles.tituloTarjetaFila}>
            <Ionicons name="settings-outline" size={18} color={theme.cyanEm} />
            <Text style={styles.tituloTarjetaTexto}>Preferencias</Text>
          </View>

          <View style={styles.controlSwitch}>
            <Text style={styles.textoNormal}>Notificaciones por Correo</Text>
            <Switch
              value={notifEmail}
              onValueChange={setNotifEmail}
              trackColor={{ false: theme.borde, true: theme.cyanEm }}
              thumbColor={theme.blanco}
            />
          </View>

          <View style={styles.controlSwitch}>
            <Text style={styles.textoNormal}>Modo Accesibilidad</Text>
            <Switch
              value={accesibilidad}
              onValueChange={setAccesibilidad}
              trackColor={{ false: theme.borde, true: theme.cyanEm }}
              thumbColor={theme.blanco}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const theme = {
  grisFondo: "#F4F6F9",
  blanco: "#FFFFFF",
  azulNavy: Colors.text,
  cyanEm: Colors.primary,
  grisTexto: Colors.textSecondary,
  borde: Colors.border,
};

const sombraTarjeta = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  android: {
    elevation: 3,
  },
});

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  tituloPantalla: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.azulNavy,
    marginTop: 12,
    marginBottom: 4,
  },
  filaCerrarSesion: {
    alignItems: "flex-end",
    marginBottom: 12,
  },
  btnCerrarSesion: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoCerrarSesion: {
    color: theme.azulNavy,
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 6,
  },
  perfilHeader: {
    backgroundColor: theme.blanco,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    ...sombraTarjeta,
  },
  filaInfoBasica: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarZona: {
    position: "relative",
    marginRight: 16,
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: theme.cyanEm,
  },
  btnCambiarFoto: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: theme.azulNavy,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  textoUsuario: {
    flex: 1,
  },
  nombreUsuario: {
    fontSize: 17,
    fontWeight: "700",
    color: theme.azulNavy,
  },
  etiquetaRol: {
    color: theme.cyanEm,
    fontWeight: "700",
    fontSize: 12,
    marginTop: 2,
  },
  filaUbicacion: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  textoUbicacion: {
    color: theme.grisTexto,
    fontSize: 12,
    marginLeft: 4,
  },
  botonAccionPrincipal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.cyanEm,
    paddingVertical: 12,
    borderRadius: 12,
  },
  textoBotonPrincipal: {
    color: theme.blanco,
    fontWeight: "600",
    marginLeft: 8,
  },
  tarjetaBlanca: {
    backgroundColor: theme.blanco,
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    ...sombraTarjeta,
  },
  ultimaTarjeta: {
    marginBottom: 0,
  },
  tituloTarjetaFila: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  tituloTarjetaTexto: {
    fontSize: 15,
    fontWeight: "700",
    color: theme.azulNavy,
    marginLeft: 8,
  },
  datosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  datoItem: {
    width: "48%",
    marginBottom: 14,
  },
  datoItemAncho: {
    width: "100%",
    marginBottom: 14,
  },
  datoLabel: {
    fontSize: 11,
    color: theme.grisTexto,
    marginBottom: 4,
  },
  cajaDato: {
    backgroundColor: theme.grisFondo,
    padding: 10,
    borderRadius: 10,
  },
  cajaDatoTexto: {
    fontWeight: "600",
    color: theme.azulNavy,
    fontSize: 13,
  },
  barraExterna: {
    backgroundColor: theme.grisFondo,
    height: 10,
    borderRadius: 10,
    marginBottom: 8,
    overflow: "hidden",
  },
  barraInterna: {
    backgroundColor: theme.cyanEm,
    height: "100%",
    borderRadius: 10,
  },
  textoProgreso: {
    fontSize: 12,
    color: theme.grisTexto,
    marginBottom: 10,
  },
  notaAyuda: {
    fontSize: 12,
    color: theme.grisTexto,
  },
  textoNormal: {
    fontSize: 13,
    color: theme.azulNavy,
  },
  btnSeguridad: {
    marginTop: 14,
    backgroundColor: theme.grisFondo,
    borderWidth: 1,
    borderColor: theme.borde,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnSeguridadTexto: {
    color: theme.azulNavy,
    fontWeight: "600",
    fontSize: 13,
  },
  controlSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
});