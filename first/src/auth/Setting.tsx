import { createNativeStackNavigator } from "@react-navigation/native-stack"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, TouchableOpacity, View, Image, StyleSheet, Alert } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator()
// const arrow = ">"

const server = 'http://175.116.94.172:3000/userInfo'
//const server = 'http://192.168.25.30:3000/userInfo'

const LogoutedScreen = (props: any) => {

    
    const unsubscribe = props.navigation.addListener('focus', () => {
        props.updateToken()
      });
    useEffect(() => {
        return () => unsubscribe();
    });

    return (
        <View style={styles.viewunderbar}>

            <Text style={styles.texttitle}>설정</Text>

            <TouchableOpacity style={styles.opacity} onPress={() => props.navigation.navigate("LoginScreen")}>
                <Text style={styles.text}>로그인</Text>        
                <Image style={styles.imge} source={require("./assets/check.png")} />
            </TouchableOpacity>
        </View>
    )
}

const LoginedScreen = (props: any) => {

    const [id, setId]             = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail]       = useState("")
    const [intro, setIntro]       = useState("")

    const logout = () => {
        Alert.alert(
            '로그아웃',
            '로그아웃 하시겠습니까?',
            [
                { text: '취소', onPress: () => null},
                { text: '확인', onPress: () => { AsyncStorage.removeItem('token'); AsyncStorage.removeItem('login'); props.updateToken() } }
            ]
        )
    }

    useEffect(() => {

        
        axios.post( server, null, { params: { token: props.token } }
            
            ).then( response => {
                                
                const res = response.data

                if (res.result == 'success') {

                    const data = JSON.parse(res.data)
    
                    setId(data.id)
                    setUsername(data.username)
                    setEmail(data.email)
                    setIntro(data.intro)
                }

            }).catch(function(err){
                console.log(err)
            })
    }, [])

    return (
        <View>
            <View style={[styles.viewunderbar]}>

                <Text style={styles.texttitle}>기본정보</Text>

                <View style={styles.opacity}>
                    <Text style={styles.text}>아이디</Text>
                    <Text style={styles.TouchableHight}>{id}</Text>
                </View>

                <View style={styles.opacity}>
                    <Text style={styles.text}>이름</Text>
                    <Text style={styles.TouchableHight}>{username}</Text>
                </View>

                <View style={styles.opacity}>
                    <Text style={styles.text}>이메일</Text>
                    <Text style={styles.TouchableHight}>{email}</Text>
                </View>

                <View style={styles.opacity}>
                    <Text style={styles.text}>자기소개</Text>
                    <Text style={styles.TouchableHight}>{intro}</Text>
                </View>
            </View>

            <View style={styles.viewunderbar}>

                <Text style={styles.texttitle}>회원정보 수정</Text>

                <TouchableOpacity style={styles.opacity} onPress={()=>props.navigation.navigate("update")}>
                    <Text style={styles.text}>정보수정</Text>
                    <Image style={styles.imge} source={require("./assets/check.png")} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.opacity} onPress={ logout }>
                    <Text style={styles.text}>로그아웃</Text>
                    <Image style={styles.imge} source={require("./assets/check.png")} />
                </TouchableOpacity>    

                <TouchableOpacity style={styles.opacity} onPress={()=>props.navigation.navigate("delete")}>
                    <Text style={styles.text}>회원탈퇴</Text>
                    <Image style={styles.imge} source={require("./assets/check.png")} />
                </TouchableOpacity>
            </View>

            <View style={styles.viewunderbar}>

                <Text style={styles.texttitle}>회원정보 관리</Text>

                <TouchableOpacity style={styles.opacity} onPress={()=>props.navigation.navigate("MyBbsScreen")}>
                    <Text style={styles.text}>내가 쓴 글</Text>
                    <Image style={styles.imge} source={require("./assets/check.png")} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.opacity} onPress={()=>props.navigation.navigate("MyCommentScreen")}>
                    <Text style={styles.text}>내가 쓴 댓글</Text>
                    <Image style={styles.imge} source={require("./assets/check.png")} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default function Setting( {navigation}: any ){

    const [token, setToken] = useState('')

    const updateToken = () => {
        AsyncStorage.getItem('token', (err, result) => {
            
            // 로그인 체크
            if (result == null || result == undefined) {
                setToken('')
            } else {
                setToken(result)
            }
        })
    }
    
    let content: any

    if (token == '') {
        content = (<LogoutedScreen navigation={navigation} updateToken={updateToken} ></LogoutedScreen>)
    } else {
        content = (<LoginedScreen token={token} navigation={navigation} updateToken={updateToken} ></LoginedScreen>)
    }

  return(
    <ScrollView style={ styles.container } >
        { content }
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: "#e0e0e0" }, 
    viewunderbar: { borderBottomWidth: 1, borderBottomColor: "gray", marginHorizontal: 18, paddingBottom: 12 },
    texttitle: { fontSize: 20, margin: 5, marginTop: 20 },
    opacity: { flexDirection: "row" },
    TouchableHight: { height: 20, marginTop: 12 },
    imge: { height: 20, width: 20, top: 13 },
    text: { fontSize: 15, margin: 12, color: "#000000" },
    myborder: { borderColor: "#ddd", borderWidth: 2, },
})