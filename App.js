import React, { useState } from "react";
import Header from "./components/Header";
import TodoItem from './components/TodoItem';
import Form from './components/Form'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity, Alert
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy decaf coffee", key: "1" },
    { text: "create an apps", key: "2" },
    { text: "practice bass", key: "3" },
  ]);
const [key, setKey] = useState(4)
  const pressHandler =(key) => {
    setTodos((prevTodos) => { 
    return prevTodos.filter(todo => todo.key !=key);
    });
  }
 
  const handleAdd =(text) => {
    setKey(key+1);
    if(text.length > 3){
      setTodos((prevTodos) => { 
        return [...prevTodos, {text: text, key: key}];
        });
    }else{
    //   Alert.alert("must be over 3 char longs","Please enter more info",[{ text: "ok!", onPress: () => console.log('alert closed')}
    // ]);
    alert("must be over 3 char longs");
    }
    
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form handleAdd={handleAdd} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
