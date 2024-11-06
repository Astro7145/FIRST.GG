const spellPath = 
{
    21: "SummonerBarrier", 
    1: "SummonerBoost", 
    14: "SummonerDot", 
    3: "SummonerExhaust", 
    4: "SummonerFlash", 
    6: "SummonerHaste", 
    7: "SummonerHeal", 
    13: "SummonerMana", 
    30: "SummonerPoroRecall", 
    31: "SummonerPoroThrow", 
    11: "SummonerSmite", 
    39: "SummonerSnowURFSnowball_Mark", 
    32: "SummonerSnowball", 
    12: "SummonerTeleport", 
    54: "Summoner_UltBookPlaceholder", 
    55: "Summoner_UltBookSmitePlaceholder", 
}



// $.ajax({
//         url: 'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/summoner.json',
//         type: 'get',
//         success: (res) => {
            
//             const data = res.data;

//             let jsonData = "{\n";

//             for(spell in data)
//             {
//                 jsonData += data[spell]['key']
//                 jsonData += ': "'
//                 jsonData += data[spell]['id']
//                 jsonData += '", \n'

//                 jsonData[data[spell]['key']] = data[spell]['id']
//             }

//             jsonData += '}'
            
//             console.log(jsonData)
//         },
//         error: (err) => { alert(err) }
//     })