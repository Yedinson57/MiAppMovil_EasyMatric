import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import { radius, spacing } from "../constants/theme";

export default function CustomInput({
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  onFocus,
  secureTextEntry = false,
  icon,
  error,
  ...inputProps
}) {
  const [hidden, setHidden] = useState(secureTextEntry);
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View
        style={[
          styles.inputContainer,
          focused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        {icon ? (
          <Ionicons
            name={icon}
            size={22}
            color={focused ? Colors.primary : Colors.textSecondary}
          />
        ) : null}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidden}
          placeholderTextColor={Colors.textSecondary}
          {...inputProps}
          onFocus={(event) => {
            setFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            onBlur?.(event);
          }}
        />

        {secureTextEntry ? (
          <TouchableOpacity onPress={() => setHidden(!hidden)}>
            <Ionicons
              name={hidden ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: 13,
    marginBottom: 8,
    color: Colors.text,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: Colors.border,
    minHeight: 52,
  },
  inputFocused: {
    borderColor: Colors.primary,
  },
  inputError: {
    borderColor: Colors.danger,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.text,
  },
});
