import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
const ProfileScreen = ({navigation}) => {

  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const storedToken = await AsyncStorage.getItem('token');
  //     if (storedToken === null) {
  //       AsyncStorage.removeItem('token');  // token이 null이면 상태를 null로 설정
  //     } else {
  //       setToken(storedToken);  // token이 있으면 상태를 설정
  //     }
  //   };

  //   fetchToken();  // 컴포넌트가 마운트되면 fetchToken 호출
  // }, []);  // 빈 배열을 두 번째 인자로 넣어 한번만 실행되게 함


const token = AsyncStorage.getItem('token');

  return (
    <View style={styles.container}>
      <Text style={styles.tokenText}>Your token: {token}</Text>
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
  tokenText: {
 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
