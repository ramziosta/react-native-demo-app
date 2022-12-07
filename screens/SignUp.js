import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const nav = useNavigation();
  const auth = getAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      console.log(email);
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          keyboardType="password-address"
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Register" onPress={handleRegister} />
      </View>
      <Text style={styles.text}>Already registered? </Text>
      <Button title="Back to Login" onPress={() => nav.navigate("SignIn")} />
      <Button title="Continue" onPress={() => nav.navigate("Home")} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
