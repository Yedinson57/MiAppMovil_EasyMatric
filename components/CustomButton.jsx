import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";
import { radius, shadows } from "../constants/theme";

export default function CustomButton({
  title,
  onPress,
  disabled = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    minHeight: 52,
    borderRadius: radius.md,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 16,
    ...shadows.button,
  },
  disabled: {
    opacity: 0.55,
    elevation: 0,
    shadowOpacity: 0,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
