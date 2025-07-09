 import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

 import HomeScreen from '../screens/HomeScreen';
 import TodoSearchScreen from '../screens/TodoSearchScreen';
 import TodoListScreen from '../screens/TodoListScreen';
 import TodoWriteScreen from '../screens/TodoWriteScreen';
 import MyPageScreen from '../screens/MyPageScreen';

 const tabConfig = [
 {
      name: 'Home',
      title: '메인 홈',
      component: HomeScreen,
      focusedIcon: 'home-variant', //8강 아이콘 이름 변경
      unfocusedIcon: 'home-variant-outline', //8강 아이콘 이름 변경
      iconComponent : MaterialCommunityIcons
    },
     {
      name: 'TodoSearch',
      title: '할일 검색',
      component: TodoSearchScreen,
      focusedIcon: 'search-sharp', //8강 아이콘 이름 변경
      unfocusedIcon: 'search-outline', //8강 아이콘 이름 변경
      iconComponent : Ionicons
    },
     {
      name: 'TodoWrite',
      title: '할일 작성',
      component: TodoWriteScreen,
      focusedIcon: 'application-edit', //8강 아이콘 이름 변경
      unfocusedIcon: 'application-edit-outline', //8강 아이콘 이름 변경
      iconComponent : MaterialCommunityIcons
    },
     {
      name: 'TodoList',
      title: '할일 리스트',
      component:  TodoListScreen,
      focusedIcon: 'list-sharp', //8강 아이콘 이름 변경
      unfocusedIcon: 'list-outline', //8강 아이콘 이름 변경
      iconComponent : Ionicons
    },
     {
      name: 'MyPage',
      title: '내 정보',
      component: MyPageScreen,
      focusedIcon: 'person-circle-sharp', //8강 아이콘 이름 변경
      unfocusedIcon: 'person-circle-outline', //8강 아이콘 이름 변경
      iconComponent: Ionicons,

    }
 ];

 export default tabConfig;