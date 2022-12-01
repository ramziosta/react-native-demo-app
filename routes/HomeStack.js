import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      // default props for header go here
      intialRouteName="Home page"
      screenOptions={{ headerStyle: { backgroundColor: "red" } }}
    >
      <Stack.Screen
        // override props for a specific header go here
        name="Home"
        component={Home}
        options={{
          title: "Home page title",
          headerStyle: { backgroundColor: "green" },
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
          headerStyle: { backgroundColor: "yellow" },
        }}
      />
    </Stack.Navigator>
  );
}
