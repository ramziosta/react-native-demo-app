import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
   
  return (
    <TouchableOpacity
        style={styles.touchable}
        onPress={()=> pressHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 touchable: {
    padding: 16,
    marginTop: 16,
    backgroundColor: "grey",
    borderColor: 'black',
    borderWidth:3,
    borderRadius:12,
    borderStyle: 'solid',
  },
  text: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
