import React, { useState, useCallback } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { useFonts } from "expo-font";

export default function Home() {
  const [loaded] = useFonts({
    "DancingScript-Regular": require("../assets/fonts/DancingScript-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "wheat",
    padding: 24,
  },
  text: {
    fontFamily: "DancingScript-Regular",
  },
});
