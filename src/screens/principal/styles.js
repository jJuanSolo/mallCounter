import { StyleSheet, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        height,
        width,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Latin Modern Roman 10',
        fontStyle: 'italic'
    },
    text: {
        textAlign: 'center',
        alignSelf: "center",
        fontSize: 34,
        margin: 10,
        fontStyle: 'italic'
    },
    buttonContainer:{
        flexDirection: 'row',
        height: height*0.3,
        width,
        alignItems: 'center',
        justifyContent: 'space-around',
    }

});