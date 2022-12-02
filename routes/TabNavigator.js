import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNav from "./Drawer";
import Account from "../screens/Account";
import Settings from "../screens/Settings";
import Header from '../components/Header';
import { ImageBackground } from "react-native";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerBackground:()=> <ImageBackground source={require('../assets/game_bg.png')}  style={{width:"100%", height:"100%"}}/>}}>
      <Tab.Screen name="Home" component={DrawerNav} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
