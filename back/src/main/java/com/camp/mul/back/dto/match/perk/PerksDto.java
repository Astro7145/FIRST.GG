package com.camp.mul.back.dto.match.perk;

import java.util.List;

public class PerksDto {
    private PerkStatsDto statperks;
    private List<PerkStyleDto> styles;

    public PerksDto()
    {

    }

    public PerksDto(PerkStatsDto statperks, List<PerkStyleDto> styles) {
        this.statperks = statperks;
        this.styles = styles;
    }

    public PerkStatsDto getStatperks() {
        return statperks;
    }

    public void setStatperks(PerkStatsDto statperks) {
        this.statperks = statperks;
    }

    public List<PerkStyleDto> getStyles() {
        return styles;
    }

    public void setStyles(List<PerkStyleDto> styles) {
        this.styles = styles;
    }

    @Override
    public String toString() {
        return "PerksDto [statperks=" + statperks + ", styles=" + styles + "]";
    } 
}
