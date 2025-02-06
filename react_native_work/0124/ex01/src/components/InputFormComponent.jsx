import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const InputFormComponent = ({addTodo}) => {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={text}
                onChangeText={setText}
                style={styles.textInput}
                placeholder="할일을 등록하세요" />
            <TouchableOpacity style={styles.addButton} onPress={
                ()=>{addTodo(text); setText('');}
            }>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default InputFormComponent;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 30,
        flexDirection: 'row',
        gap: 10,
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    addButton: {
        backgroundColor: 'skyblue',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 3,
        marginRight: 5,
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
    },
});
