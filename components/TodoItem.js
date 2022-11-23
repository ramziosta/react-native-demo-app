import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';


export default function TodoItem({ item, pressHandler }) {
   
  return (
    <TouchableOpacity
        style={styles.touchable}
        onPress={()=> pressHandler(item.key)}>
          <View>
            <MaterialIcons name='delete' size={32} color='red'/>
          </View>
      <Text style={styles.text}>{item.key}-{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 touchable: {
    padding: 16,
    marginTop: 16,
    backgroundColor: "#ddd",
    borderColor: 'black',
    borderWidth:3,
    borderRadius:12,
    borderStyle: 'solid',
    flexDirection:'row',
  },
  text: {
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
