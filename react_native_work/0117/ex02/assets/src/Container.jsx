
import React, {Component, useState} from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const imgArr = [
    {
        idx:1,
        name:"고양이1",
        uri:require('../images/bb.jpg')
    },
    {
        idx:2,
        name:"고양이2",
        uri:require('../images/cc.jpg')
    },
    {
        idx:3,
        name:"고양이?",
        uri:require('../images/KakaoTalk_20241018_122730922.jpg')
    }
]

export const Container = () => {

    const [num, setNum] =  useState()

    const imgPress = (num) => {
        setNum(num)
    }

  return (
    <View style={styles.container}>
        <Text style={{color:'#fbfbfb', fontSize:30 , width: '100%' , paddingHorizontal:20}}>Container</Text>
        
        {imgArr.map((image) => {
            return(
                <TouchableOpacity style={{width:'30%', height: 130}} onPress={() => imgPress(image.idx)}>

                <Image source={image.uri} style={{width:'100%', height:"100%", position:'relative'}}></Image>

                { num=== image.idx &&
                <View style={{position:'absolute',  bottom: 0, left:12 ,backgroundColor:'rgba(0,0,0,0.3)'}}>
                    <Text style={styles.textStyle}>{image.name}</Text>
                </View>
                }

                </TouchableOpacity>
            )
        })}
        <Text style={styles.textStyle}>{num}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        gap:10,
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor:'#9c9e90'
    },

    textStyle : {
        color : '#fbfbfb',
        fontSize: 30,
    },
})


export default Container;