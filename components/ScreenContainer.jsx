import { SafeAreaView, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function ScreenContainer({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});