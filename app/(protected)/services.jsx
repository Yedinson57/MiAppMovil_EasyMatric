import { View, Text, StyleSheet } from "react-native";

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Servicios</Text>
      <Text>• Matrículas en línea</Text>
      <Text>• Gestión de estudiantes</Text>
      <Text>• Consulta de documentos</Text>
      <Text>• Seguimiento del proceso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
});