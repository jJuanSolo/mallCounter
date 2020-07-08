import firebase from '../../../src/firebase';
import Actions from '../../redux/actionType';

export const updateCounter = (operator) => async (dispatch) => {
    const dbh = firebase.firestore();
    const mallCollection = dbh.collection('counters');
    const selectedMall = mallCollection.doc("alkosto-03-07-2020");
    await selectedMall.get()
    .then(doc => {

      let door1 = doc.data().door1;  
      if (operator=='increment'){
        door1 = door1 + 1;        
      } else {
        door1 =door1 - 1;
      } 
    selectedMall.update({door1})
      .then(() => {
        return dispatch({
        type: Actions.ERRORCOUNTER,
        payload: 'sucess'
      });
      })
      .catch((error) => {
        return dispatch({
        type: Actions.ERRORCOUNTER,
        payload: error
      });
    });
      
    });
}



export const restartCounter = (count) => async (dispatch) => {
  const dbh = firebase.firestore();
  const mallCollection = dbh.collection('counters');
  const selectedMall = mallCollection.doc("alkosto-03-07-2020");
  const date = Date.now();
  const saveCount = { date, count }
  selectedMall.collection('records').add(saveCount);
  await selectedMall.update({ door1:0, door2:0, door3:0, door4:0 })
     .then(() => {
       return dispatch({
       type: Actions.ERRORCOUNTER,
       payload: 'success'
    });
    })
    .catch((error) => {
      return dispatch({
      type: Actions.ERRORCOUNTER,
      payload: error
    });
  });
    
  
}

export const startCounter = () => async (dispatch) =>{
    const dbh = firebase.firestore();
    const mallCounter = dbh.collection("counters").doc("alkosto-03-07-2020");
    await mallCounter.onSnapshot((snapshot) => {
    const door1Counter = snapshot.data().door1;
    const door2Counter = snapshot.data().door2;
    const door3Counter = snapshot.data().door3;
    const door4Counter = snapshot.data().door4;
    const counter = door1Counter + door2Counter + door3Counter + door4Counter;
    dispatch({
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