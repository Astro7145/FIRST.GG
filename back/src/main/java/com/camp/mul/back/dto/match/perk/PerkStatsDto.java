package com.camp.mul.back.dto.match.perk;

public class PerkStatsDto {

    private int offense;
    private int defense;
    private int flex;

    public PerkStatsDto()
    {
        
    }

    public PerkStatsDto(int offense, int defense, int flex) {
        this.offense = offense;
        this.defense = defense;
        this.flex = flex;
    }

    public int getOffense() {
        return offense;
    }

    public void setOffense(int offense) {
        this.offense = offense;
    }

    public int getDefense() {
        return defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public int getFlex() {
        return flex;
    }

    public void setFlex(int flex) {
        this.flex = flex;
    }

    @Override
    public String toString() {
        return "PerkStatsDto [defense=" + defense + ", flex=" + flex + ", offense=" + offense + "]";
    }

    
}
