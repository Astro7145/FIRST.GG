import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { TextInput, Alert, Text, View, StyleSheet, TouchableHighlight } from "react-native";

function Bbswrite( props:any ){

    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  
    AsyncStorage.getItem('login', (err, result:any) => {
        setWriter(result)
    })

    //console.log(writer + " Writer --------------------")
    
    function bbsWriteBtn(){
        
        if(title.trim() == ""){ }

        axios.get("http://175.116.94.172:3000/writePost", 
            {
                params:{
                    writer : writer,
                    title: title,
                    content: content
                }
            }).then(function(resp){
                console.log(resp.data)

                if(resp.data == "1"){
                    props.setBbsListChange("bbslist")
                }

            }).catch(function(){
                Alert.alert("추가되지 않았습니다")
            }
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.title}
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChangeText={title=>setTitle(title)}
                />

                <TextInput
                    style={styles.writer}
                    value={writer}
                    editable={false}
                />
                
                <TextInput
                    style={styles.content}
                    placeholder="내용을 입력하세요"
                    multiline={true}
                    numberOfLines={10}
                    value={content}
                    onChangeText={content=>setContent(content)}
                />
                <View style={styles.btnContainer}>
                    <TouchableHighlight onPress={ bbsWriteBtn }>
                        <View>
                            <Text style={styles. btnSave}>작성완료</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={ () => props.setBbsListChange('bbslist') } >
                        <View>
                            <Text style={styles. btnCancle}>취소</Text>
                        </View>
                    </TouchableHighlight> 
                </View>
            </View>

        </View>        
    )
}
const styles = StyleSheet.create({
    container :{ backgroundColor: 'white' , padding :20, margin :10, borderRadius :5, width:550, height:'auto'},

    writer:{ fontSize:18, color: "#400040", fontWeight:"bold", padding:3, margin:3 },
    title :{ fontSize:24, color: "#400040", fontWeight:"bold", padding:3, margin:3 },
    content :{ fontSize: 18, width : 500, height :450, marginBottom :20, padding: 5, borderColor: "#1c4b8f", borderRadius: 8, borderStyle: 'solid', borderWidth: 1 },    
    btnContainer :{ padding : 10, flexDirection : 'row', marginLeft:170},
    btnSave :{ fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20 },
    btnCancle :{ fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20  }

})

export default Bbswrite;
