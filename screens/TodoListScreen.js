import {  Text, View, StyleSheet } from 'react-native';
import React from "react";


const TodoListScreen = ({route}) => {
const { todos } = route.params?.todosState ||  {todos:  []} ; // 13강

console.log(todos); // 할일 리스트를 콘솔에 출력
  

   return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {todos.length > 0 ? (
      todos.map((todo) => (
        <View key = {todo.id} style ={styles.ListBox}>
          <Text>번호: {todo.id}</Text>
          <Text>작성날짜: {todo.regDate}</Text>
          <Text>할일: {todo.content}</Text>
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
  ListBox: {
    borderWidth: 0,
    width: "90%",
    padding: 10,
    borderRadius: 10, 
    
  },
});

export default TodoListScreen;

