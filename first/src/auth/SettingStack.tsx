import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import MyBbsScreen from "../screens/MyBbsScreen";
import MyCommentScreen from "../screens/MyCommentScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Delete from "./Delete";
import Setting from "./Setting";
import Update from "./Update";

const Stack = createNativeStackNavigator()

export default function SettingStack()
{
    return (
        <Stack.Navigator initialRouteName="SettingScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="SettingScreen" component={Setting}/>
            <Stack.Screen name="update" component={Update}/>
            <Stack.Screen name="delete" component={Delete}/>
            <Stack.Screen name="MyBbsScreen" component={MyBbsScreen}/>
            <Stack.Screen name="MyCommentScreen" component={MyCommentScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}