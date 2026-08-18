import { View, Text, StyleSheet } from "react-native";

export default function AdminHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a EasyMatric</Text>

      <Text style={styles.subtitle}>
        Panel de Administración
      </Text>

      <View style={styles.card}>
        <Text style={styles.number}>0</Text>
        <Text style={styles.label}>Estudiantes</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>0</Text>
        <Text style={styles.label}>Matrículas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>0</Text>
        <Text style={styles.label}>Instituciones</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#17213B",
    marginTop: 30,
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  number: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5188D8",
  },

  label: {
    fontSize: 16,
    marginTop: 5,
    color: "#555",
  },
});