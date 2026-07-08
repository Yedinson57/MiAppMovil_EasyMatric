import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function RoleSelector({
  selectedRole,
  onSelect,
}) {
  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={[
          styles.card,
          selectedRole === "student" && styles.active,
        ]}
        onPress={() => onSelect("student")}
      >
        <Text style={styles.icon}>🎓</Text>

        <Text style={styles.text}>
          Student
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.card,
          selectedRole === "teacher" && styles.active,
        ]}
        onPress={() => onSelect("teacher")}
      >
        <Text style={styles.icon}>👨‍🏫</Text>

        <Text style={styles.text}>
          Teacher
        </Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:30,
  },

  card:{
    flex:1,
    height:90,
    borderWidth:1,
    borderColor:Colors.border,
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    marginHorizontal:6,
  },

  active:{
    backgroundColor:Colors.primaryLight,
    borderColor:Colors.primary,
    borderWidth:2,
  },

  icon:{
    fontSize:28,
  },

  text:{
    marginTop:8,
    fontWeight:"600",
    color:Colors.text,
  }

});