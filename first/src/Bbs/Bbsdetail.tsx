import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, SafeAreaView, StyleSheet, AsyncStorage, Alert, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Bbsdetail(props:any){ 
    const [isShow, setIsShow] = useState(false)
    const [commentList, setCommentList] = useState([{}])
    const [content, setContent] = useState("")

    const [like, setLike] = useState(props.bbsData.likes)
    const [id, setId] = useState('')


    let hidden = false
    let bbsSeq = props.bbsData.seq
        
    const [isLiked, setIsLiked] = useState(false)

    function deleteClick(seq:number){

        axios.get("http://175.116.94.172:3000/deletePost", { params:{ seq: bbsSeq } })
            .then(function(){ 
                props.setBbsListChange("bbslist")
                console.log("삭제완료")
            })
            .catch(function( err ){
                console.log(err) 
            }
        )                  
    }

    //console.log(JSON.stringify(props.bbsData.writer)+'글 작성자')

    useEffect(()=> {

        AsyncStorage.getItem('login', (err, result:any) => {
            setId(result);
        })

        axios.get('http://175.116.94.172:3000/post', { params: {seq: bbsSeq }} 
           ).then(res => {
    
            if (res.data == undefined || res.data == null) { return }

                const bbsData = res.data 
                props.setBbsData(bbsData)
                
               // console.log(props.bbsData.writer)

                const writer = bbsData.writer;

                    const loginId = id;

                    if (loginId == writer) {
                        setIsShow(true)
                    } else {
                        setIsShow(false)
                    }
                
            }).catch(err => {
        })

        axios.get("http://175.116.94.172:3000/isLikedFlag", { params: { seq: bbsSeq, writer: id }}).then(function(res)
        {
            setIsLiked(!(res.data))
    
         //   console.log("isLiked Success \nisLiked >> " +  isLiked)
    
        }).catch(function(err)
        {
           // console.log(err + " ------------------------------------- ")
        })

        loadComments()
    } ,[] )

    const loadComments = () =>
    {
        axios.get('http://175.116.94.172:3000/loadComments', { params: {refPost: bbsSeq, sort: 'new'}}).then(list =>
        {
            setCommentList(list.data)
        })
    }

    const renderComment = ({item}:any) =>
    {
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text>
                        {item.writer}
                    </Text>
                </View>
                <View style={{flex: 3}}>
                    <Text>
                        {item.content}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <Text>
                        {item.created}
                    </Text>
                </View>
            </View>
        )
    }

    function commentWrite (){

        axios.get('http://175.116.94.172:3000/writeComment',{
            params :{
                refPost : bbsSeq,
                writer: id, 
                content : content,
                hidden: 0
            }
        }).then(function (){

            loadComments()

        }).catch(function (err){
            console.log("댓글 작성 실패 -----------------")
        })
    }
    
    function likeFunc()
    {
        console.log("likeFunc() " + isLiked)

        if(isLiked)
        {
            setLike(like + 1)
        }
        else
        {
            setLike(like - 1)
        }

        axios.get("http://175.116.94.172:3000/updateLike", {params:{seq: bbsSeq, writer: id, flag: isLiked}}).then(function(){
            console.log('Like success')
        }).catch(function(err){
            console.log(err + " -------------------------------------- ")
        })
    }

    return (
        <SafeAreaView style={styles.continer}>
            <View >
                <View style={styles.contain2}>
                    <View>
                        <Text style={styles.detailTitle}>{props.bbsData.title}</Text>
                        <Text style={styles.detailId}>{props.bbsData.writer}</Text>
                        <Text style={styles.detailReadcount}>{props.bbsData.created}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.likes} onPress={likeFunc}>
                            <Text>👍{like}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <Text style={styles.detailContent}>{props.bbsData.content}</Text>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={ () => props.setBbsListChange('bbsupdate') }>
                        <View>
                            {isShow ? <Text style={styles.updateButton}>수정</Text> : <Text></Text> }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={ () => props.setBbsListChange('bbslist') } >
                        <View>
                            <Text style={styles.cancleButton}>취소</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={  () => deleteClick(props.bbsData.seq) } >
                        <View>
                            {isShow ? <Text style={styles.deleteButton}>삭제</Text> : <Text></Text> }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>               
                <View>
                    <View style={styles.repl}>      
                        <View>
                            <FlatList data={commentList} renderItem={renderComment} /> 
                        </View>
                    </View>
                </View>
            </ScrollView>
            
            <View style={styles.replContiner}>
                <TextInput                     
                    placeholder="댓글수정 및 삭제가 불가합니다"
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={setContent}
                    style={styles.replWrite}
                />
                <TouchableOpacity onPress={ ()=> commentWrite()}>
                    <View style={styles.replBtn}>
                        {isShow ? <Text>저장</Text> : <Text></Text> }
                    </View>
                </TouchableOpacity>
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer: { backgroundColor : '#ffffff',borderRadius:8 , padding :20, margin : 10, width : 550, height : 650 },
    detailTitle: { width:300, fontSize :24, marginLeft :10, color: "#121212"   },
    detailId :{ width:300, fontSize :18, marginLeft:10, color: "#121212" },
    detailReadcount :{ width:300,fontSize :12, marginLeft:10, color: "#121212" },
    likes :{ padding :2, margin :3, paddingTop:50, fontSize :20 },
    contain2 :{flexDirection : 'row'},
    detailContent :{ fontSize :18, marginLeft:10, marginTop:10, color: "#121212" , height:150},

    btnContainer :{ padding : 10, margin :15, marginBottom:30, flexDirection : 'row', alignItems : 'center', marginLeft :140 },
    updateButton :{ fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20},
    deleteButton :{ fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20},
    cancleButton :{ fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20 },

    replContiner :{ flexDirection: 'row' },
    replWrite :{ width : 400, height :80,margin:10, marginBottom :10, padding: 5, borderColor: "#1c4b8f", borderRadius: 8, borderStyle: 'solid', borderWidth: 0.5 },
    repl :{ color: "#121212", height : 220, },
    replBtn :{fontSize : 15, padding : 6, paddingLeft:10, paddingRight:10, margin :5, marginTop:30, backgroundColor :'#f1c40f', color :'#1c4b8f', borderRadius :20 },

})  

export default Bbsdetail;


