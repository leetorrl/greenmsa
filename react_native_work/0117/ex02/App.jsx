
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Container } from './assets/src/Container';


function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#fff' }}>
        <Text style={{ color: 'black', fontSize: 30, padding:30 }}>신상품 목록</Text>
      </View>

      <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row' }}>

      <Container/>
      
      </View>
     
 
    </SafeAreaView>
  );
}

export default App;