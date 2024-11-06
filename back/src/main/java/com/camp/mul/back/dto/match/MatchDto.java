package com.camp.mul.back.dto.match;

public class MatchDto {
    
    private MetaDataDto metadata;
    private InfoDto info;
    
    public MatchDto()
    {
        
    }

    public MatchDto(MetaDataDto metadata, InfoDto info) {
        this.metadata = metadata;
        this.info = info;
    }

    public MetaDataDto getMetadata() {
        return metadata;
    }

    public void setMetadata(MetaDataDto metadata) {
        this.metadata = metadata;
    }

    public InfoDto getInfo() {
        return info;
    }

    public void setInfo(InfoDto info) {
        this.info = info;
    }

    @Override
    public String toString() {
        return "MatchDto [info=" + info + ", metadata=" + metadata + "]";
    }
}

/*

 # 아이템 
{
    - 아이템 정보 JSON -
    한글 - https://ddragon.leagueoflegends.com/cdn/12.5.1/data/ko_KR/item.json
    영어 - https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/item.json

    - 아이템 번호 -
    https://darkintaqt.com/blog/league-item-id-list/

    - 아이템 이미지 불러오기 -
    http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/{아이템 코드}.png
}

 # 룬
{
    - 룬 정보 JSON -
    한글 - https://ddragon.leagueoflegends.com/cdn/12.5.1/data/ko_KR/runesReforged.json
    영어 - https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/runesReforged.json

    - 룬 번호 -
    https://darkintaqt.com/blog/lol-perks/

    - 룬 이미지 불러오기 -
    https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/{룬 종류}/{룬 이름}.png
}

 # 스펠
{
    - 스펠 정보 JSON -
    한글 - http://ddragon.leagueoflegends.com/cdn/12.5.1/data/ko_KR/summoner.json
    영어 - http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/summoner.json

    - 스펠 번호 -
    https://darkintaqt.com/blog/league-spell-id-list/

    - 스펠 이미지 불러오기 -
    http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/{스펠 이름}.png
}

 # 프로필
{
    - 프로필 정보 JSON -
    http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/profileicon.json

    - 아이콘 이미지 불러오기 -
    http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/{아이콘 코드}.png
}
*/

/*

    게임 종류 info.gameMode
    플레이 날짜 info.grameCreation
    팀 승패 info.teams.win
    팀 ID info.teams.teamId
    게임 시간 info.gameDuration
    킬 info.participants.kills
    데스 info.participants.deaths
    어시스트 info.participants.assists
    KDA info.participants.challenges.kda
    레벨 info.participants.champLevel
    미니언 info.participants.totalMinionsKilled
    아이템 info.participants.item0~6
    제어 와드 info.participants.detectorWardsPlaced
    팀 인원 info.participants.summonerName
    팀 인원 프로필 아이콘 info.participants.profileIcon
    팀 인원 챔피언 info.participants.championName
    팀 인원 챔피언 ID info.paticipants.championId
    팀 인원 승패 info.participants.win

    룬 info.participants.perks

    룬 종류 info.participants.perks.styles[0].style 주 룬
            info.participants.perks.styles[1].style 보조 룬

    8000 = 정밀
    8100 = 지배
    8200 = 마법
    8300 = 영감
    8400 = 결의

    주 룬 1 info.participants.perks.styles[0].selections[0].perk // styles[0] = 주 룬, styles[1] = 보조 룬, selection[0~3] = 룬 1 ~ 4
    주 룬 2 info.participants.perks.styles[0].selections[1].perk 
    주 룬 3 info.participants.perks.styles[0].selections[2].perk 
    주 룬 4 info.participants.perks.styles[0].selections[3].perk 

    보조 룬 1 info.participants. perks.styles[1].selections[0].perk 
    보조 룬 2 info.participants. perks.styles[1].selections[2].perk 



*/