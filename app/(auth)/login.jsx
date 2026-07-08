import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import RoleSelector from "../../components/RoleSelector";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Colors from "../../constants/colors";

export default function Login() {

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    // Temporal
    router.replace("/(protected)/(tabs)");

  }

  return (

    <ScreenContainer>

      <View style={styles.topSection}>
        <Logo />
      </View>

      <View style={styles.bottomSection}>

        <Text style={styles.welcome}>
          Welcome Back!
        </Text>

        <RoleSelector
          selectedRole={role}
          onSelect={setRole}
        />

        <CustomInput
          label="Email"
          placeholder="Enter your email"
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          label="Password"
          placeholder="Enter your password"
          icon="lock-closed-outline"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity>

          <Text style={styles.forgot}>
            Forgot Password?
          </Text>

        </TouchableOpacity>

        <CustomButton
          title="Login"
          onPress={handleLogin}
        />

        <View style={styles.registerContainer}>

          <Text style={styles.registerText}>
            Don't have an account?
          </Text>

          <TouchableOpacity>

            <Text style={styles.register}>
              Register
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScreenContainer>

  );
}

const styles = StyleSheet.create({

  topSection:{

    flex:1,
    backgroundColor:Colors.primary,
    justifyContent:"center",
    alignItems:"center",

  },

  bottomSection:{

    flex:2,
    backgroundColor:"#fff",
    padding:25,
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    marginTop:-25,

  },

  welcome:{
    fontSize:28,
    fontWeight:"700",
    color:Colors.text,
    textAlign:"center",
  },

  forgot:{
    color:Colors.primary,
    alignSelf:"flex-end",
    marginBottom:10,
    fontWeight:"600",
  },

  registerContainer:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:25,
  },

  registerText:{
    color:Colors.textSecondary,
  },

  register:{
    color:Colors.primary,
    fontWeight:"700",
    marginLeft:6,
  }

});