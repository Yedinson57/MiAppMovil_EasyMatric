import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "../components/ScreenContainer";

export default function HomeScreen() {
  const navigation = useNavigation();

  // ✅ Abre el Drawer en Expo SDK 56 sin importar @react-navigation
  const abrirMenu = () => {
    navigation.dispatch({ type: "OPEN_DRAWER" });
  };

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* HEADER DEL HOME */}
        <View style={styles.header}>
          {/* BOTÓN HAMBURGUESA */}
          <TouchableOpacity style={styles.menuButton} onPress={abrirMenu}>
            <Ionicons name="menu-outline" size={30} color="#152e4d" />
          </TouchableOpacity>
        </View>

        {/* CONTENIDO PRINCIPAL */}
        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.title}>
              Transformamos{"\n"}
              la matrícula{"\n"}
              estudiantil
            </Text>

            <Text style={styles.description}>
              EasyMatric es una plataforma digital diseñada para modernizar el
              proceso de matrícula en instituciones públicas, permitiendo que
              estudiantes y administradores gestionen todo de manera rápida,
              organizada y desde cualquier lugar.
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
              <Text style={styles.primaryText}>Comenzar</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryText}>Conocer más</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  menuButton: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    paddingTop: 10,
  },
  heroText: {
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    color: "#0f172a",
    fontWeight: "700",
    lineHeight: 43,
    marginBottom: 20,
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
    backgroundColor: "#2563EB",
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
    borderColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryText: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "700",
  },
});