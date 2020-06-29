import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon, Tile } from 'react-native-elements';
import styles from './styles';
import { startCounter, updateCounter} from './actionCreator'; 
const fondo = require('../../../assets/fondo.jpeg');

class Principal extends PureComponent{ 
    async componentDidMount(){
        const { start } = this.props;
        await start();
    }
    increment = (counter) => {
        const { update } = this.props;
        update(counter + 1);
    };
    decrement = (counter) => {
        const { update } = this.props;
        update(counter - 1);
    };
    doRestart=()=>{
        const { update } = this.props;
        update(0);
    }
    render() {
        const { count } = this.props;
        console.log("ESTE ES UN REDUCER", count);
        return(
            <View style={styles.container}>
                <Text style={styles.text}>¿ Cuantas personas hay en el centro comercial ? </Text>
                <Text style={styles.text}> {count} </Text> 
              
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
                     name='database-refresh' 
                     type='material-community'
                     size={50}
                     onPress={() => this.doRestart()}
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
    update: updateCounter
}
export default connect( mapStateToProps, mapDispatchToProps )(Principal);