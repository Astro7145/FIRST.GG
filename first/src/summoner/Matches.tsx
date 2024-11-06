import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity, Button, FlatList } from 'react-native';
import { Text } from 'react-native';
import styles from './../css/summonerStyle';
import matchesStyle from './../css/matchesStyle';
import Modal from "react-native-modal";
import spellPath from "../properties/spell";
import perkPath from "../properties/perkPath";

export default function Matches({ leagueList, uname, navigation }:any)
{
    const [isModalVisible, setModalVisible] = useState(false);
    const [gameInfo, setGameInfo] = useState({
            summonerName: "",
            championName: "",
            championPicture: "",
            spell1: "",
            spell2: "",
            perk1: "",
            perk2: "",
            win: false,
            kills: "",
            deaths: "",
            assists: "",
            kda: "",
            minions: "",
            minionsPerAMinute: "",
            gameDuration: "",
            gameMode: "",
            participants: ""
    });

    let arr = new Array

    for(var i = 0; i < leagueList.length; i++)
    {
        arr[i] = leagueList[i]
    }

    function participants(arr:any)
    {
        const result = []

        const blue = []
        const red = []

        let key = 0

        for(var i = 0; i < arr.length; i++)
        {
            if(i < 5)
            {
                blue.push(arr[i])
            }
            else
            {
                red.push(arr[i])
            }
        }

        const renderItemLeft = ({item}:any) =>
        {
            return (
                <TouchableOpacity>
                    <View style={matchesStyle.playerListLeft}>
                        <ImageBackground source={{uri: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${item.championName}.png`}}
                                         style={matchesStyle.imageStyle3}/>
                        <Text style={matchesStyle.playerListName}>
                            {item.summonerName}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }

        const renderItemRight = ({item}:any) =>
        {
            return (
                <TouchableOpacity>
                    <View style={matchesStyle.playerListRight}>
                        <Text style={matchesStyle.playerListName}>
                            {item.summonerName}
                        </Text>
                        <ImageBackground source={{uri: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${item.championName}.png`}}
                                         style={matchesStyle.imageStyle3}/>
                    </View>
                </TouchableOpacity>
            )
        }

        result.push(
            <View key={`P${key++}`} style={matchesStyle.playerList}>
                <FlatList data={blue} renderItem={renderItemLeft}/>
                <FlatList data={red} renderItem={renderItemRight}/>
            </View>
        )

        return result
    }

    const player = (arr:any) =>
    {
        const result = []

        let num = 0

        for(var i = 0; i < arr.info.participants.length; i++)
        {
            if(arr.info.gameMode == "CLASSIC" || arr.info.gameMode == "ARAM")
            {
                if((arr.info.participants[i].summonerName).toLowerCase().replace(/ /g, "") == uname)
                {
                    const infoObject = {
                        summonerName: arr.info.participants[i].summonerName,
                        championName: arr.info.participants[i].championName,
                        championPicture: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${arr.info.participants[i].championName}.png`,
                        spell1: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${spellPath[arr.info.participants[i].summoner1Id]}.png`,
                        spell2: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${spellPath[arr.info.participants[i].summoner2Id]}.png`,
                        perk1: `https://ddragon.canisback.com/img/${perkPath[arr.info.participants[i].perks.styles[0].selections[0].perk]}`,
                        perk2: `https://ddragon.canisback.com/img/${perkPath[arr.info.participants[i].perks.styles[1].style]}`,
                        win: arr.info.participants[i].win,
                        kills: arr.info.participants[i].kills,
                        deaths: arr.info.participants[i].deaths,
                        assists: arr.info.participants[i].assists,
                        kda: arr.info.participants[i].deaths == 0 ? "Perfect" : `${((arr.info.participants[i].kills + arr.info.participants[i].assists) / arr.info.participants[i].deaths).toFixed(2)}:1 `,
                        minions: arr.info.participants[i].totalMinionsKilled,
                        minionsPerAMinute: (arr.info.participants[i].totalMinionsKilled / (arr.info.gameDuration / 60)).toFixed(1),
                        gameDuration: arr.info.gameDuration,
                        gameMode: arr.info.gameMode == 'CLASSIC' ? '소환사 협곡' : '칼바람 나락',
                        participants: arr.info.participants
                    }

                    result.push(
                        <View key={`PLY${num++}`} style={infoObject.win == true ? matchesStyle.winBox : matchesStyle.loseBox}>
                            <View key={infoObject.summonerName} style={{flexDirection: 'row'}}>
                                <View style={matchesStyle.boxElement1}>
                                    <View>
                                        <ImageBackground source={{uri: infoObject.championPicture}}
                                                style={matchesStyle.imageStyle1}/>
                                    </View>
                                    <Text style={{fontSize: 26, marginTop: 10}}>
                                        {infoObject.gameMode}
                                    </Text>
                                </View>
                                <View style={matchesStyle.boxElement2}>
                                    <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 20}}>
                                        {infoObject.kills} / {infoObject.deaths} / {infoObject.assists}
                                    </Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>
                                        {infoObject.kda}평점
                                    </Text>
                                    <Text style={{fontSize: 18, marginTop: 20}}>
                                        CS {infoObject.minionsPerAMinute} {`(${infoObject.minions})`}
                                    </Text>
                                    <TouchableOpacity style={{marginTop: 15}} onPress={() => {showDetail(infoObject)}}>
                                        <Text style={{fontSize: 20}}>
                                            자세히 보기 &gt;
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }
            }
        }

        return result
    }

    const showDetail = (info:any) => {
        setGameInfo(info)
        setModalVisible(!isModalVisible);
    };

    const rendering = () =>
    {
        const result = []

        for(var i = 0; i <arr.length; i++)
        {
            result.push(
                <View key={arr[i].metadata.matchId}>
                    {player(arr[i])}
                </View>
            )
        }

        return result
    }

    if(Object.keys(gameInfo).length > 0)
    {
        return (
            <View style={styles.moduleBox}>
                {rendering()}
                <View style={{ flex: 1 }}>
                    {/* <Button title="Show modal" onPress={() => {setModalVisible(!isModalVisible)}} /> */}
                    <Modal isVisible={isModalVisible}>
                        <View style={[matchesStyle.modalContainer]}>
                            <View style={matchesStyle.pictureView}>
                                <View style={matchesStyle.pictureViewElement}>
                                    <ImageBackground source={{uri: gameInfo.spell1}}
                                                        style={matchesStyle.imageStyle2}/>
                                    <ImageBackground source={{uri: gameInfo.spell2}}
                                                        style={matchesStyle.imageStyle2}/>
                                </View>
                                <View>
                                    <ImageBackground source={{uri: gameInfo.championPicture}}
                                                    style={matchesStyle.imageStyle1}/>
                                </View>
                                <View style={matchesStyle.pictureViewElement}>
                                    <ImageBackground source={{uri: gameInfo.perk1}}
                                                        style={matchesStyle.imageStyle2}/>
                                    <ImageBackground source={{uri: gameInfo.perk2}}
                                                        style={[matchesStyle.imageStyle2, {backgroundColor: 'black'}]}/>
                                </View>
                            </View>
                            <View>
                                <Text style={gameInfo.win == true ? matchesStyle.winText : matchesStyle.loseText}>
                                    {gameInfo.win == true ? "승리" : "패배"}
                                </Text>
                            </View>
                            <View style={{alignItems: 'center', marginTop: 30}}>
                                <Text style={{color: 'white', fontSize: 24}}>
                                    {gameInfo.kills} 킬 {gameInfo.deaths} 데스 {gameInfo.assists} 도움
                                </Text>
                                <Text style={{color: 'white', fontSize: 16, marginTop: 10}}>
                                    {gameInfo.kda} 평점
                                </Text>
                                <Text style={{color: 'white', fontSize: 24, marginTop: 30}}>
                                    CS {gameInfo.minionsPerAMinute} ({gameInfo.minions})
                                </Text>
                            </View>
                            <View>
                                {participants(gameInfo.participants)}
                            </View>
                            <TouchableOpacity style={matchesStyle.goBack} onPress={() => {setModalVisible(!isModalVisible)}}>
                                <Text style={{color: 'white'}}>
                                    뒤로 가기
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }
    else
    {
        return (<View></View>)
    }
}