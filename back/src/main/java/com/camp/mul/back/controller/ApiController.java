package com.camp.mul.back.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import com.camp.mul.back.dto.ChampionMasteryDto;
import com.camp.mul.back.dto.LeagueEntryDto;
import com.camp.mul.back.dto.SummonerDto;
import com.camp.mul.back.dto.match.MatchDto;
import com.camp.mul.back.methods.ApiMethod;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    
    @RequestMapping(value = "/summonerInfo", method = {RequestMethod.GET, RequestMethod.POST})
    public SummonerDto summonerInfo(String name)
    {        
        ApiMethod api = new ApiMethod();

        SummonerDto dto = api.getSummonerInfo(name);

        return dto;
    }
    
    @RequestMapping(value = "/playerLeague", method = {RequestMethod.GET, RequestMethod.POST})
    public LeagueEntryDto[] playerLeague(String name)
    {        
        ApiMethod api = new ApiMethod();

        LeagueEntryDto[] dto = api.getPlayerLeague(name);

        return dto;
    }
    
    @RequestMapping(value = "/leagueIdList", method = {RequestMethod.GET, RequestMethod.POST})
    public String[] leagueIdList(String name)
    {        
        ApiMethod api = new ApiMethod();

        String[] arr = api.getLeagueIdList(name, 0, 20);

        return arr;
    }
    
    @RequestMapping(value = "/leagueList", method = {RequestMethod.GET, RequestMethod.POST})
    public List<MatchDto> leagueList(String name)
    {        
        ApiMethod api = new ApiMethod();

        return api.getLeagueList(name, 0, 20);
    }
    
    @RequestMapping(value = "/champMasteryList", method = {RequestMethod.GET, RequestMethod.POST})
    public ChampionMasteryDto[] champMasteryList(String name)
    {        
        ApiMethod api = new ApiMethod();

        ChampionMasteryDto[] dto = api.getChampMasteryList(name);

        Properties enProperties = new Properties();
        Properties krProperties = new Properties();

        try 
        {
            enProperties.load(new FileInputStream("src/main/resources/champs.properties"));
            krProperties.load(new FileInputStream("src/main/resources/champskr.properties"));
        } 
        catch (IOException e) 
        {
            System.out.println("파일 불러오기 오류 -> " + e);
        }

        for(int i = 0; i < dto.length; i++)
        {
            dto[i].setChampionNameEN(enProperties.getProperty(Long.toString(dto[i].getChampionId())));
            dto[i].setChampionNameKR(krProperties.getProperty(Long.toString(dto[i].getChampionId())));
        }

        return dto;
    }
    
    @RequestMapping(value = "/rotation", method = {RequestMethod.GET, RequestMethod.POST})
    public int[] rotation()
    {        
        ApiMethod api = new ApiMethod();

        return api.getRotation();
    }
}


/*

플레이어의 챔피언 숙련도(모스트 순) # https://developer.riotgames.com/apis#champion-mastery-v4
https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}

원하는 티어의 순위 출력 # https://developer.riotgames.com/apis#league-exp-v4/GET_getLeagueEntries
https://kr.api.riotgames.com/lol/league-exp/v4/entries/{queue}/{tier}/{division}



플레이어의 매치 리스트 출력 # https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID
https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids
- 쿼리스트링 패러미터 -
start -> n번째의 최근 경기부터 출력 ex) 3 -> 마지막에서부터 3번째 경기부터 출력
count -> 출력할 경기의 수 ex) 20 -> 20개의 경기 출력

PS. 매치의 고유 ID들을 출력한다.

하나의 경기에 대한 정보 불러오기 # https://developer.riotgames.com/apis#match-v5/GET_getMatch
https://asia.api.riotgames.com/lol/match/v5/matches/{matchId}

플레이어 고유 아이디 출력 # https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/{summonerName}

플레이어의 전적 검색 # https://developer.riotgames.com/apis#league-v4
https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/{encryptedSummonerId}

*/