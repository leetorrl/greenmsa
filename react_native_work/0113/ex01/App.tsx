
import React from 'react';
import { StyleSheet,View,Text, Image } from 'react-native';

function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
<Text style={styles.title}>
  으르릉 컹컹
</Text>
<Image style={styles.image} source={{uri:'https://cdn.kormedi.com/wp-content/uploads/2021/05/eric-isselae-440x580.jpg'}}/>
    </View>
  );

  };

  
const styles = StyleSheet.create({
  
  container: {
    flex:1,
    backgroundColor: '#eee',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:50,
  },
  image:{
    width:200,
    height:200
  }

});

export default App;
