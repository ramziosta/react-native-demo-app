import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Contact from "../screens/Contact";

const AboutStack = createStackNavigator();

export default function AboutStacks() {
  return (
    <AboutStack.Navigator
      initialRouteName="About"
      headerMode="screen"
      screenOptions={{
        headerTitle: "About this thing",
        title: "About GameZone",
        headerShown: false,
      }}
    >
      <AboutStack.Screen name="About" component={About} />
      <AboutStack.Screen name="Contact" component={Contact} />
    </AboutStack.Navigator>
  );
}
