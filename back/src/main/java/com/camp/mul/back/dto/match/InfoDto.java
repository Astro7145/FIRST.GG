package com.camp.mul.back.dto.match;

import java.util.List;

public class InfoDto {

    private int mapId;
    private int queueId;

    private long gameCreation;
    private long gameDuration;
    private long gameEndTimestamp;
    private long gameId;
    private long gameStartTimestamp;

    private String gameMode;
    private String gameName;
    private String gameType;
    private String gameVersion;
    private String platformId;
    private String tournamentCode;

    private List<ParticipantDto> participants;

    public InfoDto()
    {
        
    }

    public InfoDto(int mapId, int queueId, long gameCreation, long gameDuration, long gameEndTimestamp, long gameId,
            long gameStartTimestamp, String gameMode, String gameName, String gameType, String gameVersion,
            String platformId, String tournamentCode, List<ParticipantDto> participants) {
        this.mapId = mapId;
        this.queueId = queueId;
        this.gameCreation = gameCreation;
        this.gameDuration = gameDuration;
        this.gameEndTimestamp = gameEndTimestamp;
        this.gameId = gameId;
        this.gameStartTimestamp = gameStartTimestamp;
        this.gameMode = gameMode;
        this.gameName = gameName;
        this.gameType = gameType;
        this.gameVersion = gameVersion;
        this.platformId = platformId;
        this.tournamentCode = tournamentCode;
        this.participants = participants;
    }

    public int getMapId() {
        return mapId;
    }

    public void setMapId(int mapId) {
        this.mapId = mapId;
    }

    public int getQueueId() {
        return queueId;
    }

    public void setQueueId(int queueId) {
        this.queueId = queueId;
    }

    public long getGameCreation() {
        return gameCreation;
    }

    public void setGameCreation(long gameCreation) {
        this.gameCreation = gameCreation;
    }

    public long getGameDuration() {
        return gameDuration;
    }

    public void setGameDuration(long gameDuration) {
        this.gameDuration = gameDuration;
    }

    public long getGameEndTimestamp() {
        return gameEndTimestamp;
    }

    public void setGameEndTimestamp(long gameEndTimestamp) {
        this.gameEndTimestamp = gameEndTimestamp;
    }

    public long getGameId() {
        return gameId;
    }

    public void setGameId(long gameId) {
        this.gameId = gameId;
    }

    public long getGameStartTimestamp() {
        return gameStartTimestamp;
    }

    public void setGameStartTimestamp(long gameStartTimestamp) {
        this.gameStartTimestamp = gameStartTimestamp;
    }

    public String getGameMode() {
        return gameMode;
    }

    public void setGameMode(String gameMode) {
        this.gameMode = gameMode;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getGameType() {
        return gameType;
    }

    public void setGameType(String gameType) {
        this.gameType = gameType;
    }

    public String getGameVersion() {
        return gameVersion;
    }

    public void setGameVersion(String gameVersion) {
        this.gameVersion = gameVersion;
    }

    public String getPlatformId() {
        return platformId;
    }

    public void setPlatformId(String platformId) {
        this.platformId = platformId;
    }

    public String getTournamentCode() {
        return tournamentCode;
    }

    public void setTournamentCode(String tournamentCode) {
        this.tournamentCode = tournamentCode;
    }

    public List<ParticipantDto> getParticipants() {
        return participants;
    }

    public void setParticipants(List<ParticipantDto> participants) {
        this.participants = participants;
    }

    @Override
    public String toString() {
        return "InfoDto [gameCreation=" + gameCreation + ", gameDuration=" + gameDuration + ", gameEndTimestamp="
                + gameEndTimestamp + ", gameId=" + gameId + ", gameMode=" + gameMode + ", gameName=" + gameName
                + ", gameStartTimestamp=" + gameStartTimestamp + ", gameType=" + gameType + ", gameVersion="
                + gameVersion + ", mapId=" + mapId + ", participants=" + participants + ", platformId=" + platformId
                + ", queueId=" + queueId + ", tournamentCode=" + tournamentCode + "]";
    }

    
}
