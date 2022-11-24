import React, { useState, useCallback } from "react";
import { StyleSheet, Text, Button, View,  } from "react-native";
import { useFonts } from "expo-font";
import {globalStyles} from '../styles/GlobalStyles';

export default function Home({navigation}) {

  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
    // navigation.push('ReviewDetails');  use for complex app 
  }


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.texts}>Home Page</Text>
      <Button title={'Review dets'} onPress={pressHandler}/>
    </View>
  );
}

