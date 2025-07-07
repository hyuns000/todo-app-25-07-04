import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //5강
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

//2강 HomeScreen 컴포넌트 생성 //3강 Button 컴포넌트 추가
const HomeScreen = ({}) => {
  const navigation = useNavigation();//3강 useNavigation, 복잡할 때 유연하게 사용
  //복잡한 구조인 경우에만 필요하다.
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 40, fontWeight: "bold"}}>메인 화면</Text>
      <Button  
        title="할 일 리스트 이동"
        onPress={() => navigation.navigate("TodoList")}>
      </Button>
      <Button  
        title="할 일 작성"
        onPress={() => navigation.navigate("TodoWrite")}>
      </Button>
    </View>
  );
}

const TodoSearchScreen = () => {
   return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: "bold"}}>할일 검색</Text>
    </View>
  );
}

const TodoListScreen = () => {
   return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: "bold"}}>할일 리스트</Text>
    </View>
  );
}

const MyPageScreen = () => {
   return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: "bold"}}>내 정보</Text>
    </View>
  );
}





//3강 push와 navigate 차이점
// const DetailScreen = ({route, navigation}) => {
//   const todo = route.params?.todo;//4강 글을 작성시  param으로 전달된 값을 받는다.


//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 40, fontWeight: "bold"}}>상세보기 화면</Text>
//       <Text style={{fontSize: 40, fontWeight: "bold"}}>
//         작성 내용 : {todo}
//         </Text>
//        <Button title="홈으로 이동" onPress={() => navigation.navigate('Home')}></Button>
//        <Button title="상세페이지로 이동" onPress={() => navigation.push('Details')}></Button>
//     </View>
//   );
// }

//4강
const TodoWriteScreen = ({navigation}) => {
 const [todo, setTodo] = useState('');

  return (
   <> <TextInput
          multiline
          onChangeText={setTodo}
          value={todo}
          placeholder="할 일을 작성해주세요."
          style={{flex:0.5, padding: 10, backgroundColor: '#fff', borderRadius:10, borderWidth: 2, margin:10}}
        />
        <Pressable onPress={() => {
          navigation.navigate("Details", {todo}); // 4강 9분 작성 누르면 Details 화면으로 이동
          setTodo("");
        }}>
  <Text style={{padding: 10, backgroundColor: '#fff', borderRadius:10, borderWidth: 2,
    width: "30%", textAlign:"center", fontWeight: "bold", margin: 10
  }}>작성</Text>
</Pressable></>
  );
}



//2강 상단좌측에 HOME
const StackActions = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const tabConfig = [
    {
      name: 'Home',
      title: '메인 홈',
      component: HomeScreen,
      focusedIcon: 'home-variant', //8강 아이콘 이름 변경
      unfocusedIcon: 'home-variant-outline', //8강 아이콘 이름 변경
      iconComponet: MaterialCommunityIcons
    },
     {
      name: 'TodoSearch',
      title: '할일 검색',
      component: TodoSearchScreen,
      focusedIcon: 'search-sharp', //8강 아이콘 이름 변경
      unfocusedIcon: 'search-outline', //8강 아이콘 이름 변경
      iconComponet: Ionicons
    },
     {
      name: 'TodoWrite',
      title: '할일 작성',
      component: TodoWriteScreen,
      focusedIcon: 'application-edit', //8강 아이콘 이름 변경
      unfocusedIcon: 'application-edit-outline', //8강 아이콘 이름 변경
      iconComponet: MaterialCommunityIcons
    },
     {
      name: 'TodoList',
      title: '할일 리스트',
      component:  TodoListScreen,
      focusedIcon: 'list-sharp', //8강 아이콘 이름 변경
      unfocusedIcon: 'list-outline', //8강 아이콘 이름 변경
      iconComponet: Ionicons
    },
     {
      name: 'MyPage',
      title: '내 정보',
      component: MyPageScreen,
      focusedIcon: 'person-circle-sharp', //8강 아이콘 이름 변경
      unfocusedIcon: 'person-circle-outline', //8강 아이콘 이름 변경
      iconComponet: Ionicons,

    }
  ]

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({focused, color, size}) => {
      const routeConfig = tabConfig.find((config) => tabConfig.name === route.name);

      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponet;

      return <IconComponent name={iconName} size={size} color={color} />;
    },
    tabBarLableStyle: {
        fontSize: 12,
        paddingBottom: 10,
        fontWeight: "bold",
      },
        tabBarIconStyle: {
          fontSize: 10,
          paddingBottom: 5,
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarInactiveTintColor: '#0163d2',
        tabBarActiveTintColor: 'black'
  })

  return (
   <NavigationContainer>
    {/* <StackActions.Navigator
     initialRouteName='Home' 
     screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}>
      <StackActions.Screen
       name="Home" 
       component={HomeScreen} 
       options={{
        title: "메인 홈", 
        headerRight: () => (
          <Pressable onPress={() => alert("클릭됨!!")}>
            <Text style={{ color: "#fff", fontWeight: "bold"}}>Menu</Text>
          </Pressable>
        )
    }}
      /> 
      <StackActions.Screen name="TodoWrite" component={TodoWriteScreen} />
      <StackActions.Screen name="Details" component={DetailScreen} />
    </StackActions.Navigator> */}
    <Tab.Navigator screenOptions={screenOptions}

    >
      
    </Tab.Navigator>
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
