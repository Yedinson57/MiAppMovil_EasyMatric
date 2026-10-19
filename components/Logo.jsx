import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

export default function Logo({ variant = "dark" }) {
  const isLight = variant === "light";

  return (
    <View style={styles.container}>
      <View style={[styles.circle, isLight ? styles.circleLight : styles.circleDark]}>
        <Text style={styles.icon}>🎓</Text>
      </View>

      <Text style={[styles.title, { color: isLight ? "#FFFFFF" : Colors.text }]}>
        EASYmatric
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: isLight ? "#E5E7EB" : Colors.textSecondary },
        ]}
      >
        Smart Enrollment System
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  circle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  circleDark: {
    backgroundColor: Colors.primaryLight,
  },
  circleLight: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  icon: {
    fontSize: 42,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
  },
});
