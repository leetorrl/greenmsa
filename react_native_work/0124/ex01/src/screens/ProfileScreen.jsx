import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Todolist" onPress={() => navigation.navigate('Todo')}/>
        <Button title="Go to Imageupload" onPress={() => navigation.navigate('Upload')}/>
      <Button title="Go to count" onPress={() => navigation.navigate('Upload')}/>
    </View>
  );
};

export default ProfileScreen;

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
