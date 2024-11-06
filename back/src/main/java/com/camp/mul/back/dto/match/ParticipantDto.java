package com.camp.mul.back.dto.match;

import com.camp.mul.back.dto.match.perk.PerksDto;

public class ParticipantDto {
    
    private int kills;
    private int deaths;
    private int assists;
    private int totalMinionsKilled;

    private int item0;
    private int item1;
    private int item2;
    private int item3;
    private int item4;
    private int item5;
    private int item6;

    private int detectorWardsPlaced;

    private String summonerName;
    private int profileIcon;

    private String championName;
    private int champLevel;
    private int championId;

    private boolean win;

    private int summoner1Id;
    private int summoner2Id;

    private PerksDto perks;

    public ParticipantDto()
    {

    }

    public ParticipantDto(int kills, int deaths, int assists, int totalMinionsKilled, int item0, int item1, int item2,
            int item3, int item4, int item5, int item6, int detectorWardsPlaced, String summonerName, int profileIcon,
            String championName, int champLevel, int championId, boolean win, int summoner1Id, int summoner2Id,
            PerksDto perks) {
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.totalMinionsKilled = totalMinionsKilled;
        this.item0 = item0;
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
        this.item4 = item4;
        this.item5 = item5;
        this.item6 = item6;
        this.detectorWardsPlaced = detectorWardsPlaced;
        this.summonerName = summonerName;
        this.profileIcon = profileIcon;
        this.championName = championName;
        this.champLevel = champLevel;
        this.championId = championId;
        this.win = win;
        this.summoner1Id = summoner1Id;
        this.summoner2Id = summoner2Id;
        this.perks = perks;
    }

    public int getKills() {
        return kills;
    }

    public void setKills(int kills) {
        this.kills = kills;
    }

    public int getDeaths() {
        return deaths;
    }

    public void setDeaths(int deaths) {
        this.deaths = deaths;
    }

    public int getAssists() {
        return assists;
    }

    public void setAssists(int assists) {
        this.assists = assists;
    }

    public int getTotalMinionsKilled() {
        return totalMinionsKilled;
    }

    public void setTotalMinionsKilled(int totalMinionsKilled) {
        this.totalMinionsKilled = totalMinionsKilled;
    }

    public int getItem0() {
        return item0;
    }

    public void setItem0(int item0) {
        this.item0 = item0;
    }

    public int getItem1() {
        return item1;
    }

    public void setItem1(int item1) {
        this.item1 = item1;
    }

    public int getItem2() {
        return item2;
    }

    public void setItem2(int item2) {
        this.item2 = item2;
    }

    public int getItem3() {
        return item3;
    }

    public void setItem3(int item3) {
        this.item3 = item3;
    }

    public int getItem4() {
        return item4;
    }

    public void setItem4(int item4) {
        this.item4 = item4;
    }

    public int getItem5() {
        return item5;
    }

    public void setItem5(int item5) {
        this.item5 = item5;
    }

    public int getItem6() {
        return item6;
    }

    public void setItem6(int item6) {
        this.item6 = item6;
    }

    public int getDetectorWardsPlaced() {
        return detectorWardsPlaced;
    }

    public void setDetectorWardsPlaced(int detectorWardsPlaced) {
        this.detectorWardsPlaced = detectorWardsPlaced;
    }

    public String getSummonerName() {
        return summonerName;
    }

    public void setSummonerName(String summonerName) {
        this.summonerName = summonerName;
    }

    public int getProfileIcon() {
        return profileIcon;
    }

    public void setProfileIcon(int profileIcon) {
        this.profileIcon = profileIcon;
    }

    public String getChampionName() {
        return championName;
    }

    public void setChampionName(String championName) {
        this.championName = championName;
    }

    public int getChampLevel() {
        return champLevel;
    }

    public void setChampLevel(int champLevel) {
        this.champLevel = champLevel;
    }

    public int getChampionId() {
        return championId;
    }

    public void setChampionId(int championId) {
        this.championId = championId;
    }

    public boolean isWin() {
        return win;
    }

    public void setWin(boolean win) {
        this.win = win;
    }

    public PerksDto getPerks() {
        return perks;
    }

    public void setPerks(PerksDto perks) {
        this.perks = perks;
    }

    public int getSummoner1Id() {
        return summoner1Id;
    }

    public void setSummoner1Id(int summoner1Id) {
        this.summoner1Id = summoner1Id;
    }

    public int getSummoner2Id() {
        return summoner2Id;
    }

    public void setSummoner2Id(int summoner2Id) {
        this.summoner2Id = summoner2Id;
    }

    @Override
    public String toString() {
        return "ParticipantDto [assists=" + assists + ", champLevel=" + champLevel + ", championId=" + championId
                + ", championName=" + championName + ", deaths=" + deaths + ", detectorWardsPlaced="
                + detectorWardsPlaced + ", item0=" + item0 + ", item1=" + item1 + ", item2=" + item2 + ", item3="
                + item3 + ", item4=" + item4 + ", item5=" + item5 + ", item6=" + item6 + ", kills=" + kills + ", perks="
                + perks + ", profileIcon=" + profileIcon + ", summoner1Id=" + summoner1Id + ", summoner2Id="
                + summoner2Id + ", summonerName=" + summonerName + ", totalMinionsKilled=" + totalMinionsKilled
                + ", win=" + win + "]";
    }
}
