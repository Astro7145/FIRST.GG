import React from "react";
import { ImageBackground, Text, View } from 'react-native';
import champEn from '../properties/championEn';
import champKo from '../properties/championKo';
import styles from './../css/summonerStyle';
import masteryStyle from './../css/masteryStyle';

export default function Mastery({champMasteryList}:any)
{
    let arr = new Array

    for(var i = 0; i < champMasteryList.length; i++)
    {
        arr[i] = champMasteryList[i]
    }

    let Level = ({lvl}:any) =>
    {
        let color:String

        if(lvl == 7)
        {
             color = '#609beb'
        }
        else if(lvl == 6)
        {
            color = '#ab2bcb'
        }
        else if(lvl == 5)
        {
            color = '#b51111'
        }
        else
        {
            color = '#b3a715'   
        }

        return (<Text style={[{color: `${color}`}, masteryStyle.level]}>{lvl}레벨</Text>)
    }

    const renderingFirst = () =>
    {
        const result = []

        for(var i = 0; i < arr.length / 2; i++)
        {
            let points = (arr[i].championPoints).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

            result.push(
                <View key={arr[i].championId} style={masteryStyle.element}>
                    <ImageBackground source={{uri: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champEn[arr[i].championId]}.png`}}
                                     style={{height: 80, width: 80}}/>
                    <Text style={masteryStyle.cName}>
                        {champKo[arr[i].championId]}
                    </Text>
                    <Level lvl={arr[i].championLevel}/>

                    <Text style={masteryStyle.points}>
                         {points}점
                    </Text>
                </View>
            )
        }

        return result
    }

    const renderingSecond = () =>
    {
        const result = []

        for(var i = arr.length / 2; i <arr.length; i++)
        {
            let points = (arr[i].championPoints).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

            result.push(
                <View key={arr[i].championId} style={masteryStyle.element}>
                    <ImageBackground source={{uri: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champEn[arr[i].championId]}.png`}}
                                     style={{height: 80, width: 80}}/>
                    <Text style={masteryStyle.cName}>
                        {champKo[arr[i].championId]}
                    </Text>
                    <Level lvl={arr[i].championLevel}/>

                    <Text style={masteryStyle.points}>
                         {points}점
                    </Text>
                </View>
            )
        }

        return result
    }

    return (
        <View style={styles.moduleBox}>
            <View style={masteryStyle.elementLine}>
                {renderingFirst()}
            </View>
            <View style={masteryStyle.elementLine}>
                {renderingSecond()}
            </View>
        </View>
    )
}