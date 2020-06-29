import firebase from '../../../firebase';
import Actions from '../../redux/actionType';

export const updateCounter = (counter) => async (dispatch) => {
    const dbh = firebase.firestore();
    const mallCollection = dbh.collection('malls');
    const selectedMall = mallCollection.doc("qNGiV8F6qEN4ug1wpzJ3");
    await selectedMall.update({counter})
     .then(() => {
        return dispatch({
       type: Actions.UPDATECOUNTER,
       payload: counter
    });
    })
    .catch((error) => {
      return dispatch({
      type: Actions.ERRORCOUNTER,
      payload: error
    });
  });
}

export const restarCounter = () => ({
    type: Actions.RESTARTCOUNTER,
  });

export const startCounter = () => (dispatch) =>{
  const userCollection = dbh.collection("malls").doc("qNGiV8F6qEN4ug1wpzJ3");
  await userCollection.get()
   .then((snapShot) => {
      return dispatch({
       type: Actions.UPDATECOUNTER,
       payload: snapShot.data()
      });
    }).catch((error) => {
      return dispatch({
      type: Actions.ERRORCOUNTER,
      payload: error
    });
  });
}