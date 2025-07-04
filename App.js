import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//2강 HomeScreen 컴포넌트 생성 //3강 Button 컴포넌트 추가
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text Style={{fontSize: 40, fontWeight: "bold"}}>메인 화면</Text>
      <Button  
        title="상세 페이지 이동"
        onPress={() => navigation.navigate('Details')}>
      </Button>
    </View>
  );
}
//3강 push와 navigate 차이점
const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text Style={{fontSize: 40, fontWeight: "bold"}}>상세보기 화면</Text>
       <Button title="홈으로 이동" onPress={() => navigation.navigate('Home')}></Button>
       <Button title="상세페이지로 이동" onPress={() => navigation.push('Details')}></Button>
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
