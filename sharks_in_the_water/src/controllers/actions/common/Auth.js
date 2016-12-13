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


const generateStatus = () => {
  const { currentUser } = firebase.auth();

  let status = 'fish';
  if( (Math.floor(Math.ramdon() * 99) % 2) == 0) {
    status = 'shark';
  }

  firebase.database().ref(`users/${currentUser.uid}/stats`)
    .on('value', (stats) => {
      console.log(stats);
      if(stats) {
        firebase.database().ref(`users/${currentUser.uid}/stats`)
          .set({
            status: status
          });
      } else {
        firebase.database().ref(`users/${currentUser.uid}/stats`)
          .push({
            status: status
          });
      } // if
    });
}


const extractUserName = (email) => {
  const endUserNameChar = email.search('@');

  return email.slice(0, endUserNameChar);
}



const logInSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });

  const { currentUser } = firebase.auth();

  const randomStat = (Math.floor(Math.random() * (99 - 1) + 1) % 2 == 0);
  let status = 'fish';
  if(randomStat) {
    status = 'shark';
  }

  firebase.database().ref(`users/${currentUser.uid}/stats`)
    .set({
      status: status,
    })
    .then(() => {
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
                status: status,
                userName: extractUserName(currentUser.email),

              })
              .then((dispatch) => {
                console.log(location);
                dispatch({type: MAP_FOCUS_ON_USER, payload: location});
              });
          });
      });

      // update user's position
      Actions.mapActivities();
    });

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
