package com.camp.mul.back.dto;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ChampionMasteryDto {

    private long championPointsMasteryDto;
    private long championId;
    private long lastPlayTime;
    private long championPointsSinceLastLevel;

    private int championLevel;
    private int championPoints;
    private int tokensEarned;

    private String summonerId;
    private String championNameEN;
    private String championNameKR;

    private boolean chestGranted;

    public ChampionMasteryDto()
    {
        
    }

    public ChampionMasteryDto(long championPointsMasteryDto, long championId, long lastPlayTime,
            long championPointsSinceLastLevel, int championLevel, int championPoints, int tokensEarned,
            String summonerId, boolean chestGranted) {
        this.championPointsMasteryDto = championPointsMasteryDto;
        this.championId = championId;
        this.lastPlayTime = lastPlayTime;
        this.championPointsSinceLastLevel = championPointsSinceLastLevel;
        this.championLevel = championLevel;
        this.championPoints = championPoints;
        this.tokensEarned = tokensEarned;
        this.summonerId = summonerId;
        this.chestGranted = chestGranted;
    }

    public long getChampionPointsMasteryDto() {
        return championPointsMasteryDto;
    }

    public void setChampionPointsMasteryDto(long championPointsMasteryDto) {
        this.championPointsMasteryDto = championPointsMasteryDto;
    }

    public long getChampionId() {
        return championId;
    }

    public void setChampionId(long championId) {
        this.championId = championId;
    }

    public long getLastPlayTime() {
        return lastPlayTime;
    }

    public void setLastPlayTime(long lastPlayTime) {
        this.lastPlayTime = lastPlayTime;
    }

    public long getChampionPointsSinceLastLevel() {
        return championPointsSinceLastLevel;
    }

    public void setChampionPointsSinceLastLevel(long championPointsSinceLastLevel) {
        this.championPointsSinceLastLevel = championPointsSinceLastLevel;
    }

    public int getChampionLevel() {
        return championLevel;
    }

    public void setChampionLevel(int championLevel) {
        this.championLevel = championLevel;
    }

    public int getChampionPoints() {
        return championPoints;
    }

    public void setChampionPoints(int championPoints) {
        this.championPoints = championPoints;
    }

    public int getTokensEarned() {
        return tokensEarned;
    }

    public void setTokensEarned(int tokensEarned) {
        this.tokensEarned = tokensEarned;
    }

    public String getSummonerId() {
        return summonerId;
    }

    public void setSummonerId(String summonerId) {
        this.summonerId = summonerId;
    }

    public boolean isChestGranted() {
        return chestGranted;
    }

    public void setChestGranted(boolean chestGranted) {
        this.chestGranted = chestGranted;
    }

    public String getChampionNameEN() {
        return championNameEN;
    }

    public void setChampionNameEN(String championNameEN) {
        this.championNameEN = championNameEN;
    }

    public String getChampionNameKR() {
        return championNameKR;
    }

    public void setChampionNameKR(String championNameKR) {
        this.championNameKR = championNameKR;
    }

    @Override
    public String toString() {
        return "ChampionMasteryDto [championId=" + championId + ", championLevel=" + championLevel + ", championNameEN="
                + championNameEN + ", championNameKR=" + championNameKR + ", championPoints=" + championPoints
                + ", championPointsMasteryDto=" + championPointsMasteryDto + ", championPointsSinceLastLevel="
                + championPointsSinceLastLevel + ", chestGranted=" + chestGranted + ", lastPlayTime=" + lastPlayTime
                + ", summonerId=" + summonerId + ", tokensEarned=" + tokensEarned + "]";
    }

    
}
