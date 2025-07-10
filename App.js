import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //5강
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from "react";
import tabConfig from './configs/tabConfig';
import TodosProvider, { useTodosState } from './components/TodosProvider';



//2강 상단좌측에 HOME
const StackActions = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {




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
  <TodosProvider>
     <NavigationContainer>
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
  </TodosProvider>
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
