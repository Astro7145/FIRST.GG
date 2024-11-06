import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, AsyncStorage, BackHandler, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SERVER_IP = "http://175.116.94.172:3000"
//const SERVER_IP = "http://192.168.25.30:3000"
const PATH_MYPOSTS = "/myPosts"
const PATH_POST = "/post"
const PATH_DELETEPOST = "/deletePost"

// 쓴 글 내용 보기
const MyBbsDetail = (props: any) => {

    const [data, setData] = useState({title: '', content: ''})
    const seq = props.seq

    // 삭제 버튼
    const deletePost = () => {
        axios.get(
            SERVER_IP + PATH_DELETEPOST,
            { params: { seq: seq } }
        ).then( null )
    }
    const deleteButtonEventListener = () => {
        Alert.alert("삭제", '삭제 하시겠습니까?', [
            { text: '취소', onPress: () => null },
            { text: '삭제', onPress: () => { deletePost(); props.setSelectedScreen('list') } }
        ])
    }

    useEffect(() => {

        // 취소 키 이벤트
        const backEvent = () => {
            props.setSelectedScreen('list')
            return true
        }

        // 취소키 이벤트 등록
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backEvent
        )

        // 글 데이터 불러오기        
        axios.get(
            SERVER_IP + PATH_POST,
            { params: {seq: seq} }
        ).then(response => {
            const res = response.data
            setData(res)
        })
    }, [])

    return (
        <View style={ styles.detailContainer }>
            <Text style={ styles.detailTitle }>{ data.title }</Text>
            <ScrollView style={ styles.detailScroll }>
                <View style={ styles.detailContent }>
                    <Text style={ styles.detailContentText }>{ data.content }</Text>
                </View>
            </ScrollView>
            <View style={ styles.detailButtonView }>
                <TouchableOpacity style={ styles.detailButton }><Text style={ styles.detailButtonText } onPress={ () => props.setSelectedScreen('list') }>돌아가기</Text></TouchableOpacity>
                <TouchableOpacity style={ styles.detailButton }><Text style={ styles.detailButtonText } onPress={ deleteButtonEventListener }>삭  제</Text></TouchableOpacity>
            </View>
        </View>
    )
}

// 내가 쓴 글 목록
const MyBbsList = (props: any) => {

    const [data, setData] = useState([])

    // 글 데이터 불러오기
    useEffect(() => {

        AsyncStorage.getItem('login', (err, result) => {

            axios.get(

                SERVER_IP + PATH_MYPOSTS, 
                {params: {id: result}}

            ).then(response => {
                
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
            <TouchableOpacity style={ styles.listItem } onPress={() => { props.setSelectedSeq(item.seq); props.setSelectedScreen('detail') }}>
                <Text style={ styles.listText }>{item.title}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={ styles.listContainer }>
            <Text style={ styles.titleText }>내가 쓴 글 목록</Text>
            <FlatList data={data} renderItem={ renderItem } />
        </View>
    )
}

// 컨트롤러
const MyBbsScreen = ({navigation}: any) => {

    const [selectedSeq, setSelectedSeq] = useState(-1)
    const [selectedScreen, setSelectedScreen] = useState('list')

    let child: any

    if (selectedScreen == 'list') {

        child = <MyBbsList setSelectedSeq={setSelectedSeq} setSelectedScreen={setSelectedScreen}></MyBbsList>

    } else if (selectedScreen == 'detail') {

        child = <MyBbsDetail seq={selectedSeq} setSelectedScreen={setSelectedScreen}></MyBbsDetail>
    }

    useEffect(() => {
        // 취소 키 이벤트
        const backEvent = () => {
            navigation.reset({routes: [{name: 'SettingScreen'}]})
            return true
        }

        // 취소키 이벤트 등록
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backEvent
        )
    }, [])

    return ( 
        <SafeAreaView style={ styles.container } >
            { child }
        </SafeAreaView>
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
    detailButton: { backgroundColor: '#e4bb16', borderRadius: 5, padding: 7, marginHorizontal: 10, width: 120, },
    detailButtonText: { fontSize: 20, textAlign: "center"},
})

export default MyBbsScreen