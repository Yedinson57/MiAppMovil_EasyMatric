import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../../../components/ScreenContainer";

export default function Institutions() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Instituciones</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});