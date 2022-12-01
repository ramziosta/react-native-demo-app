import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

export default function Contact({ route, navigation }) {
  const pressHandler = () => {
    //navigation.navigate("ReviewDetails");
    navigation.goBack();
  };
  return (
    <View>
      <Text style={globalStyles.texts}>Contact</Text>
      <Text style={globalStyles.paragraph}>Lorem Ipsum dolor something </Text>
      <Button title={"Back To About"} onPress={pressHandler} />
    </View>
  );
}
