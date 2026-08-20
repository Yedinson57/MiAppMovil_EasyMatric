import { View, Text, StyleSheet } from "react-native";

export default function UploadModule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Subir módulo
      </Text>

      <Text style={styles.subtitle}>
        Desde aquí podrás cargar nuevo contenido académico.
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
    fontSize: 26,
    fontWeight: "800",
    color: "#152E4D",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
  },
});