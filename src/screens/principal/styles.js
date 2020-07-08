import { StyleSheet, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        height,
        width,
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontStyle: 'italic'
    },
    text: {
        textAlign: 'center',
        alignSelf: "center",
        fontSize: 100,
        marginBottom: 200,
        fontStyle: 'italic',
        color: 'white',
    },
    buttonContainer:{
        flexDirection: 'row',
        height: height*0.2,
        width,
        alignItems: 'center',
        justifyContent: 'space-around',
    }, 
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: height  * 0.05
    },
    textOverlay : {
        textAlign: 'center',
        alignSelf: "center",
        fontSize: 30,
        fontStyle: 'italic',
    },
    overlayContainer: {
        height: height * 0.25,
        width,      
    }

});