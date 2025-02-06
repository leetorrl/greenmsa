import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputFormComponent from '../components/InputFormComponent';
import CheckBox from '../../assets/images/checkbox-svgrepo-com.svg';
import DeleteBox from '../../assets/images/close-square-svgrepo-com.svg';
import TodoItem from '../components/Todoitem';

const mTodos = [
  {
    id: '1',
    text: '할일1',
    state: 'todo',
  },
  {
    id: '2',
    text: '할일2',
    state: 'done',
  },
  {
    id: '3',
    text: '할일3',
    state: 'done',
  },
  {
    id: '4',
    text: '할일4',
    state: 'todo',
  },
];

const TodoMainScreen = () => {
  const [todos, setTodos] = React.useState(mTodos);
  const addTodo = text => {
    const newTodo = {
      id: String(todos.length + 1),
      text: text,
      state: 'todo',
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  return (
      <>
        <View style={styles.mainContainer}>
          <Text style={styles.pageTitle}>ToDo App</Text>
          <View style={styles.listView}>
            <Text style={styles.ListTitle}>할일</Text>
            <View>
              {todos.map(todo => {
                if (todo.state === 'todo') {
                  return (
                      <>
                        <View
                            key={todo.id}
                            style={{flexDirection: 'row', paddingVertical: 5}}>
                          <TouchableOpacity
                              onPress={() => {
                                const newTodos = todos.map(item =>
                                    item.id === todo.id ? { ...item, state: 'done' } : item
                                );
                                setTodos(newTodos);
                              }}>
                            <CheckBox width={30} height={30}></CheckBox>
                          </TouchableOpacity>
                          <Text style={{flex: 1, lineHeight: 26, fontSize: 20}}>
                            {todo.text}
                          </Text>
                          <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                            <DeleteBox width={30} height={30}></DeleteBox>
                          </TouchableOpacity>
                        </View>
                      </>
                  );
                }
              })}
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.listView}>
            <Text style={styles.ListTitle}>완료된일</Text>
            <View>
              {todos.map(todo => {
                console.log(todo);
                if (todo.state === 'done') {
                  return (
                      <TodoItem todo={todo} deleteTodo={deleteTodo}/>
                  );
                }
              })}
            </View>
          </View>
        </View>
        <InputFormComponent addTodo={addTodo} />
      </>
  );
};

export default TodoMainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  listView: {
    padding: 20,
  },
  ListTitle: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
});
