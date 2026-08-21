import { View, Text, StyleSheet } from "react-native";

export default function TeacherHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido, Docente
      </Text>

      <Text style={styles.subtitle}>
        Gestiona tus módulos y contenido académico desde EasyMatric.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#152E4D",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 24,
  },
});