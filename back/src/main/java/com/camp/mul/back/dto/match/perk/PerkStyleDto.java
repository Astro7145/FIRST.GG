package com.camp.mul.back.dto.match.perk;

import java.util.List;

public class PerkStyleDto {

    private int style;
    private String description;
    private List<PerkStyleSelectionDto> selections;
   
    public PerkStyleDto()
    {
        
    }

    public PerkStyleDto(int style, String description, List<PerkStyleSelectionDto> selections) {
        this.style = style;
        this.description = description;
        this.selections = selections;
    }

    public int getStyle() {
        return style;
    }

    public void setStyle(int style) {
        this.style = style;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<PerkStyleSelectionDto> getSelections() {
        return selections;
    }

    public void setSelections(List<PerkStyleSelectionDto> selections) {
        this.selections = selections;
    }

    @Override
    public String toString() {
        return "PerkStyleDto [description=" + description + ", selections=" + selections + ", style=" + style + "]";
    }

    
}
