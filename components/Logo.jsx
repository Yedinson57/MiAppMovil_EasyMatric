import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.icon}>🎓</Text>
      </View>

      <Text style={styles.title}>EASYmatric</Text>

      <Text style={styles.subtitle}>
        Smart Enrollment System
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 35,
  },

  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF30",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  icon: {
    fontSize: 42,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 6,
    color: "#E5E7EB",
    fontSize: 15,
  },
});