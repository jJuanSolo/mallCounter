import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDme5dGRIYhVLdmKgHsskQ4xRvbIC4idZg",
  authDomain: "mall-counter.firebaseapp.com",
  databaseURL: "https://mall-counter.firebaseio.com",
  projectId: "mall-counter",
  storageBucket: "mall-counter.appspot.com",
  messagingSenderId: "1065624270406",
  appId: "1:1065624270406:web:49259d0e2b0128c0a9fc47",
  measurementId: "G-ZCS02BFR76"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase;
