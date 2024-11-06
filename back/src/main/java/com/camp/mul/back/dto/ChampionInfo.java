package com.camp.mul.back.dto;

import java.util.Arrays;

public class ChampionInfo {
    
    private int[] freeChampionIds;

    public ChampionInfo()
    {
        
    }

    public ChampionInfo(int[] freeChampionIds) {
        this.freeChampionIds = freeChampionIds;
    }

    public int[] getFreeChampionIds() {
        return freeChampionIds;
    }

    public void setFreeChampionIds(int[] freeChampionIds) {
        this.freeChampionIds = freeChampionIds;
    }

    @Override
    public String toString() {
        return "ChampionInfo [freeChampionIds=" + Arrays.toString(freeChampionIds) + "]";
    }

    
}
