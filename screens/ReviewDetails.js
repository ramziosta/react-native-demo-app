import React from "react";
import { StyleSheet, Text, Button, View, Image } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import Card from "../components/Card";
import { Images } from "../styles/Images";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;
  const rating = route.params.rating;

  const pressHandler = () => {
    navigation.navigate("Main");
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
      <Button title={"Back To Main"} onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});
