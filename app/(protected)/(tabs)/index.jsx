import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../../../components/ScreenContainer";
import Header from "../../../components/Header";

export default function HomeScreen() {
  return (
    <ScreenContainer>

      <Header
        userName="Yedinson"
        greeting="Good morning"
        showNotification
        showMenu
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Bienvenido a EASYmatric
        </Text>

        <Text style={styles.text}>
          Aquí construiremos el Dashboard del estudiante.
        </Text>
      </View>

    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
  },
});