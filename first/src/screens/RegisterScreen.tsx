import { createNativeStackNavigator } from "@react-navigation/native-stack"
import axios from "axios"
import React, { useState } from "react"
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

const Stack = createNativeStackNavigator()

const SERVER_IP = "http://175.116.94.172:3000"
//const SERVER_IP = "http://192.168.25.30:3000"
const PATH_REG = "/register"
const PATH_DUP = "/checkDup"

const Register = ({navigation}:any) => {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [p2, setP2] = useState('')
    const [un, setUn] = useState('')
    const [em, setEm] = useState('')

    const [isDup, setIsDup] = useState(false)

    // 서버로 회원가입 요청
    const reqRegister = () => {

        // 오류 처리
        if (id == undefined || id.trim() == '') { Alert.alert('회원가입', '빈칸이 존재합니다'); return }
        if (pw == undefined || pw.trim() == '') { Alert.alert('회원가입', '빈칸이 존재합니다'); return }
        if (p2 == undefined || p2.trim() == '') { Alert.alert('회원가입', '빈칸이 존재합니다'); return }
        if (un == undefined || un.trim() == '') { Alert.alert('회원가입', '빈칸이 존재합니다'); return }
        if (em == undefined || em.trim() == '') { Alert.alert('회원가입', '빈칸이 존재합니다'); return }

        if (isDup == true) { Alert.alert('회원가입', '중복확인이 되어있지 않습니다'); return }
        if (pw.trim() != p2.trim()) { Alert.alert('회원가입', '비밀번호가 일치하지 않습니다'); return }
        

        axios.post(
            SERVER_IP + PATH_REG,
            null,
            { params: {id: id, pw: pw, username: un, email: em} }
        ).then( res => {
            
            const data = res.data
            
            if (data != undefined && data.result == 'success') {

                Alert.alert('회원가입', '회원가입 되었습니다',
                [{onPress: ()=>navigation.navigate("LoginScreen")}])
                

            } else {

                Alert.alert('회원가입', '회원가입에 실패하였습니다')
            }
        })
    }

    // 중복 확인
    const checkDup = () => {

        // 오류 처리
        if (id == undefined || id.trim() == '') { setIsDup(true); return }

        axios.post(
            SERVER_IP + PATH_DUP,
            null,
            { params: {id: id} }
        ).then( res => {

            const data = res.data

            if (data != undefined && data.result == 'success') {
                setIsDup(false)
                return
            }
        })
        
        setIsDup(true)
    }

    // 비밀번호 같은지 확인
    const checkPw = () => {
        
        if (pw.trim() == '' || p2.trim() == '') {
            return true
        }

        if (pw.trim() == p2.trim()) {
            return true
        }

        return false
    }

    return (

        <ScrollView style={ styles.scroll } contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <SafeAreaView style={ styles.container }>
            <View style={ styles.regi_box }>
                <Text style={ styles.regi_title }>FIRST.GG</Text>
                <TextInput style={ [styles.regi_input, (isDup ? styles.dup_warning: null)] } onChangeText={ val => setId(val) } placeholder="아이디" autoCapitalize='none' onBlur={ () => checkDup() }/>
                <TextInput style={ styles.regi_input } onChangeText={ val => setPw(val) } placeholder="비밀번호" autoCapitalize='none' secureTextEntry={true} />
                <TextInput style={ [styles.regi_input, (checkPw() ? null : styles.dup_warning)] } onChangeText={ val => setP2(val) } placeholder="비밀번호 확인" autoCapitalize='none' secureTextEntry={true} />
                <TextInput style={ styles.regi_input } onChangeText={ val => setUn(val) } placeholder="롤 아이디" autoCapitalize='none' />
                <TextInput style={ styles.regi_input } onChangeText={ val => setEm(val) } placeholder="이메일" autoCapitalize='none' />
                <TouchableOpacity style={ styles.regi_button } onPress={ () => reqRegister() }>
                    <Text style={ styles.regi_button_text }>회원가입</Text>
                </TouchableOpacity>
                <Text onPress={() => navigation.navigate("LoginScreen")} style={ styles.regi_back_text }>돌아가기</Text>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    scroll: { backgroundColor: '#e0e0e0' },
    container: { display: 'flex', flex: 1, justifyContent: 'center', padding: 50 },
    regi_box: { backgroundColor: '#fff', borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.9, shadowRadius: 3.84, elevation: 10, shadowOffset: {width: 0, height: 5} },

    regi_title: { marginBottom: 10, textAlign: 'center', color: '#f1c40f', fontSize: 50, fontWeight: '700', backgroundColor: '#153769', padding: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5},
    regi_input: { marginTop: 20, marginHorizontal: 30, padding: 15, color:'#000', fontSize: 20, borderBottomColor: '#a0a0a0', borderBottomWidth: 1},
    regi_button: { backgroundColor: '#f1c40f', marginTop: 50, marginHorizontal: 30, marginBottom:10, padding: 15, borderRadius: 5 },
    regi_button_text: { textAlign: 'center', fontSize: 25 },
    regi_back_text: { width:80, marginLeft:'auto', textAlign: 'right', fontSize: 20, marginRight: 30, marginBottom: 20 },

    dup_warning: { borderBottomColor: '#f55' }
})

export default Register