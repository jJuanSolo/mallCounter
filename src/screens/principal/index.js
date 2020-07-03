import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon, Tile } from 'react-native-elements';
import styles from './styles';
import { startCounter, updateCounter,restartCounter} from './actionCreator'; 


class Principal extends PureComponent{ 
    async componentDidMount(){
        const { start } = this.props;
        await start();
    }
    increment = () => {
        const { update } = this.props;
        update('increment');
    };
    decrement = () => {
        const { update } = this.props;
        update('');
    };
    doRestart=()=>{
        const {restart} = this.props;
        restart();
    }
    
    render() {
        const { count } = this.props;
        console.log("ESTE ES UN REDUCER", count);
        return(
            <View style={styles.container}>
                <Text style={styles.text} >¿ Cuantas personas hay en el centro comercial ? </Text>
                <Text style={styles.text}> {count} </Text> 
                <View>
                <View style={styles.buttonContainer} >
                    <Icon 
                    name='account-minus'
                    type='material-community'
                    size={50}
                    onPress={() => this.decrement() } />
                    <Icon 
                     name='account-plus' 
                     type='material-community'
                     size={50}
                     onPress={() => this.increment()}
                    />
                </View>
                <Icon 
                     name='database-refresh' 
                     type='material-community'
                     size={50}
                     onPress={() => this.doRestart()}
                    />
                </View>
            </View>
        );
    }
}



const mapStateToProps = (state) => ({
    count : state.reducerPrincipal.counter
  });

const mapDispatchToProps = {
    start: startCounter,
    update: updateCounter,
    restart: restartCounter
}
export default connect( mapStateToProps, mapDispatchToProps )(Principal);