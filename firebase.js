import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAFS95ZNowTfIYprK893wZwwEINZpnp3mE",
  authDomain: "mallcounter-1e68a.firebaseapp.com",
  databaseURL: "https://mallcounter-1e68a.firebaseio.com",
  projectId: "mallcounter-1e68a",
  storageBucket: "mallcounter-1e68a.appspot.com",
  messagingSenderId: "970371999654",
  appId: "1:970371999654:web:e8a19a91c11902e4795167",
  measurementId: "G-G5XQ7BLMQC"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase;
