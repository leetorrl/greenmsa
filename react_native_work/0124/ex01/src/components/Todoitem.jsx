import React from 'react';
import CheckedBox from '../../assets/images/checkbox-checked-svgrepo-com.svg';
import {Text, TouchableOpacity, View} from 'react-native';
import DeleteBox from '../../assets/images/close-square-svgrepo-com.svg';

const TodoItem = ({todo,deleteTodo}) => {
    return (
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <CheckedBox width={30} height={30}></CheckedBox>
            <Text style={{flex: 1, lineHeight: 26, fontSize: 20}}>
                {todo.text}
            </Text>
            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <DeleteBox width={30} height={30}></DeleteBox>
            </TouchableOpacity>
        </View>
    );
};

export default TodoItem;
