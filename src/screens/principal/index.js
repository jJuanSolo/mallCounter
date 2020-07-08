import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import styles from './styles';
import { startCounter, updateCounter, restartCounter} from './actionCreator'; 
const back = require('../../../assets/background.png');

class Principal extends PureComponent{ 

    state = {
        visible: false
    }

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
    doRestart = () => {
        const { restart, count } = this.props;
        restart(count);
        this.setState({ visible: false });
    }
    isVisible = () => {
        const { visible } = this.state;
        return visible ? true : false ;
    }

    render() {
        const { count } = this.props;
        return(
            <ImageBackground source={back} style={styles.container}>
                <Text style={styles.text}>{count}</Text> 
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
                     onPress={() => this.setState({ visible: true })}
                    />
                </View>
                <Overlay
                isVisible={this.isVisible()}
                >
                <View style={styles.overlayContainer}>
                <Text style={styles.textOverlay}>
                        ¿Está seguro que desea reiniciar?
                </Text>
                <View style={styles.buttonContainer}>
                  <Icon 
                    color='red'
                    name='close-circle-outline'
                    type='material-community'
                    size={50}
                    onPress={() => this.setState({ visible: false }) } 
                    />
                  <Icon 
                     color='green'
                     name='check-circle' 
                     type='material-community'
                     size={50}
                     onPress={() => this.doRestart()}
                    />
                 </View>
                 </View>
                </Overlay>
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