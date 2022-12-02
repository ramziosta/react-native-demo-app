import React from "react";
import TabNavigator from "../routes/TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";

const Stack = createStackNavigator();

const OnBoardingScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default OnBoardingScreens;
