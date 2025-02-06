import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import Toast from 'react-native-toast-message';
import TodoMainScreen from './src/screens/TodoMainScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ImageUploadScreen from './src/screens/ImageUploadScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Todo" component={TodoMainScreen} />
        <Drawer.Screen name="Upload" component={ImageUploadScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
      <Toast config={{zIndex: 1000}} />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

