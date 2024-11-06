import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, FlatList } from "react-native";

function Item(props: any){
    
    function itemClick(seq:number){
        
        // console.log("seq입니다: " + seq)

        axios.get("http://175.116.94.172:3000/post", { params:{ seq: seq } })
            .then(function( resp ){ 
            
             props.setBbsData(resp.data)
             props.setBbsListChange("bbsdetail")
               
            }).catch(function( err ){
                console.log('에러입니다: ' + err) 
            }
        )          
    }

    return (
        <SafeAreaView style={styles.item}>
            <TouchableOpacity onPress={() => itemClick(props.seq)}>
                <View style={styles.idRow} >
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <View style={styles.idRow}>
                    <Text style={styles.writer}>{props.writer}</Text>
                    <Text style={styles.readcount}>{props.likes}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

function Bbslist( props:any ){

    const [data, setdata] = useState([])
    const [ keyword, setkeyword ] = useState('');   //검색
    const [ sort , setsort] = useState( 'new' )   // 정렬

    function renderItem({item}:any){

        // console.log(item.likes)

        function strLength(str:String){
            if (str == undefined) {
                return(
                    <Text>{Item}</Text>
                )
            }

            if(str.length > 10){
                return str.substring(0, 10) + "..."
            }else{
                return str
            }
        }
        return (
            <Item seq={item.seq} writer={ "✒️ " + item.writer} title={strLength(item.title )} 
                likes={ "👍 " + item.likes }setBbsData={props.setBbsData} setBbsListChange={props.setBbsListChange}
            />
        )
    }
    
    useEffect(() => {
        axios.get("http://175.116.94.172:3000/loadPostsAll", { params : { sort:sort, keyword:keyword, page:1 } }
        ).then( function(resp){
            
            var json = resp.data

            var data = json[0]
            var resultJson:any = []

            for(let i = 0;i < json.length; i++){
                //console.log(json[i])
                if(json[i].deleted == 0){   // 데이터 걸러주기
                    resultJson.push(json[i])    // 거른 데이터 모아주기
                }
            }

           // console.log(resultJson.length + " ----------- ")

            setdata(resultJson)

        }).catch(function(err){
            console.log(err)  
        })
    }, [])

    return( 
        <View style={styles.listContainer} >
            <FlatList data={ data } renderItem={ renderItem } />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer :{ color : '#f1c40f', backgroundColor : 'white',paddingBottom :10, width:550, height:'auto', borderRadius :6 },
    item: { marginVertical: 2, marginHorizontal: 8, alignItems :'center' },
    title: { fontSize: 18, marginTop:30, padding :3, width :200, height :40, color: "#121212" },
    writer: { color: "#121212", height: 30, width: 166, fontSize: 16, padding :3, marginLeft: 250, marginBottom :20},
    readcount: { height: 30, padding :3, fontSize: 16, textAlign: "center", color: "#121212" },
    idRow: { height: 30, flexDirection: "row" },
})  

export default Bbslist;
