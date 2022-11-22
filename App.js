import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("ramzi");
  const [age, setAge] = useState(13);

  // const clickHandler = () => {
  //   if (name === "ramzi") {
  //     setName("Mojo Jojo");
  //   } else {
  //     setName("ramzi");
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>My name is {name}</Text>
        <Text style={styles.bodyText}>
          {name} is {age} years old!
        </Text>
        <Text style={styles.bodyText}>{age}</Text>
        {/* <View style={styles.buttonContainer}>
          <Button title="update" onPress={clickHandler} />
        </View> */}
        <TextInput 
        style={styles.textInput} 
        placeholder='Enter name'
        onChangeText={(newName)=>setName(newName)}
        />
        <TextInput 
        keyboardType="numeric"
        style={styles.textInput} 
        placeholder='Enter age'
        onChangeText={(newAge)=>setAge(newAge)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "yellow",
    padding: 20,
  },
  headerText: {
    fontSize: 32,
  },
  body: {
    backgroundColor: "red",
    padding: 6,
  },
  bodyText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 30,
    border: "solid 3px black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    margin: 10,
    width: 200,
  },
});
