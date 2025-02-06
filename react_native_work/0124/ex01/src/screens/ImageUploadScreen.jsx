import React, {useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import MyCountComponent from '../components/MyCountComponent';
import ImageUploadComponent from '../components/ImageUploadComponent';

const ImageUploadScreen = () => {
  console.log('ImageUpload 랜더링됨');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(234,234,234)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>ImageUploadScreen</Text>
      <View>
        <ImageUploadComponent aa={10} />
        <ImageUploadComponent aa={20} />
        <ImageUploadComponent aa={30} />
      </View>

      <MyCountComponent name={1} />
      <MyCountComponent name={2} />
      <MyCountComponent name={3} />
    </View>
  );
};

export default ImageUploadScreen;
