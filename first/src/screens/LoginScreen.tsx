import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from 'axios'
import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, Alert, AsyncStorage} from 'react-native'

const Stack = createNativeStackNavigator()

const SERVER_IP = "http://175.116.94.172:3000"
//const SERVER_IP = "http://192.168.25.30:3000"
const PATH_LOGIN = "/login"

const Login = ({navigation}:any) => {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    AsyncStorage.getItem('token', (err, result) => {
        if (result != undefined && result != null) {
            navigation.navigate('SettingScreen')
        }
    })

    // 서버로 로그인 요청
    const reqLogin = () => {

        // 오류 처리
        if (id == undefined || id.trim() == '') { Alert.alert("로그인", "빈 칸이 존재합니다"); return }
        if (pw == undefined || pw.trim() == '') { Alert.alert("로그인", "빈 칸이 존재합니다"); return }

        axios.post(
            SERVER_IP + PATH_LOGIN, 
            null,
            { params: {id: id, pw: pw} }
        ).then( res => { 

            const data = res.data;
            
            if (data != undefined && data.result == 'success') {
                
                const token = data.token;
                
                // 나중에 AsyncStorage 대신 교체 필요
                AsyncStorage.setItem('token', token)
                AsyncStorage.setItem('login', id)
                navigation.navigate('SettingScreen')


            } else {
            
                Alert.alert("로그인", '존재하지 않는 아이디 또는 틀린 비밀번호 입니다')
            }

        }).catch( err => {
            console.log("server err: " + err)
        })
    }

    return ( 

        <SafeAreaView style={ styles.container }>
            <View style={ styles.login_box }>
                <Text style={ styles.login_title }>FIRST.GG</Text>
                <TextInput style={ styles.login_input } onChangeText={(value) => setId(value)} placeholder='아이디' autoCapitalize='none'/>
                <TextInput style={ styles.login_input } onChangeText={(value) => setPw(value)} placeholder='비밀번호' autoCapitalize='none' secureTextEntry={true} />
                <TouchableOpacity onPress={() => { reqLogin() }} style={styles.login_button}>
                    <Text style={styles.login_button_text}>로그인</Text>
                </TouchableOpacity>
                <Text onPress={() => navigation.navigate("RegisterScreen")} style={styles.login_register_text}>회원가입</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: { display: 'flex', flex: 1, justifyContent: 'center', padding: 50, backgroundColor: '#e0e0e0' },
    login_box: { backgroundColor: '#fff', borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.9, shadowRadius: 3.84, elevation: 10, shadowOffset: {width: 0, height: 5} },

    login_title: { marginBottom: 10, textAlign: 'center', color: '#f1c40f', fontSize: 50, fontWeight: '700', backgroundColor: '#153769', padding: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5},
    login_input: { marginTop: 20, marginHorizontal: 30, padding: 15, color:'#000', fontSize: 20, borderBottomColor: '#a0a0a0', borderBottomWidth: 1},
    login_button: { backgroundColor: '#f1c40f', marginTop: 50, marginHorizontal: 30, marginBottom:10, padding: 15, borderRadius: 5 },
    login_button_text: { textAlign: 'center', fontSize: 25 },
    login_register_text: { width:80, marginLeft:'auto', textAlign: 'right', fontSize: 20, marginRight: 30, marginBottom: 20 }
})

export default Login