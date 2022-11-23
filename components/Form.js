import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function Form({ handleAdd}) {
    
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };



  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Add new Todo"
        onChangeText={changeHandler}
      />
      <Button onPress={() => handleAdd(text)} title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical:6,
    width: 330,
  },
});
