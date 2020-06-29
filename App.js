import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { StyleSheet, View } from 'react-native';
import { Provider }from 'react-redux';
import store from './src/redux/store';
import Screen from './src/screens/principal/index';
import { decode, encode } from 'base-64';

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;
export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Screen />
      </Provider>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
