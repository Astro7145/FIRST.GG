import React, { useState } from "react";
import axios from "axios";
import { TextInput, Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function Bbsupdate(props:any){ 
    
    const [changedTitle, setChangedTitle] = useState(props.bbsData.title)
    const [changedContent, setChangedContent] = useState(props.bbsData.content)
    
    function updateClick(seq:number){
        
        axios.get("http://175.116.94.172:3000/updatePost",
        { params:{ 
            seq:props.bbsData.seq,  
            title: changedTitle, 
            content: changedContent
            } 
        }).then(function(resp){

            if(resp.data == "1" ){
                props.setBbsListChange("bbslist")
                console.log("수정완료")  
            } else {
                console.log("수정실패")
            }
            
        }).catch(function(err){
            console.log(err) 
        })
    }
    
    return (
        <SafeAreaView>
           <View style={styles.content}>
                <View>
                    <TextInput style={styles.title} onChangeText={ value => {setChangedTitle(value)} }>{props.bbsData.title}</TextInput>
                    <Text style={styles.writer}>{props.bbsData.writer}</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.inner}
                        onChangeText={value => setChangedContent(value)}
                    >
                    {props.bbsData.content}</TextInput>
                </View>
            
                <View style={styles.btn}>
                    <TouchableHighlight onPress={ ()=> updateClick(props.bbsData.seq) }>
                        <View style={styles.btnSave}>
                            <Text>수정완료</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ () => props.setBbsListChange('bbslist') } >
                        <View style={styles.btnCancle}>
                            <Text>취소</Text>
                        </View>
                    </TouchableHighlight>
            </View>
           </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    content :{ backgroundColor :'#ffffff', borderRadius :8, margin :20, padding :20, width:550, height :650 },
    title :{ fontSize :24 },
    writer :{ fontSize :16, marginLeft :5 },
    inner :{ fontSize :17, width : 500, height :450, marginTop :10, marginBottom :30, padding: 5, borderColor: "#1c4b8f", borderRadius: 8, borderStyle: 'solid', borderWidth: 1},
    btn :{flexDirection: 'row', marginLeft :180},
    btnSave :{ fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20 },
    btnCancle :{ fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20 }

})
export default Bbsupdate;