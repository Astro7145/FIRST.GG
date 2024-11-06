package com.camp.mul.back.methods;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

import com.camp.mul.back.dto.ChampionInfo;
import com.camp.mul.back.dto.ChampionMasteryDto;
import com.camp.mul.back.dto.LeagueEntryDto;
import com.camp.mul.back.dto.SummonerDto;
import com.camp.mul.back.dto.match.MatchDto;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class ApiMethod {

    // API_KEY를 properties 파일로 관리하는 방법 물어보기

    final String API_KEY = "RGAPI-13d36b3b-79b4-4d95-9600-fa8b6461f9b5";
    final String KR_API_URL = "https://kr.api.riotgames.com";
    final String ASIA_API_URL = "https://asia.api.riotgames.com";
    
    final int CM_NUMBER = 8;
    final int ROTATION_NUM = 16;

    
    
    public SummonerDto getSummonerInfo(String name) // 플레이어 계정 정보 불러오기 (고유번호, PUUID 등)
    {
        String userName = name.replaceAll(" ", "%20");
        // String requestURL = KR_API_URL + "/lol/summoner/v4/summoners/by-name/" + userName + "?api_key=" + API_KEY;
        String requestURL = KR_API_URL + "/lol/summoner/v4/summoners/by-name/" + userName;

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<SummonerDto> response = restTemplate.exchange(requestURL, HttpMethod.GET, createRequestEntity(), SummonerDto.class);
        // ResponseEntity<SummonerDto> response = restTemplate.getForEntity(requestURL, SummonerDto.class);

        if(response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            return null;
        }
    }

    public LeagueEntryDto[] getPlayerLeague(String name)
    {
        String id = this.getSummonerInfo(name).getId();
        String requestURL = KR_API_URL + "/lol/league/v4/entries/by-summoner/" + id;
        
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<LeagueEntryDto[]> response = restTemplate.exchange(requestURL, HttpMethod.GET, createRequestEntity(), LeagueEntryDto[].class);

        if(response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            return null;
        }
    }

    public String[] getLeagueIdList(String name, int start, int count)
    {
        String puuid = this.getSummonerInfo(name).getPuuid();
        String requestURL = ASIA_API_URL + "/lol/match/v5/matches/by-puuid/" + puuid +"/ids?start=" + start + "&count=" + count;
        
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String[]> response = restTemplate.exchange(requestURL, HttpMethod.GET, createRequestEntity(), String[].class);

        if(response.getStatusCode() == HttpStatus.OK) {

            String[] str = response.getBody();

            return str;
        } else {
            return null;
        }
    }

    public List<MatchDto> getLeagueList(String name, int start, int count)
    {
        List<MatchDto> list = new ArrayList<>();

        String[] matchArr = getLeagueIdList(name, start, count);

        for(String s : matchArr)
        {
            String requestURL = ASIA_API_URL + "/lol/match/v5/matches/" + s;
            
            RestTemplate restTemplate = new RestTemplate();
    
            ResponseEntity<MatchDto> response = restTemplate.exchange(requestURL, HttpMethod.GET, createRequestEntity(), MatchDto.class);

            if(response.getStatusCode() == HttpStatus.OK) {
                
                list.add(response.getBody());   

            } else {

                list.add(null);
                
            }
        }

        return list;
    }

    public ChampionMasteryDto[] getChampMasteryList(String name)
    {
        List<ChampionMasteryDto> list = new ArrayList<>();

        String id = this.getSummonerInfo(name).getId();
        String requestURL = KR_API_URL + "/lol/champion-mastery/v4/champion-masteries/by-summoner/" + id;
        
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<ChampionMasteryDto[]> response = restTemplate.exchange(requestURL, HttpMethod.GET, createRequestEntity(), ChampionMasteryDto[].class);

        if(response.getStatusCode() == HttpStatus.OK) {

            ChampionMasteryDto[] arr = new ChampionMasteryDto[CM_NUMBER];

            for(int i = 0; i < CM_NUMBER; i++)
            {
                arr[i] = response.getBody()[i];
            }

            return arr;
        } else {
            return null;
        }
    }

    // public String[] getRotation()
    // {
    //     String requestURL = KR_API_URL + "/lol/platform/v3/champion-rotations";
        
    //     RestTemplate restTemplate = new RestTemplate();

    //     ResponseEntity<ChampionInfo> response = restTemplate.exchange(requestURL, HttpMethod.GET, createRequestEntity(), ChampionInfo.class);

    //     if(response.getStatusCode() == HttpStatus.OK) {

    //         Properties properties = new Properties();
                
    //         try 
    //         {
    //             properties.load(new FileInputStream("src\\main\\resources\\champs.properties"));
    //         } 
    //         catch (IOException e) 
    //         {
    //             System.out.println("파일 불러오기 오류 -> " + e);
    //         }
    
    //         String[] champArr = new String[ROTATION_NUM];

    //         for(int i = 0; i < ROTATION_NUM; i++)
    //         {
    //             champArr[i] = properties.getProperty(Integer.toString(response.getBody().getFreeChampionIds()[i]));

    //             System.out.println(champArr[i].toString());
    //         }

    //         return champArr;

    //     } 
    //     else 
    //     {
    //         return null;
    //     }
           
    // }

    public int[] getRotation()
    {
        String requestURL = KR_API_URL + "/lol/platform/v3/champion-rotations";
        
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<ChampionInfo> response = restTemplate.exchange(requestURL, HttpMethod.GET, createRequestEntity(), ChampionInfo.class);

        if(response.getStatusCode() == HttpStatus.OK) {

            return response.getBody().getFreeChampionIds();

        } 
        else 
        {
            return null;
        }
           
    }

    private HttpEntity createRequestEntity() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Origin", "https://developer.riotgames.com");
        headers.set("Accept-Charset", "application/x-www-form-urlencoded; charset=UTF-8");
        headers.set("X-Riot-Token", API_KEY);
        headers.set("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7");
        // headers.set("User-Agent", "내 브라우저 정보");

        HttpEntity request = new HttpEntity(headers);

        return request;
    }

}


/*
    API를 불러오는 핵심

    1. URL 저장
    String requestURL = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + userName + "?api_key=" + API_KEY;

    2. 응답 요청 후 응답 내용 저장(JSON)
    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<SummonerDto> response = restTemplate.getForEntity(requestURL, SummonerDto.class);

    3. 통신 성공 여부 확인 후 반환
    if(response.getStatusCode() == HttpStatus.OK) {
        return response.getBody();
    } else {
        return null;
    }
*/