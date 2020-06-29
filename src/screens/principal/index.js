import React, { PureComponent } from 'react';
import { View, Text } from 'react-native'
import { Icon, Tile } from 'react-native-elements';
import styles from './styles';

class Principal extends PureComponent {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Holiiii contador</Text>
            </View>
        );
    }
}

export default Principal;