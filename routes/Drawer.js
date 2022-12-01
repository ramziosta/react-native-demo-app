import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack'


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
      
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="HomeStack screen" component={HomeStack} />
          <Drawer.Screen name="About top screen" component={AboutStack} />
        
        </Drawer.Navigator>
     
    );
  }