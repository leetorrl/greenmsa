
import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() =>  navigation.navigate("Profile",{name:"Jone", age:30}) }>
           Profile
          </Button>
      </View>
    );
  }

  export default HomeScreen;