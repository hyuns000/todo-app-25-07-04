import {  Text, View, StyleSheet, Pressable } from 'react-native';
import React, {useContext} from "react";
import { TodosContext } from '../components/TodosProvider'; // 16강
import { ListItem, Icon, Button } from "@rneui/themed"; //18강


const TodoListScreen = ({route}) => {
const { todos } = React.useContext(TodosContext); // 16강

console.log(todos); // 할일 리스트를 콘솔에 출력
  

   return (
    <View style={styles.todoListContainer}>
      {todos.length > 0 ? (
      todos.map((todo) => (
    <View key={todo.id} style={{marginTop: 5}}>
   <ListItem.Swipeable
     style={styles.listBox}
     leftContent={(reset) => (
      <Pressable 
        style={{...styles.pressbleBtn, backgroundColor: "blue"}}
        onPress={() => reset()}
        >
          <Icon name="info" color="white" />
          <Text style ={styles.btnText}>수정</Text>
        </Pressable>
         )}
       rightContent={(reset) => (
    <Pressable 
      style={{...styles.pressbleBtn, backgroundColor: "red"}}
      onPress={() => reset()}
      >
        <Icon name="delete" color="white" />
          <Text style ={styles.btnText}>삭제</Text>
    </Pressable>
   )}
>
  <Icon name="My Icon" />
  <ListItem.Content>
    <ListItem.Title>번호: {todo.id}</ListItem.Title>
    <ListItem.Subtitle>작성날짜: {todo.regDate}</ListItem.Subtitle>
    <ListItem.Subtitle>할일: {todo.content}</ListItem.Subtitle>
  </ListItem.Content>
</ListItem.Swipeable>
</View>
      ))
      ) : (
        <Text style={{fontSize: 20, fontWeight: "bold",}}>
          할 일이 없습니다.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  listBox: {
    borderWidth: 2,
  },
  pressbleBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  }
});

export default TodoListScreen;

