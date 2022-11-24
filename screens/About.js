import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import {globalStyles} from '../styles/GlobalStyles';


export default function About(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.texts}>About</Text>
            <Text style={globalStyles.paragraph}>Lorem Ipsum dolor something </Text>
        </View>
    );
}

