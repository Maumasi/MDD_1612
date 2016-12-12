import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


// type constants
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER,
  MAP_FOCUS_ON_USER,
} from 'sharks_in_the_water/src/controllers/actions/types';

// helper funcs
const logInFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};





const createPlayerLocation = () => {
    const { currentUser } = firebase.auth();

    navigator.geolocation.getCurrentPosition((geo) => {

    const { latitude, longitude } = geo.coords;

      firebase.database().ref(`/users/${currentUser.uid}/location`)
        .push({
          lat: latitude,
          lng: longitude,
        });
    });
};






const logInSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });

  const { currentUser } = firebase.auth();

  firebase.database().ref(`users/${currentUser.uid}/location`)
    .on('value', (userLocation) => {

      let location;
      let uid;
      for (var id in userLocation.val()) {
        if (id != null) {
          location = userLocation.val()[id];
          uid = id;
        }
      }

      navigator.geolocation.getCurrentPosition((geo) => {

      const { latitude, longitude } = geo.coords;

        firebase.database().ref(`/users/${currentUser.uid}/location/${uid}`)
          .set({
            lat: latitude,
            lng: longitude,
          })
          .then((dispatch) => {
            console.log(location);
            dispatch({type: MAP_FOCUS_ON_USER, payload: location});
          });
      });
  });

  // update user's position
  Actions.mapActivities();
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};


export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};


export const logInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        logInSuccess(dispatch, user);
      })
      .catch((err) => {
        console.log('error');
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {

            // create a new position
            // console.log('create new user triggered');
            createPlayerLocation();
            logInSuccess(dispatch, user);
          })

          .catch(() => logInFail(dispatch));
      });
  };
};
