import { StyleSheet } from "react-native";
import { rgbaColor } from "react-native-reanimated/src/reanimated2/Colors";

const masteryStyle = StyleSheet.create({
    element:
    {
        flex: 1,
        alignItems: "center"
    },
    elementLine:
    {
        flexDirection: 'row', 
        justifyContent: "space-around"
    },
    points:
    {
        fontWeight: 'bold',
        fontSize: 18
    },
    level:
    {
        fontWeight: 'bold', 
        backgroundColor: '#242424', 
        borderRadius: 5, 
        paddingHorizontal: '5%'
    },
    cName:
    {
        fontWeight: 'bold', 
        fontSize: 18
    }
});

export default masteryStyle;