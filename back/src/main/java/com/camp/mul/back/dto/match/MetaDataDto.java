package com.camp.mul.back.dto.match;

import java.util.List;

public class MetaDataDto {
    
    private String dataVersion;
    private String matchId;
    private List<String> participants;
    
    public MetaDataDto()
    {
        
    }

    public MetaDataDto(String dataVersion, String matchId, List<String> participants) {
        this.dataVersion = dataVersion;
        this.matchId = matchId;
        this.participants = participants;
    }

    public String getDataVersion() {
        return dataVersion;
    }

    public void setDataVersion(String dataVersion) {
        this.dataVersion = dataVersion;
    }

    public String getMatchId() {
        return matchId;
    }

    public void setMatchId(String matchId) {
        this.matchId = matchId;
    }

    public List<String> getParticipants() {
        return participants;
    }

    public void setParticipants(List<String> participants) {
        this.participants = participants;
    }

    @Override
    public String toString() {
        return "MetaDataDto [dataVersion=" + dataVersion + ", matchId=" + matchId + ", participants=" + participants
                + "]";
    }
}
