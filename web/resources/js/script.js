const mainServer = 'http://175.116.94.172:3000'
//const mainServer = 'http://localhost:3000'
//const mainServer = 'http://192.168.25.30:3000'
const championKeyToId = {266: "Aatrox",103: "Ahri",84: "Akali",166: "Akshan",12: "Alistar",32: "Amumu",34: "Anivia",1: "Annie",523: "Aphelios",22: "Ashe",136: "AurelionSol",268: "Azir",432: "Bard",53: "Blitzcrank",63: "Brand",201: "Braum",51: "Caitlyn",164: "Camille",69: "Cassiopeia",31: "Chogath",42: "Corki",122: "Darius",131: "Diana",119: "Draven",36: "DrMundo",245: "Ekko",60: "Elise",28: "Evelynn",81: "Ezreal",9: "Fiddlesticks",114: "Fiora",105: "Fizz",3: "Galio",41: "Gangplank",86: "Garen",150: "Gnar",79: "Gragas",104: "Graves",887: "Gwen",120: "Hecarim",74: "Heimerdinger",420: "Illaoi",39: "Irelia",427: "Ivern",40: "Janna",59: "JarvanIV",24: "Jax",126: "Jayce",202: "Jhin",222: "Jinx",145: "Kaisa",429: "Kalista",43: "Karma",30: "Karthus",38: "Kassadin",55: "Katarina",10: "Kayle",141: "Kayn",85: "Kennen",121: "Khazix",203: "Kindred",240: "Kled",96: "KogMaw",7: "Leblanc",64: "LeeSin",89: "Leona",876: "Lillia",127: "Lissandra",236: "Lucian",117: "Lulu",99: "Lux",54: "Malphite",90: "Malzahar",57: "Maokai",11: "MasterYi",21: "MissFortune",62: "MonkeyKing",82: "Mordekaiser",25: "Morgana",267: "Nami",75: "Nasus",111: "Nautilus",518: "Neeko",76: "Nidalee",56: "Nocturne",20: "Nunu",2: "Olaf",61: "Orianna",516: "Ornn",80: "Pantheon",78: "Poppy",555: "Pyke",246: "Qiyana",133: "Quinn",497: "Rakan",33: "Rammus",421: "RekSai",526: "Rell",888: "Renata",58: "Renekton",107: "Rengar",92: "Riven",68: "Rumble",13: "Ryze",360: "Samira",113: "Sejuani",235: "Senna",147: "Seraphine",875: "Sett",35: "Shaco",98: "Shen",102: "Shyvana",27: "Singed",14: "Sion",15: "Sivir",72: "Skarner",37: "Sona",16: "Soraka",50: "Swain",517: "Sylas",134: "Syndra",223: "TahmKench",163: "Taliyah",91: "Talon",44: "Taric",17: "Teemo",412: "Thresh",18: "Tristana",48: "Trundle",23: "Tryndamere",4: "TwistedFate",29: "Twitch",77: "Udyr",6: "Urgot",110: "Varus",67: "Vayne",45: "Veigar",161: "Velkoz",711: "Vex",254: "Vi",234: "Viego",112: "Viktor",8: "Vladimir",106: "Volibear",19: "Warwick",498: "Xayah",101: "Xerath",5: "XinZhao",157: "Yasuo",777: "Yone",83: "Yorick",350: "Yuumi",154: "Zac",238: "Zed",221: "Zeri",115: "Ziggs",26: "Zilean",142: "Zoe",143: "Zyra"}
const championKeyToIdKr = {266: "아트록스",103: "아리",84: "아칼리",166: "아크샨",12: "알리스타",32: "아무무",34: "애니비아",1: "애니",523: "아펠리오스",22: "애쉬",136: "아우렐리온 솔",268: "아지르",432: "바드",53: "블리츠크랭크",63: "브랜드",201: "브라움",51: "케이틀린",164: "카밀",69: "카시오페아",31: "초가스",42: "코르키",122: "다리우스",131: "다이애나",119: "드레이븐",36: "문도 박사",245: "에코",60: "엘리스",28: "이블린",81: "이즈리얼",9: "피들스틱",114: "피오라",105: "피즈",3: "갈리오",41: "갱플랭크",86: "가렌",150: "나르",79: "그라가스",104: "그레이브즈",887: "그웬",120: "헤카림",74: "하이머딩거",420: "일라오이",39: "이렐리아",427: "아이번",40: "잔나",59: "자르반 4세",24: "잭스",126: "제이스",202: "진",222: "징크스",145: "카이사",429: "칼리스타",43: "카르마",30: "카서스",38: "카사딘",55: "카타리나",10: "케일",141: "케인",85: "케넨",121: "카직스",203: "킨드레드",240: "클레드",96: "코그모",7: "르블랑",64: "리 신",89: "레오나",876: "릴리아",127: "리산드라",236: "루시안",117: "룰루",99: "럭스",54: "말파이트",90: "말자하",57: "마오카이",11: "마스터 이",21: "미스 포츈",62: "오공",82: "모데카이저",25: "모르가나",267: "나미",75: "나서스",111: "노틸러스",518: "니코",76: "니달리",56: "녹턴",20: "누누와 윌럼프",2: "올라프",61: "오리아나",516: "오른",80: "판테온",78: "뽀삐",555: "파이크",246: "키아나",133: "퀸",497: "라칸",33: "람머스",421: "렉사이",526: "렐",888: "레나타 글라스크",58: "레넥톤",107: "렝가",92: "리븐",68: "럼블",13: "라이즈",360: "사미라",113: "세주아니",235: "세나",147: "세라핀",875: "세트",35: "샤코",98: "쉔",102: "쉬바나",27: "신지드",14: "사이온",15: "시비르",72: "스카너",37: "소나",16: "소라카",50: "스웨인",517: "사일러스",134: "신드라",223: "탐 켄치",163: "탈리야",91: "탈론",44: "타릭",17: "티모",412: "쓰레쉬",18: "트리스타나",48: "트런들",23: "트린다미어",4: "트위스티드 페이트",29: "트위치",77: "우디르",6: "우르곳",110: "바루스",67: "베인",45: "베이가",161: "벨코즈",711: "벡스",254: "바이",234: "비에고",112: "빅토르",8: "블라디미르",106: "볼리베어",19: "워윅",498: "자야",101: "제라스",5: "신 짜오",157: "야스오",777: "요네",83: "요릭",350: "유미",154: "자크",238: "제드",221: "제리",115: "직스",26: "질리언",142: "조이",143: "자이라"};

// $.ajax({
//     url: 'http://ddragon.leagueoflegends.com/cdn/12.5.1/data/ko_KR/champion.json',
//     type: 'get',
//     success: (res) => {
//         const data = res.data;
//         let jsonData = "{";
//         for (key in data) {
//             jsonData += data[key]['key'];
//             jsonData += ': "',
//             jsonData += key
//             jsonData+= '",'
//         }
//         jsonData += '}'
        
//         alert(jsonData)
//     },
//     error: (err) => { alert(err) }
// })