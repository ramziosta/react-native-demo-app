import React from "react";
import { StyleSheet, Text, Button, View, Image } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import Card from "../components/Card";
import { Images } from "../styles/Images";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;
  const rating = route.params.rating;

  const pressHandler = () => {
    navigation.navigate("Home");
    //navigation.goBack();
  };

  return (
    <View>
      <Text style={globalStyles.texts}>Review Details</Text>
      <Card>
        <Text>{route.params.title} </Text>
        <Text>{route.params.body} </Text>
        {/* <Text>{route.params.rating} </Text> */}
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={Images.ratings[rating]} />
        </View>
      </Card>
      <Button title={"Back To Home"} onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
  },
});
