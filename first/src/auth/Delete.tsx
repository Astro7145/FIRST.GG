import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"

export default function Delete({navigation}:any){

    const [pw, setPw] = useState("")

    function memberout(){

        // const token = AsyncStorage.getItem('token')
        
        if(pw.trim() == "" && pw != undefined){
            Alert.alert("PASSWORD","입력된 정보를 확인하세요")
        }else{
            AsyncStorage.getItem('token', (err, result) => {
        
                axios.post("http://175.116.94.172:3000/withdraw",
                 null,
                { params: {
                            token: result,
                            pw: pw }
                        }).then(function(res){
                            console.log(JSON.stringify(res.data))
                            setPw(pw)
                            // AsyncStorage.setItem('token', res.data.token)
                            
                            if(res.data.result == "success"){
                                Alert.alert("WITHDRAW", "탈퇴 처리 되었습니다")
                            }else{
                                Alert.alert("PASSWORD", "비밀번호를 다시 확인해주세요")
                            }
                        }).catch(function(err){
                console.log(err)
                })

            })
        }
    }

  return(
    <View style={styles.container}>
        <View>
            <Text style={styles.texttitle}>FIRST.GG 탈퇴</Text>
        </View>

        <View style={styles.textView}>
            <Text style={styles.text}>FIRST 탈퇴를 하시면 회원정보 및 피드 내용이 초기화되며, 복구하실 수 없습니다.
                  정말로 탈퇴를 원하신다면 아래에 비밀번호를 입력하시고, 탈퇴 버튼을 눌러주세요.
            </Text>
        </View>

        <View style={styles.textinput}>
            <TextInput 
                    style={{fontWeight: "bold"}}
                    placeholder="비밀번호"
                    value={pw}
                    underlineColorAndroid="transparent"
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={(pw)=> setPw(pw)}/>
        </View>
        <View>
                <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]}  onPress={()=>memberout()}>
                    <Text>탈퇴</Text>
                </TouchableHighlight>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1c4b8f"
    },
    texttitle: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#f1c40f"
    },
    textView: {
        borderBottomColor: '#f5fcff',
        backgroundColor: '#fff',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 500,
        height: 100,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    text: {
        alignItems: "center",
        marginLeft: 15,
        fontWeight: "bold"
    },
    textinput: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: 100,
        borderRadius: 30
    },
    sendButton: {
        backgroundColor: "orange"
    }
})