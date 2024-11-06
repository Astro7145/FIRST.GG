import { StyleSheet } from "react-native";

const infoStyles = StyleSheet.create({
    container:
    {
        backgroundColor: '#153769',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tierImage:
    {
        width: 140,
        height: 140
    },
    tierImagebox:
    {
        flex: 1
    },
    playerInfoBox:
    {
        flex: 3, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    tier:
    {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '2%'
    },
    winrate:
    {
        fontSize: 18
    },
    level:
    {
        fontSize: 26,
        marginBottom: '3%'
    }
})

export default infoStyles