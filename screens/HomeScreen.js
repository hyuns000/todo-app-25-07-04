import {  Text, View } from 'react-native';

//2강 HomeScreen 컴포넌트 생성 //3강 Button 컴포넌트 추가
export default HomeScreen = ({}) => {
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
};