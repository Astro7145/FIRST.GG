import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "../css/summonerStyle"
import infoStyles from "../css/infoStyle"

export default function Info({ playerLeague, level }:any)
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

    if(playerLeague.tier == null)
    {
        return (
            <View>
                <View style={[styles.moduleBox, {flexDirection: "row"}]}>
                    <View style={infoStyles.tierImagebox}>    
                        <Image source={images["default"]} 
                                style={infoStyles.tierImage}/>
                    </View>
                    <View style={infoStyles.playerInfoBox}>
                        <Text style={infoStyles.tier}>
                            Unranked
                        </Text>
                        <Text style={infoStyles.level}>
                            {`${level} Lv.`}
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
            <View style={[styles.moduleBox, {flexDirection: "row"}]}>
                <View style={infoStyles.tierImagebox}>    
                    <Image source={playerLeague.tier != null ? images[(playerLeague.tier).toLowerCase()] : null} 
                            style={infoStyles.tierImage}/>
                </View>
                <View style={infoStyles.playerInfoBox}>
                    <Text style={infoStyles.tier}>
                        {playerLeague.tier != null ? `${playerLeague.tier} ${playerLeague.rank}` : 'Unranked'}
                    </Text>
                    <Text style={infoStyles.level}>
                        {`${level} Lv.`}
                    </Text>
                    <Text style={infoStyles.winrate}>
                        {`승리 ${playerLeague.wins} 패배 ${playerLeague.losses} 승률 ${(playerLeague.wins / (playerLeague.wins + playerLeague.losses) * 100).toFixed(1)}%`}
                    </Text>
                </View>
            </View>
        </View>
    )
}