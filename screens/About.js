import React from "react";
import { Text, Button, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

export default function About({ route, navigation }) {
  const pressHandler = () => {
    navigation.navigate("Contact");
    //navigation.goBack();
  };
  return (
    <View>
      <Text style={globalStyles.texts}>About</Text>
      <Text style={globalStyles.paragraph}>Lorem Ipsum dolor something </Text>
      <Button title={"Contact"} onPress={pressHandler} />
    </View>
  );
}
