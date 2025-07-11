import {  Text, View, StyleSheet, Pressabl, Alert, Modal } from 'react-native';
import React, {useState, useContext} from "react";
import { TodosContext } from '../components/TodosProvider'; // 16강
import { ListItem, Icon, Button } from "@rneui/themed"; //18강


const TodoListScreen = ({route}) => {
  const [ modalVisible, setModalVisible] = useState(false);
  const { todos, removeTodo } = React.useContext(TodosContext); // 16강

  const openModifyModal = (reset) => {
    reset();
    setModalVisible(true);
  }
  const closeModifyModal = () => {
    setModalVisible(false);
  }


const headleRemoveTodo = (id, reset ) => {
      Alert.alert("삭제 확인", "정말 삭제하시겠습니까?", [
      {
        text: '삭제',
        onPress: () => {
          removeTodo(id);
          reset();
        },
        style: "destructive",
      },
      {text: '취소', onPress: () => reset(), style: 'cancel',},
    ],
        {
        cancelable: true, //경고창 상자 밖을 클릭하면 경고창 닫힘
        onDismiss: () => reset(), //상자 바깥을 클릭한 경우 콜백함수 실행

      }
  )
};

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
        onPress={() => openModifyModal(reset)}
        >
          <Icon name="info" color="white" />
          <Text style ={styles.btnText}>수정</Text>
        </Pressable>
         )}
       rightContent={(reset) => (
    <Pressable 
      style={{...styles.pressbleBtn, backgroundColor: "red"}}
      onPress={() => headleRemoveTodo(todo.id, reset)}
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
      )} //21강 
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
        <Pressable onPress={closeModifyModal} style={styles.modalContainer}>
          <View style={styles.modalBox}>

          </View>
          <Text style={{fontSize: 30}}>수정창</Text>
        </Pressable>
        </Modal>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    width: "80%",
    minHeight: 250,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default TodoListScreen;

