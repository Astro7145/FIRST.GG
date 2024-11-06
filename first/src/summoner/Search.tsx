import { faFontAwesome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../css/summonerStyle"

// 로그인에서 이동
const Stack = createNativeStackNavigator()

export default function Search({navigation}:any)
{
  const [keyword, setKeyword] = useState("")
  
  console.log(`Search >> ${navigation}`)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          FIRST.GG
        </Text>
      </View>
      <View style={styles.searchField}>
        <TouchableOpacity style={styles.searchButton} activeOpacity={0.8} onPress={() => navigation.navigate('Summoner', {keyword: keyword})}>
          <FontAwesomeIcon icon={faSearch} size={40} style={styles.iconSearch}></FontAwesomeIcon>
        </TouchableOpacity>
        <TextInput style={styles.searchBar} onChangeText={setKeyword} placeholder="소환사명을 입력하세요"/>
      </View>
    </View>
  )
}