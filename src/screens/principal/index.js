import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon, Tile } from 'react-native-elements';
import styles from './styles';
import { startCounter, updateCounter, restartCounter } from './actionCreator'; 
const fondo = require('../../../assets/fondo.jpeg');

class Principal extends PureComponent{ 
    componentDidMount(){
        const { start } = this.props;
        start();
    }
    increment = (counter) => {
        const { update } = this.props;
        update(counter + 1);
    };
    decrement = (counter) => {
        const { update } = this.props;
        update(counter - 1);
    };
    render() {
        const { restart, count } = this.props;
        console.log("ESTE ES UN REDUCER", count);
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Esta es la cantidad
                de personas dentro del centro comercial: </Text>
                <Tile
                imageSrc={fondo}
                title={count}
                featured
                />
                <View style={styles.buttonContainer} >
                    <Icon 
                    name='account-minus'
                    type='material-community'
                    size={50}
                    onPress={() => this.decrement(count) } />
                    <Icon 
                     name='account-plus' 
                     type='material-community'
                     size={50}
                     onPress={() => this.increment(count)}
                    />
                </View>
                <Icon 
                     name='account-plus' 
                     type='material-community'
                     size={50}
                     onPress={() => restart()}
                    />
            </View>
        );
    }
}



const mapStateToProps = (state) => ({
    count : state.reducerPrincipal.counter
  });

const mapDispatchToProps = {
    start: startCounter,
    restart: restartCounter,
    update: updateCounter
}
export default connect( mapStateToProps, mapDispatchToProps )(Principal);