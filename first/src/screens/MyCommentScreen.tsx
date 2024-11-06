import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, AsyncStorage, BackHandler, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SERVER_IP = "http://175.116.94.172:3000"
//const SERVER_IP = "http://192.168.25.30:3000"
const PATH_MYCOMMENT = "/myComments"

// 컨트롤러
const MyBbsScreen = () => {

    const [data, setData] = useState([])

    // 댓글 데이터 불러오기
    useEffect(() => {

        AsyncStorage.getItem('login', (err, result) => {

            axios.get(

                SERVER_IP + PATH_MYCOMMENT, 
                { params: {id: result} }

            ).then( response => {
                
                const res = response.data
                
                if (res.result == 'success') {

                    // 성공시 내가 쓴 글 전부 저장
                    const data = JSON.parse(res.data)
                    setData(data)

                } else {

                    // 실패시 배열을 비운닷
                    setData([])
                }
            })
        })

    }, [])
    
    // 리스트에 들어갈 아이템 렌더링
    const renderItem = ({item}: any) => {

        return ( 
            <Text style={ [styles.listItem, styles.listText] }>{ item.content }</Text>
        )
    }


    return (
        <View style={ styles.listContainer }>
            <Text style={ styles.titleText }>내가 쓴 댓글 목록</Text>
            <FlatList data={data} renderItem={ renderItem } />
        </View>
    )
}

const styles = StyleSheet.create({

    debug: { borderColor: '#aaa', borderWidth: 1 },

    /* 컨테이너 레이아웃 */
    container: { height: '100%', backgroundColor: '#e0e0e0' },
    listContainer: { flex: 1, margin: 10, padding: 10 },
    detailContainer: { flex: 1, margin: 10, padding: 10 },

    /* 공통 제목 스타일 */
    titleText: { fontSize: 40, fontWeight: '900', textAlign: 'center', padding: 20, color: '#e4bb16' }, 

    /* 글 목록 */
    listItem: { marginBottom: 5, padding: 20, height: 80, justifyContent: 'center', borderColor: '#aaa', borderBottomWidth: 1},
    listText: { fontSize: 30 },

    /* 글 내용 */
    detailTitle: { margin: 10, borderBottomColor: '#aaa', borderBottomWidth: 1, paddingBottom: 20, paddingHorizontal: 10, fontSize: 30 },
    detailScroll: {borderBottomWidth: 1, borderBottomColor: '#aaa', margin: 10 },
    detailContent: { flex: 1, paddingHorizontal:10, paddingVertical: 20 },
    detailContentText: { fontSize: 20 },
    detailButtonView: { flexDirection: "row", margin: 10, justifyContent: "center" }, 
    detailButton: { backgroundColor: '#e4bb16', borderRadius: 5, padding: 7, marginHorizontal: 10, paddingHorizontal: 30, },
    detailButtonText: { fontSize: 20, },
})

export default MyBbsScreen