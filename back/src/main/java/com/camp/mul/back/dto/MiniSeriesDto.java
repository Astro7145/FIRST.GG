package com.camp.mul.back.dto;

public class MiniSeriesDto {
    
    private int wins;
    private int losses;
    private int target;
    private String progress;

    public MiniSeriesDto()
    {
        
    }

    public MiniSeriesDto(int wins, int losses, int target, String progress) {
        this.wins = wins;
        this.losses = losses;
        this.target = target;
        this.progress = progress;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public int getLosses() {
        return losses;
    }

    public void setLosses(int losses) {
        this.losses = losses;
    }

    public int getTarget() {
        return target;
    }

    public void setTarget(int target) {
        this.target = target;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }

    @Override
    public String toString() {
        return "MiniSeriesDto [losses=" + losses + ", progress=" + progress + ", target=" + target + ", wins=" + wins
                + "]";
    }
}
