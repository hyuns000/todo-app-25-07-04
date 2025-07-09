import { Text, View, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import React, { useState, useRef } from "react";


const TodoWriteScreen = ({ navigation, route }) => {
  const [todo, setTodo] = useState('');

  const{addTodo} = route.params.todosState; // 13강
  console.log(route.params.todosState); // 할일 추가 함수 확인


  const headleAddTodo = () => {
    if(!todo.trim()) {
      Alert.alert("할 일을 입력해주세요.");
      return;
    }

    addTodo(todo);
    navigation.navigate("TodoList",{todo})
    setTodo(''); // 입력창 초기화
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        multiline
        onChangeText={setTodo}
        value={todo}
        placeholder="할 일을 작성해주세요."
        style={styles.inputBox}
      />

      <View style={{
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
      }}>
        <Pressable
          style={styles.PressableBtn}
          onPress={ headleAddTodo}
          >
          <Text style={styles.text}>작성</Text>
        </Pressable>

        <Pressable
          style={styles.PressableBtn}
          onPress={() => {
            navigation.navigate("Home");
          }}>
          <Text style={styles.text}>취소</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    minHeight: 200,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  PressableBtn: {
    width: "50%",
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default TodoWriteScreen;
