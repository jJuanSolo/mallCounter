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

export const restartCounter = () => ({
    type: Actions.RESTARTCOUNTER,
  });

export const startCounter = () => async (dispatch) =>{
  const mallCounter = dbh.collection("malls").doc("qNGiV8F6qEN4ug1wpzJ3");
  await mallCounter.onSnapshot((snapshot) => {
    const fieldList = snapshot.data();
    dispatch({
        type: Actions.UPDATECOUNTER,
        payload: snapShot.data()
    });
  })
   .catch((error) => {
      return dispatch({
      type: Actions.ERRORCOUNTER,
      payload: error
    });
  });
}