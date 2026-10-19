import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import Colors from "../constants/colors";
import { radius } from "../constants/theme";

export default function AppTextInput({
  style,
  error = false,
  onFocus,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      placeholderTextColor={Colors.textSecondary}
      {...props}
      onFocus={(event) => {
        setFocused(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        onBlur?.(event);
      }}
      style={[
        styles.input,
        focused && styles.focused,
        error && styles.error,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: radius.md,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: Colors.text,
    backgroundColor: Colors.surface,
  },
  focused: {
    borderColor: Colors.primary,
    backgroundColor: Colors.surface,
  },
  error: {
    borderColor: Colors.danger,
  },
});
