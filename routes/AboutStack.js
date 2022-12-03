import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Header from "../components/Header";

const AboutStack = createStackNavigator();

const AboutStacks = ({ navigation }) => {
  return (
    <AboutStack.Navigator
    initialRouteName="About"
    
    screenOptions={{
      headerTitle: "About this thing",
      title: "About GameZone",
      headerShown: false, headerMode:"screen"
    }}
    >
      <AboutStack.Screen name="About" component={About}
      />
      <AboutStack.Screen name="Contact" component={Contact} />
    </AboutStack.Navigator>
  );
};

export default AboutStacks;
