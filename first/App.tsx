import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faGear, faList } from '@fortawesome/free-solid-svg-icons';
import SearchStack from "./src/summoner/SearchStack";
import SettingStack from "./src/auth/SettingStack";
import Bbs from "./src/Bbs/Bbs";


const serverIp = "http://175.116.94.172:3000"

const TabIcon = ({ name, size, color }:any) => {
  return <FontAwesomeIcon icon={name} size={size} color={color}></FontAwesomeIcon>
};

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        { 
          tabBarLabelPosition: "beside-icon", 
          tabBarActiveTintColor: "#f39c12",
          tabBarInactiveTintColor: "#f1c40f", // 활성화 상태에 불 들어오게 하기
          headerShown: false,
          tabBarStyle: // 탭 전체 Bar 스타일
          {
            backgroundColor: "#1c4b8f", 
            borderTopColor: "#f1c40f"
          }, 
          tabBarLabelStyle: // 탭 요소의 라벨(글자) 스타일
          { 
            color: '#f1c40f' 
          } 
        }}>
        <Tab.Screen name='소환사 검색' component={SearchStack} options={{ tabBarIcon: props => TabIcon({ props, name: faSearch, color: '#f1c40f' }) }} />
        <Tab.Screen name='커뮤니티' component={Bbs}  options={{ tabBarIcon: props => TabIcon({ props, name: faList, color: '#f1c40f' }) }} />
        <Tab.Screen name='설정' component={SettingStack} options={{ tabBarIcon: props => TabIcon({ props, name: faGear, color: '#f1c40f' })}}/>
      
      </Tab.Navigator>
    </NavigationContainer>
  )
}
/* 
<Stack.Screen name="list" component={Bbslist} options={{title:"리스트"}}/>
<Stack.Screen name="write" component={Bbswrite} options={{title:"글작성"}}/>
<Stack.Screen name="detail" component={Bbsdetail} options={{title:"글수정삭제"}}/>
*/      

// 참고 - https://reactnavigation.org/docs/bottom-tab-navigator/