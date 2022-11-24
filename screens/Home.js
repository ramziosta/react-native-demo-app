import React, { useState, useCallback } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { useFonts } from "expo-font";
import {globalStyles} from '../styles/GlobalStyles';

export default function Home() {


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.texts}>Home Page</Text>
    </View>
  );
}

