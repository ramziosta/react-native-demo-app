import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);
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
      <ScrollView>
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
      <ScrollView>
        {
          people.map(item => {
            return (
              <View key={item.id}>
                <Text style={styles.item} >{item.name}</Text>
              </View>
              );
          })
        }
      </ScrollView>
      <FlatList 
      style = {styles.list}
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
      /> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    // alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
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
  list:{
    marginTop:10,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
