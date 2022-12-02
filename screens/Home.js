import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "List Item one",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "List Item two",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "List Item three",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.texts}>Home Page</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.texts}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
