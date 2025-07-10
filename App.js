import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //5강
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from "react";
import { dateToStr } from './utils/util';


const useTodosState = () => {
  const [todos, setTodos] = useState([]); 
  const lastTodoIdRef = React.useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current; 
    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }
  return {todos, addTodo};
};


import tabConfig from './configs/tabConfig';



//2강 상단좌측에 HOME
const StackActions = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const todosState = useTodosState(); 


  const screenOptions = ({ route }) => ({
    tabBarIcon: ({focused, color, size}) => {
      const routeConfig = tabConfig.find((config) => config.name === route.name);

      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;

      return <IconComponent name={iconName} size={size} color={color} />;
    },

    hederTittleAlign: "center",//11강
    hederTittleStyle: {
      fontSize: 23,
      fontWeight: "bold",

    },
    headerStyle: {
      //Aandroid
      elevation: 10,
      //IOS
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 4, 

    },
    tabBarLabelStyle: {
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

    <Tab.Navigator screenOptions={screenOptions}>
    {tabConfig.map((routeConfig) => (
      <Tab.Screen 
        key={routeConfig.name} 
        name={routeConfig.name} 
        component={routeConfig.component} 
        options={{ title: routeConfig.title }} 
        initialParams={{ todosState }} // 11강
      />
    ))}
    </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
