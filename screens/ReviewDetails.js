import React from "react";
import { Text, Button, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

export default function ReviewDetails({ route, navigation, }) {
  const {item} = route.params;
  const pressHandler = () => {
    navigation.navigate("Home");
    //navigation.goBack();
  };

  return (
    <View>
      <Text style={globalStyles.texts}>Review Details</Text>
      <Text>{route.params.title} </Text>
      <Text>{route.params.rating} </Text>
      <Text>{route.params.body} </Text>
      <Button title={"Back To Home"} onPress={pressHandler} />
    </View>
  );
}


