import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

//2강 HomeScreen 컴포넌트 생성 //3강 Button 컴포넌트 추가
const HomeScreen = ({}) => {
  const navigation = useNavigation();//3강 useNavigation, 복잡할 때 유연하게 사용
  //복잡한 구조인 경우에만 필요하다.
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text Style={{fontSize: 40, fontWeight: "bold"}}>메인 화면</Text>
      <Button  
        title="상세 페이지 이동"
        onPress={() => navigation.navigate('Details')}>
      </Button>
      <Button  
        title="할 일 작성"
        onPress={() => navigation.navigate('TodoWrite')}>
      </Button>
    </View>
  );
}
//3강 push와 navigate 차이점
const DetailScreen = ({route, navigation}) => {
  const { todo } = route.params;//4강 글을 작성시  param으로 전달된 값을 받는다.

  console.log(todo);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: "bold"}}>상세보기 화면</Text>
      <Text style={{fontSize: 40, fontWeight: "bold"}}>작성 내용 : {todo}</Text>
       <Button title="홈으로 이동" onPress={() => navigation.navigate('Home')}></Button>
       <Button title="상세페이지로 이동" onPress={() => navigation.push('Details')}></Button>
    </View>
  );
}

//4강
const TodoWriteScreen = ({navigation}) => {
 const [todo, setTodo] = useState('');

  return (
   <> <TextInput
          multiline
          onChangeText={setTodo}
          value={todo}
          placeholder="할 일을 작성해주세요."
          style={{flex:0.5, padding: 10, baackgroundColor: '#fff', borderRadius:10, borderWidth: 2, margin:10}}
        />
        <Pressable onPress={() => {
          navigation.navigate("Details", {todo}); // 4강 9분 작성 누르면 Details 화면으로 이동
          setTodo("");
        }}>
  <Text style={{padding: 10, baackgroundColor: '#fff', borderRadius:10, borderWidth: 2,
    width: "30%", textAlign:"center", fontWeight: "bold", margin: 10
  }}>작성</Text>
</Pressable></>
  );
}

//2강 상단좌측에 HOME
const StackActions = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <StackActions.Navigator initialRouteName='Home'>
      <StackActions.Screen name="Home" component={HomeScreen} />
      <StackActions.Screen name="TodoWrite" component={TodoWriteScreen} />
      <StackActions.Screen name="Details" component={DetailScreen} />
    </StackActions.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
