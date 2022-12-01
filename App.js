import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import  TabNavigator  from "./routes/TabNavigator";


export default function App() {

  const [loaded] = useFonts({
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
   <TabNavigator />
  );
}


