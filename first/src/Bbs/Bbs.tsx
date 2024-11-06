import React, { useState } from "react"
import { StyleSheet, Text,  TouchableOpacity,  View } from "react-native"
import Bbsdetail from "./Bbsdetail"
import Bbslist from "./Bbslist"
import Bbsupdate from "./Bbsupdate"
import Bbswrite from "./Bbswrite"

function Bbs(){

    const [bbsData, setBbsData]=useState({ })
    const [bbsListChange, setBbsListChange] = useState("bbslist")
    
    let child: any
    if(bbsListChange == "bbslist"){ 
        child = ( <Bbslist setBbsListChange={setBbsListChange} setBbsData={setBbsData} /> )
    }
    else if(bbsListChange == "bbswrite"){
        child = ( <Bbswrite setBbsListChange={setBbsListChange} /> )
    }
    else if(bbsListChange == "bbsdetail"){
        child = ( <Bbsdetail setBbsListChange={setBbsListChange} setBbsData={setBbsData} bbsData={bbsData}/> )
    }
    else if(bbsListChange== "bbsupdate"){
        child = ( <Bbsupdate setBbsListChange={setBbsListChange} setBbsData={setBbsData} bbsData={bbsData} /> )
    }

    
    return (
        <View style={styles.back}>
            <View style={styles.continer}>
                <TouchableOpacity onPress={ () => setBbsListChange('bbslist') }>
                        <View>
                            <Text style={styles.showList}>글목록</Text>
                        </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={ () => setBbsListChange('bbswrite') }>
                        <View>
                            {isShow ? <Text style={styles.addPost}>글추가</Text> : <Text></Text> }
                        </View>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={ () => setBbsListChange('bbswrite') }>
                        <View>
                            <Text style={styles.addPost}>글추가</Text>
                        </View>
                </TouchableOpacity>
            </View>

            <View>{child}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    back:{
        backgroundColor: '#153769',
        padding :30,
        height:900,
        alignItems: 'center'
    },
    continer :{
        margin :20,
        width:200,
        borderRadius :6,
        flexDirection : 'row',
    },
    addPost :{
        fontSize :24,
        backgroundColor :'#1c4b8f',
        borderRadius :6,
        color : '#f1c40f',
        padding : 5,
        margin :5
    },
    showList :{
        fontSize :24,
        backgroundColor :'#1c4b8f',
        borderRadius :6,
        color : '#f1c40f',
        padding : 5,
        margin :5
    }
})  

export default Bbs;