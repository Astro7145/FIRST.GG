import { StyleSheet } from "react-native";

const matchesStyle = StyleSheet.create({
    winBox:
    {
        borderRadius: 10,
        backgroundColor: '#96c8ff',
        marginTop: '1.5%',
        marginBottom: '1.5%',
        marginLeft: '2%',
        marginRight: '2%',
        padding: '3%'
    },
    loseBox:
    {
        borderRadius: 10,
        backgroundColor: '#ffb4af',
        marginTop: '1.5%',
        marginBottom: '1.5%',
        marginLeft: '2%',
        marginRight: '2%',
        padding: '3%'
    },
    boxElement1:
    {
        flex: 1,
        alignItems: 'center'
    },
    boxElement2:
    {
        flex: 2,
        alignItems: 'center'
    },
    imageStyle1:
    {
        height: 140, 
        width: 140,
        borderRadius: 10, 
        overflow: 'hidden'
    },
    imageStyle2:
    {
        height: 60, 
        width: 60,
        borderRadius: 100, 
        overflow: 'hidden'
    },
    imageStyle3:
    {
        height: 60, 
        width: 60,
        borderRadius: 100, 
        overflow: 'hidden'
    },
    modalContainer:
    {
        borderColor: '#f1c40f',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#153769',
        flex: 1,
        alignItems: 'center'
    },
    pictureView:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
    },
    pictureViewElement:
    {
        flex: 1, 
        alignItems: 'center'
    },
    winText:
    {
        color: '#96c8ff',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 30
    },
    loseText:
    {
        color: '#ffb4af',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 30
    },
    playerList:
    {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        width: '80%',
        marginTop: 40
    },
    playerListLeft:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playerListRight:
    {
        flexDirection: 'row', 
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    playerListName:
    {
        fontSize: 20,
        color: '#f1c40f',
        marginLeft: 10,
        marginRight: 10
    },
    goBack:
    {
        backgroundColor: '#f1c40f',
        borderRadius: 3,
        color: 'white',
        padding: 10,
        width: '20%',
        alignItems: 'center',
        marginTop: 10
    }
});

export default matchesStyle;