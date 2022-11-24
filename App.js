import React, { useState, useCallback } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import { StyleSheet, Text, Button, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "RubikDistressed-Regular": require("./assets/fonts/RubikDistressed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <Home />
      <Text style={styles.text}>hello world whats going on?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "RubikDistressed-Regular",
    fontSize: 40,
  },
});
