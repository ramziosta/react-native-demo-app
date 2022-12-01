import React from "react";
import { useFonts } from "expo-font";
import  TabNavigator  from "./routes/TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";



const SignInScreen = (props) => {
  const nav = useNavigation();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In Screen</Text>
      <Button title="Sign Up" onPress={() => props.navigation.navigate("SignUp")} />
    </View>
  );
};

const SignUpScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up</Text>
      <Button title="Continue" onPress={() => nav.navigate('Home')} />
    </View>
  );
};

const Stack = createStackNavigator();

const OnboardingScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="Home"
        component={TabNavigator }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};




export default function App() {

  const [loaded] = useFonts({
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer >
      <OnboardingScreens />
    </NavigationContainer>
  
  );
}


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});