import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import {globalStyles} from '../styles/GlobalStyles';

export default function ReviewDetails({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Home');
    //navigation.goBack();
    
  }

  return (
    <View >
      <Text style={globalStyles.texts}>Review Details</Text>
      <Button title={'Back To Home'} onPress={pressHandler}/>
    </View>
  );
}
