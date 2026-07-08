import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

export default function Header({
  title,
  subtitle,
  onMenuPress,
  onNotificationPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={onMenuPress}>
          <Ionicons
            name="menu"
            size={30}
            color={Colors.text}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons
            name="notifications-outline"
            size={26}
            color={Colors.text}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    paddingHorizontal:20,
    paddingTop:15,
    paddingBottom:20,
  },

  topRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:20,
  },

  subtitle:{
    fontSize:16,
    color:Colors.textSecondary,
  },

  title:{
    fontSize:28,
    fontWeight:"700",
    color:Colors.text,
    marginTop:4,
  }

});