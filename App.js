import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreens from "./routes/OnBoardingScreens";

export default function App() {
  const [loaded] = useFonts({
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <OnBoardingScreens />
    </NavigationContainer>
  );
}
