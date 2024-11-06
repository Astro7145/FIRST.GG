import axios from "axios";
import React, { useEffect, useState } from "react";
import { TouchableHighlight, Image, Text, TextInput, View, Alert, StyleSheet, ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"


export default function Update({navigation}:any){

    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [intro, setIntro] = useState("")

    
    // 유저 정보 출력
    useEffect(()=>{

        AsyncStorage.getItem('token', (err, result) => {
            
            if (result == undefined) {
                return
            }

            const token = result;
            axios.post("http://175.116.94.172:3000/userInfo",
                null, 
                {params: {token: token},
            }).then(res => {
                let data = JSON.parse(res.data.data)
                console.log("useEffect: "+JSON.stringify(data))
                        setId(data.id)
                        // setPw(data.pw)
                        setUsername(data.username)
                        setEmail(data.email)
                        setIntro(data.intro)
            }).catch((err:Error) => {
                console.log(err)
            })
        })
    }, [])

    function pwupdate(){
        //const token = AsyncStorage.getItem('token')
        if(pw.trim() == ""){
            Alert.alert("PASSWORD","입력된 정보를 확인하세요")
        }else{
            AsyncStorage.getItem('token', (err, result) => {
        
                axios.post("http://175.116.94.172:3000/modPw",
                 null,
                { params: {
                            token: result,
                            pw: pw }
                        }).then(function(res){
                            console.log(JSON.stringify(res.data))
                            setPw(pw)
                            if(res.data.result == "success"){
                                Alert.alert("USER NAME", "수정이 완료 되었습니다")
                            }else{
                                Alert.alert("USER NAME", "입력된 정보를 확인해주세요")
                            }
            }).catch(function(err){
                console.log(err)
                })
            })
        }
    }

    function usernameupdate(){
        const token = AsyncStorage.getItem('token')
        if(username.trim() == ""){
            Alert.alert("USER NAME","입력된 정보를 확인하세요")
        }else{
            AsyncStorage.getItem('token', (err, result) => {
        
                axios.post("http://175.116.94.172:3000/modUsername",
                 null,
                { params: {
                            token: result,
                            username: username }
                }).then(function(res){
                    console.log(JSON.stringify(res.data))
                    setUsername(username)

                    if(res.data.result == "success"){
                        Alert.alert("USER NAME", "수정이 완료 되었습니다")
                    }else{
                        Alert.alert("USER NAME", "입력된 정보를 확인해주세요")
                    }
                }).catch(function(err){
                    console.log(err)
                })
            })
        }   
    }

    function emailupdate(){
        const token = AsyncStorage.getItem('token')
        if(email.trim() == ""){
            Alert.alert("EMAIL","입력된 정보를 확인하세요")
        }else{
            AsyncStorage.getItem('token', (err, result) => {
        
                axios.post("http://175.116.94.172:3000/modEmail",
                 null,
                { params: {
                            token: result,
                            email: email }
                        }).then(function(res){
                            console.log(JSON.stringify(res.data))
                            setEmail(email)
                
                            if(res.data.result == "success"){
                    Alert.alert("EMAIL", "수정이 완료 되었습니다")
                }else{
                    Alert.alert("EMAIL", "입력된 정보를 확인해주세요")
                }
                }).catch(function(err){
                    console.log(err)
                })
            })
        }   
    }

    function introupdate(){
        const token = AsyncStorage.getItem('token')
        if(intro.trim() == ""){
            Alert.alert("INTRO","입력된 정보를 확인하세요")
        }else{
            AsyncStorage.getItem('token', (err, result) => {
        
                axios.post("http://175.116.94.172:3000/modIntro",
                 null,
                { params: {
                            token: result,
                            intro: intro }
                        }).then(function(res){
                            console.log(JSON.stringify(res.data))
                            setIntro(intro)

                            if(res.data.result == "success"){
                    Alert.alert("INTRO", "수정이 완료 되었습니다")
                }else{
                    Alert.alert("INTRO", "입력된 정보를 확인해주세요")
                }
                }).catch(function(err){
                    console.log(err)
                })
            })
        }   
    }

  return(
    <ScrollView style = {styles.scroll}>

        <View style={styles.container}>

            <View style={styles.image}>
            <Image source={require("../auth/assets/kim.png")}></Image>
            </View>

            <View style={styles.viewunderbar}>
                <View>
                    <Text>ID</Text>
                </View>
                <View>
                    <Text style={styles.text}>{id}</Text>
                </View>
            </View>


            <View style={styles.viewunderbar}>
                <Text>Password</Text>
                <View style={styles.opacity}>
                    <View style={styles.opacity}>
                        <TextInput
                            style={styles.textinput}
                            placeholder="비밀번호"
                            underlineColorAndroid="transparent"
                            autoCapitalize='none'
                            secureTextEntry={true}
                            onChangeText={(pw)=> setPw(pw)}/>
                        <TouchableHighlight style={styles.TouchableHight} onPress={()=>pwupdate()}>
                            <Text>수정</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>

            <View style={styles.viewunderbar}>
                <Text>Name</Text>
                <View style={styles.opacity}>
                    <View style={styles.opacity}>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="이름"
                            value={username}
                            underlineColorAndroid="transparent"
                            onChangeText={(username)=> setUsername(username)}/>
                        <TouchableHighlight style={styles.TouchableHight} onPress={()=>usernameupdate()}>
                            <Text>수정</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>

            <View style={styles.viewunderbar}>
                <Text>Email</Text>
                <View style={styles.opacity}>
                    <View style={styles.opacity}>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="이메일"
                            value={email}
                            underlineColorAndroid="transparent"
                            onChangeText={(email)=> setEmail(email)}/>
                        <TouchableHighlight style={styles.TouchableHight} onPress={()=>emailupdate()}>
                            <Text>수정</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>

            <View style={styles.viewunderbar}>
                <Text>Intro</Text>      
                <View style={styles.opacity}>
                    <View style={styles.opacity}>
                        <TextInput 
                            style={styles.textintro}
                            placeholder="자기소개"
                            value={intro}
                            underlineColorAndroid="transparent"
                            onChangeText={(intro)=> setIntro(intro)}/>
                        <TouchableHighlight style={styles.TouchableHightintro} onPress={()=>introupdate()}>
                            <Text>수정</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>

            {/*         
            <TouchableHighlight style={[styles.savebuttonContainer, styles.sendButton]} onPress={()=>revise()}>
                    <Text>저장</Text>
            </TouchableHighlight>
            */}

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: "#e0e0e0"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    viewunderbar: {
        borderBottomWidth: 1,
        borderBottomColor: "gary",
        margin: 17
    },
    opacity: {
        flexDirection: "row",
        width: 300
    },
    image: {
        padding: 20
    },
    TouchableHight: {
        height: 20,
        marginTop: 10
    },
    TouchableHightintro: {
        height: 20,
        marginTop: 20
    },
    text: {
        height: 35,
        width: 300,
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 8
    },
    textinput: {
        height: 40,
        width: 270,
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 8
    },
    textintro: {
        height: 60,
        width: 270,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 8,
        paddingBottom: 7
    },
    myborder: {
        borderColor: "#ddd",
        borderWidth: 2,
    },
    savebuttonContainer: {
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
        width: 80,
        borderRadius: 30
    },
    sendButton: {
        backgroundColor: "orange",
        fontWeight: "700"
    }
})