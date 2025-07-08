import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //5강
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

import tabConfig from './configs/tabConfig';

//2강 상단좌측에 HOME
const StackActions = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const tabConfig = [
   
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
    <Tab.Navigator screenOptions={screenOptions}>
    {tabConfig.map((routeConfig) => (
      <Tab.Screen 
        key={routeConfig.name} 
        name={routeConfig.name} 
        component={routeConfig.component} 
        options={{ title: routeConfig.title }} 
      />
    ))}
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
