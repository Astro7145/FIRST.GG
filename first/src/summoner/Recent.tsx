import React from "react";
import { Text, View } from "react-native";
import recentStyle from "../css/recentStyle";
import styles from "../css/summonerStyle";

export default function Recent({leagueList, uname}:any)
{
    let wins = 0
    let loses = 0

    for(var i = 0; i < leagueList.length; i++)
    {
        for(var j = 0; j < leagueList[i].info.participants.length; j++)
        {
            if((leagueList[i].info.participants[j].summonerName).toLowerCase().replace(/ /g, "") == uname)
            {
                if(leagueList[i].info.participants[j].win)
                {
                    wins++
                }
                else
                {
                    loses++
                }
            }
        }
    }

    return (
        <View style={[styles.moduleBox, {alignItems: 'center'}]}>
            <Text style={recentStyle.recent}>
                최근: 승리 {wins} / 패배 {loses} / 승률 {(wins / (wins + loses) * 100).toFixed(0)}%
            </Text>
        </View>
    )
}