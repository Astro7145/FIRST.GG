import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Search from './Search';
import Summoner from './Summoner';

const Stack = createNativeStackNavigator()

export default function SearchStack()
{
    return (
        <Stack.Navigator initialRouteName="Search" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="Summoner" component={Summoner}/>
        </Stack.Navigator>
    )
}