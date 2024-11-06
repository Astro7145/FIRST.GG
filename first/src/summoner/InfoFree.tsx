import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "../css/summonerStyle"
import infoStyles from "../css/infoStyle"

export default function InfoFree({ playerLeagueFree }:any)
{
    const images:any =
    {
        bronze: require("../img/tier/Emblem_bronze.png"),
        challenger: require("../img/tier/Emblem_challenger.png"),
        default: require("../img/tier/default.png"),
        diamond: require("../img/tier/Emblem_diamond.png"),
        gold: require("../img/tier/Emblem_gold.png"),
        grandmaster:require ("../img/tier/Emblem_grandmaster.png"),
        iron: require("../img/tier/Emblem_iron.png"),
        master: require("../img/tier/Emblem_master.png"),
        platinum: require("../img/tier/Emblem_platinum.png"),
        silver: require("../img/tier/Emblem_silver.png")
    }

    if(playerLeagueFree.tier == null)
    {
        return (
            <View>
                <Text style={{  color: "#f1c40f",
                                fontSize: 30,
                                fontWeight: 'bold',
                                marginTop: '5%',
                                marginLeft: '5%'}}>
                    자유 랭크
                </Text>
                <View style={[styles.moduleBox, {flexDirection: "row"}]}>
                    <View style={infoStyles.tierImagebox}>    
                        <Image source={images["default"]} 
                                style={infoStyles.tierImage}/>
                    </View>
                    <View style={infoStyles.playerInfoBox}>
                        <Text style={infoStyles.tier}>
                            Unranked
                        </Text>
                        <Text style={infoStyles.winrate}>
                            승리 0 패배 0 승률 0%
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Text style={{  color: "#f1c40f",
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginTop: '5%',
                            marginLeft: '5%'}}>
                자유 랭크
            </Text>
            <View style={[styles.moduleBox, {flexDirection: "row"}]}>
                <View style={infoStyles.tierImagebox}>    
                    <Image source={playerLeagueFree.tier != null ? images[(playerLeagueFree.tier).toLowerCase()] : null} 
                            style={infoStyles.tierImage}/>
                </View>
                <View style={infoStyles.playerInfoBox}>
                    <Text style={infoStyles.tier}>
                        {playerLeagueFree.tier != null ? `${playerLeagueFree.tier} ${playerLeagueFree.rank}` : 'Unranked'}
                    </Text>
                    <Text style={infoStyles.winrate}>
                        {`승리 ${playerLeagueFree.wins} 패배 ${playerLeagueFree.losses} 승률 ${(playerLeagueFree.wins / (playerLeagueFree.wins + playerLeagueFree.losses) * 100).toFixed(1)}%`}
                    </Text>
                </View>
            </View>
        </View>
    )
}