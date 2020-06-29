import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        height,
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        alignSelf: "center",
        fontSize: 24,
        margin: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        height: height*0.3,
        width,
        alignItems: 'center',
        justifyContent: 'space-around',
    }

});