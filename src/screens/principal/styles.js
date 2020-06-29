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
        alignSelf: "center",
        fontSize: 24
    }
});