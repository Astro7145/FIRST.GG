import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import infoStyles from "../css/infoStyle";
import styles from "../css/summonerStyle"
import Info from "./Info";
import InfoFree from "./InfoFree";
import Mastery from "./Mastery";
import Matches from './Matches';
import Recent from "./Recent";

export default function Summoner({route, navigation}:any)
{
    const serverIp = "http://175.116.94.172:3000"
    const keyword:String = route.params.keyword
    const username = keyword.replace(/ /g, "").toLowerCase();
    
    const [playerLeague, setPlayerLeague] = useState({})
    const [playerLeagueFree, setPlayerLeagueFree] = useState({})
    const [summonerInfo, setSummonerInfo] = useState("")
    const [champMasteryList, setChampMasteryList] = useState([{}])
    const [leagueList, setLeagueList] = useState([{}])
    
    const [isExisting, setIsExisting] = useState(true)
    const [uname, setUname] = useState("")

    useEffect(() => {
        axios.get(serverIp + "/playerLeague", {params:{name:username}}).then(function(response){
            if(response.data.length == 2)
            {
                setPlayerLeagueFree(response.data[0])
                setPlayerLeague(response.data[1])
            }
            else
            {
                if(response.data[0].queueType == "RANKED_FLEX_SR")
                {
                    setPlayerLeagueFree(response.data[0])
                }
                else
                {
                    setPlayerLeague(response.data[0])
                }
            }
            
            setUname(response.data[0].summonerName.replace(/"/g, ""))

        }).catch(function(error){
            console.log(error + "// playerLeague")
        })
        axios.get(serverIp + "/summonerInfo", {params:{name:username}}).then(function(response){
            setSummonerInfo(response.data.summonerLevel)
        }).catch(function(error){
            console.log(error + "// summonerInfo")

            setIsExisting(false)
        })
        axios.get(serverIp + "/champMasteryList", {params:{name:username}}).then(function(response){
            setChampMasteryList(response.data)
        }).catch(function(error){
            console.log(error + "// champMasteryList")
        })
        axios.get(serverIp + "/leagueList", {params:{name:username}}).then(function(response){
            setLeagueList(response.data)
        }).catch(function(error){
            console.log(error + "// leagueList")
        })
    }, [])

    if(playerLeague != undefined && isExisting)
    {
        if((Object.keys(playerLeague).length > 1 || Object.keys(playerLeagueFree).length > 1) &&
           Object.keys(champMasteryList).length > 1 &&
           Object.keys(leagueList).length > 1)
        {
            console.log("success!")
    
            return (
                <ScrollView contentContainerStyle={{ backgroundColor: '#153769'}}>
                    <Text style={styles.sumName}>
                        {uname}
                    </Text>
                    <Info playerLeague={playerLeague} level={summonerInfo}/>
                    <InfoFree playerLeagueFree={playerLeagueFree} />
                    <Recent leagueList={leagueList} uname={username} />
                    <Mastery champMasteryList={champMasteryList} />
                    <Matches leagueList={leagueList} uname={username} navigation={navigation}/>
                </ScrollView>
            )
        }
        else
        {
            console.log("loading...")
    
            return (
                <View style={infoStyles.container}>
                    <Text style={{fontSize: 50, color: '#f1c40f'}}>
                        로딩중...
                    </Text>
                </View>
            )
        }
    }
    else
    {
        return (
            <View style={infoStyles.container}>
                <Text style={{fontSize: 50, color: '#f1c40f'}}>
                    존재하지 않는 소환사입니다.
                </Text>
            </View>
        )
    }
}