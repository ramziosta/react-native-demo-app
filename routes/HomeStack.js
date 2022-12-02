import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      // default props for header go here
      intialRouteName="Home page"
      screenOptions={{
        headerStyle: { backgroundColor: "red" },
        headerShown: false,
      }}
    >
      <Stack.Screen
        // override props for a specific header go here
        name="Home"
        component={Home}
        screenOptions={{
          title: "Home page title",
          headerStyle: { backgroundColor: "green" }, headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        screenOptions={{
          title: "Review Details",
          headerStyle: { backgroundColor: "yellow" }, headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}


/*
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'GameZone',
            }}
          />
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{
              title: 'Review Details',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

*/