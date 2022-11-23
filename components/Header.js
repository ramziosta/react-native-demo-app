import React from "react";
import {
  StyleSheet,
  Text,
  View,

} from "react-native";

export default function Header() {
    return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
    )
 }


const styles = StyleSheet.create({
    header: {
    height: 80,
    backgroundColor: 'coral',
    paddingTop: 38,
    },
   title:{
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 3,
   }
  });
