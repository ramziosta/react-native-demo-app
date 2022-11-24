import React, { useState, useCallback } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import { StyleSheet, Text, Button, View } from "react-native";
import { useFonts } from "expo-font";
import Navigator from './routes/HomeStack';

export default function App() {

  const [loaded] = useFonts({
    "DancingScript-Regular": require("./assets/fonts/DancingScript-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
   Navigator()
  );
}


