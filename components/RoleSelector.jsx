import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/colors";
import { radius, shadows, spacing } from "../constants/theme";

export default function RoleSelector({ selectedRole, onSelect }) {
  const roles = [
    { id: "student", label: "Student", icon: "🎓" },
    { id: "teacher", label: "Teacher", icon: "👨‍🏫" },
  ];

  return (
    <View style={styles.container}>
      {roles.map((role) => {
        const active = selectedRole === role.id;
        return (
          <TouchableOpacity
            key={role.id}
            style={[styles.card, active ? styles.active : styles.inactive]}
            onPress={() => onSelect(role.id)}
            activeOpacity={0.85}
          >
            <Text style={styles.icon}>{role.icon}</Text>
            <Text style={[styles.text, active && styles.activeText]}>
              {role.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: spacing.md,
  },
  card: {
    flex: 1,
    minHeight: 96,
    borderWidth: 1,
    borderRadius: radius.lg,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.surface,
    marginHorizontal: 6,
    paddingVertical: 16,
  },
  inactive: {
    borderColor: Colors.border,
  },
  active: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
    borderWidth: 2,
    ...shadows.card,
  },
  icon: {
    fontSize: 28,
  },
  text: {
    marginTop: 8,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  activeText: {
    color: Colors.primary,
    fontWeight: "700",
  },
});
