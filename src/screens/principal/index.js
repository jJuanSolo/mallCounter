import React, { PureComponent } from 'react';
import { View, Text } from 'react-native'
import { Icon, Tile } from 'react-native-elements';
import styles from './styles';
const fondo = require('../../../assets/fondo.jpeg');

class Principal extends PureComponent {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Esta es la cantidad
                de personas dentro del centro comercial: </Text>
                <Tile
                imageSrc={fondo}
                title="aqui va el numero"
                featured
                />
                <View style={styles.buttonContainer} >
                    <Icon 
                    name='account-minus'
                    type='material-community'
                    size={50}
                    onPress={() => console.log('hello1')} />
                    <Icon 
                     name='account-plus' 
                     type='material-community'
                     size={50}
                     onPress={() => console.log('hello2')}
                    />
                </View>
            </View>
        );
    }
}

export default Principal;