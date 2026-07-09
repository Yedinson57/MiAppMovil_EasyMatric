import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contacto</Text>

      <Text>📧 easymatric@gmail.com</Text>
      <Text>📞 +57 300 123 4567</Text>
      <Text>📍 Bogotá, Colombia</Text>
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