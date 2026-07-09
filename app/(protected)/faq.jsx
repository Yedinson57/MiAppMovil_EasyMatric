import { View, Text, StyleSheet } from "react-native";

export default function faq() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Preguntas Frecuentes</Text>

      <Text>¿Cómo me registro?</Text>
      <Text>Desde la opción "Iniciar sesión".</Text>

      <Text style={{ marginTop: 20 }}>
        ¿Cómo consulto mi matrícula?
      </Text>
      <Text>Ingresando con tu usuario.</Text>
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