
import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';

function ProfileScreen({ navigation, route }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>name = {route.params.name}</Text>
        <Text>age = {route.params.age}</Text>
        
<Button 
        onPress={()=> navigation.goBack()} >
            Home
        </Button>
      </View>
    );
  }

  export default ProfileScreen;