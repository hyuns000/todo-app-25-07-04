import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//2강 HomeScreen 컴포넌트 생성
const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text Style={{fontSize: 40, fontWeight: "bold"}}>메인 화면</Text>
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text Style={{fontSize: 40, fontWeight: "bold"}}>상세보기 화면</Text>
    </View>
  );
}

//2강 상단좌측에 HOME
const StackActions = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <StackActions.Navigator initialRouteName='Home'>
      <StackActions.Screen name="Home" component={HomeScreen} />
      <StackActions.Screen name="Details" component={DetailScreen} />
    </StackActions.Navigator>
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
