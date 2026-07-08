import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

export default function CustomInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
}) {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={styles.container}>

      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>

        {icon && (
          <Ionicons
            name={icon}
            size={22}
            color={Colors.textSecondary}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidden}
          placeholderTextColor={Colors.textSecondary}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setHidden(!hidden)}>
            <Ionicons
              name={hidden ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>
        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    marginBottom:20,
  },

  label:{
    fontSize:15,
    marginBottom:8,
    color:Colors.text,
    fontWeight:"600",
  },

  inputContainer:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:14,
    paddingHorizontal:16,
    borderWidth:1,
    borderColor:Colors.border,
    height:56,
  },

  input:{
    flex:1,
    marginLeft:10,
    fontSize:16,
    color:Colors.text,
  }

});