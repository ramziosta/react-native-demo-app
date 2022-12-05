import React, { useState, useEffect } from "react";
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
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";

export default function Home({ navigation }) {
  const [Articles, setArticles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);


  //> ------retrieve data from database----------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "article"));
        const Articles = [];
        querySnapshot.forEach((doc) => {
          Articles.push({ ...doc.data() });
        });
        setArticles(Articles);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //< ---------send data to the database-------------

  const [listKey, setListKey] = useState(5);
  const addReview = (review) => {
    review.key = listKey.toString();
    setArticles((currentReviews) => {
      return [review, ...currentReviews];
    
    });
    setModalOpen(false);
    setListKey(listKey + 1);
    console.log(listKey);
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
      <Text style={globalStyles.texts}>This is inside the Home.js</Text>
      <FlatList
        data={Articles }
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
