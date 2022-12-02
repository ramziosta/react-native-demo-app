import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

const SignInScreen = (props) => {
  const nav = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In Screen</Text>
      <Button
        title="Sign Up"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default SignInScreen;

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
});
