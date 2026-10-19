import { Platform } from "react-native";
import Colors from "./colors";

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
};

export const radius = {
  sm: 12,
  md: 14,
  lg: 16,
};

export const typography = {
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.text,
  },
  body: {
    fontSize: 15,
    color: Colors.text,
  },
};

export const shadows = {
  card: Platform.select({
    ios: {
      shadowColor: "#0F172A",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
    },
    android: {
      elevation: 3,
    },
    default: {
      shadowColor: "#0F172A",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 3,
    },
  }),
  button: Platform.select({
    ios: {
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.22,
      shadowRadius: 8,
    },
    android: {
      elevation: 4,
    },
    default: {
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.22,
      shadowRadius: 8,
      elevation: 4,
    },
  }),
};

export const keyboardBehavior = Platform.OS === "ios" ? "padding" : "height";

export default {
  colors: Colors,
  spacing,
  radius,
  typography,
  shadows,
  keyboardBehavior,
};
