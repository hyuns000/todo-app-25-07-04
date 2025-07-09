import {  Text, View } from 'react-native';
import React from "react";

const TodoListScreen = ({route}) => {
const { todos } = route.params.todosState ||  {todos:  []} ; // 13강

console.log(todos); // 할일 리스트를 콘솔에 출력
  

   return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: "bold"}}>할일 리스트</Text>
      <Text>{JSON.stringify(todos)}</Text>
    </View>
  );
};


export default TodoListScreen;