import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import Form from "./Form";

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
  const [modalOpen, setModalOpen] = useState(false);

  const [listKey, setListKey] = useState(5);

  const addReview = (review) => {
    review.key = listKey.toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
    setListKey(listKey + 1);
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal visible={modalOpen}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={[styles.modalToggle, styles.modalClose]}
              onPress={() => setModalOpen(false)}
            />
            <Form addReview={addReview} />
          </View>
        </Modal>
      </TouchableWithoutFeedback>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
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

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,

    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    backgroundColor: "red",
    top: 100,
    height: 400,
  },
});
