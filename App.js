import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { StyleSheet, View } from 'react-native';
import { Provider }from 'react-redux';
import store from './src/redux/store';
import Screen from './src/screens/principal/index';


const firebaseConfig = {
  apiKey: "AIzaSyAFS95ZNowTfIYprK893wZwwEINZpnp3mE",
  authDomain: "mallcounter-1e68a.firebaseapp.com",
  databaseURL: "https://mallcounter-1e68a.firebaseio.com",
  projectId: "mallcounter-1e68a",
  storageBucket: "mallcounter-1e68a.appspot.com",
  messagingSenderId: "970371999654",
  appId: "1:970371999654:web:e8a19a91c11902e4795167",
  measurementId: "G-G5XQ7BLMQC"
};

firebase.initializeApp(firebaseConfig);

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
