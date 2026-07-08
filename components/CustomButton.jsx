import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function CustomButton({
  title,
  onPress,
}) {
  return (

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >

      <Text style={styles.text}>
        {title}
      </Text>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  button:{
    backgroundColor:Colors.primary,
    height:55,
    borderRadius:14,
    justifyContent:"center",
    alignItems:"center",
    marginTop:15,
  },

  text:{
    color:"#fff",
    fontSize:17,
    fontWeight:"700",
  }

});