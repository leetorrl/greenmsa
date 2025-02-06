import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const MyCountComponent = () => {

    const [count, setCount] = useState(0);
    console.log("mycount 랜더링됨");
    return (
        <View style={{gap:10}}>
                <Text style={{fontSize:20}}>count = {count}</Text>
                <Button title="증가" onPress={()=>{setCount(count+1)}}></Button>
                <Button title="감소" onPress={()=>{setCount(count-1)}}></Button>
        </View>
    );
};

export default MyCountComponent;
