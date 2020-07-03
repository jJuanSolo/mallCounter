import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { startCounter, updateCounter, restartCounter} from './actionCreator'; 
const back = require('../../../assets/background.png');

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
            <ImageBackground source={back} style={styles.container}>
                <Text style={styles.text}>0{count} </Text> 
                <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer} >
                    <Icon 
                    color='white'
                    name='account-minus'
                    type='material-community'
                    size={50}
                    onPress={() => this.decrement() } />
                    <Icon 
                     color='white'
                     name='account-plus' 
                     type='material-community'
                     size={50}
                     onPress={() => this.increment()}
                    />
                </View>
                <Icon 
                     color='white'
                     name='database-refresh' 
                     type='material-community'
                     size={50}
                     onPress={() => this.doRestart()}
                    />
                </View>
            </ImageBackground>
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