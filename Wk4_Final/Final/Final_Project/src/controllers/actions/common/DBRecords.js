import firebase from 'firebase';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

import {

  PLAYERS_IN_AREA,
  USER_STATS,
  COLLECT_LOCAL_PLAYERS,
} from 'sharks_in_the_water/src/controllers/actions/types';

// get all user bread crumbs
export const playersNearUser = () => {

  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((geo) => {

      const { latitude, longitude } = geo.coords;

      let latLngRange;
      // latitude and longitude ranges for markers
      const HI_LAT = (((latitude * 100) + 2) / 100);
      const LO_LAT = (((latitude * 100) - 2) / 100);

      const HI_LNG = (((longitude * 100) + 2) / 100);
      const LO_LNG = (((longitude * 100) - 2) / 100);

      firebase.database().ref('/users')
        .on('value', (players) => {

          //let location;
          let uid;
          for (var id in players.val()) {
            if (id != null) {
              //location = players.val()[id];
              uid = id;
            }
          }

          console.log(HI_LAT);
          console.log(LO_LAT);

          console.log(HI_LNG);
          console.log(LO_LNG);

          firebase.database().ref(`/users/${uid}/location`)
            .orderByChild('lat')
            .startAt(LO_LAT)
            .endAt(HI_LAT)
            .on('value', (latFilter) => {
              console.log("Lat filter");
              console.log(latFilter.val());
              firebase.database().ref(`/users/${uid}/location`)
                .orderByChild('lng')
                .startAt(LO_LNG)
                .endAt(HI_LNG)
                .on('value', (lngFilter) => {

                  latLngRange = { ...latLngRange, ...lngFilter.val(), ...latFilter.val() };
                  dispatch({ type: PLAYERS_IN_AREA, payload: latLngRange });
                }); // FB lng
            }); // FB lat
        }); // FB users
    }); // geo
  }; // return
}; // players near by




export const getUserStats = () => {

  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`users/${currentUser.uid}/stats`)
      .on('value', (stats) => {
        console.log('db records');
        console.log(stats.val());
        dispatch({ type: USER_STATS, payload: stats.val() });
      });
  }
}



export const collectNearByPlayers = () => {

  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((geo) => {

      const { latitude, longitude } = geo.coords;

      let latLngRange;
      // latitude and longitude ranges for markers
      const HI_LAT = (((latitude * 100) + 2) / 100);
      const LO_LAT = (((latitude * 100) - 2) / 100);

      const HI_LNG = (((longitude * 100) + 2) / 100);
      const LO_LNG = (((longitude * 100) - 2) / 100);

      firebase.database().ref('/users')
        .on('value', (players) => {

          //let location;
          let uid;
          for (var id in players.val()) {
            if (id != null) {
              //location = players.val()[id];
              uid = id;
              console.log(uid);



          firebase.database().ref(`/users/${uid}/location`)
            .orderByChild('lat')
            .startAt(LO_LAT)
            .endAt(HI_LAT)
            .on('value', (latFilter) => {
              console.log("Lat filter");
              console.log(latFilter.val());
              firebase.database().ref(`/users/${uid}/location`)
                .orderByChild('lng')
                .startAt(LO_LNG)
                .endAt(HI_LNG)
                .on('value', (lngFilter) => {

                  latLngRange = {...latLngRange, ...lngFilter.val(), ...latFilter.val() };

                  let localPlayers = _.map(latLngRange, (val, uid) => {
                    return { ...val, uid };
                  });

                  console.log(localPlayers);
                  dispatch({ type: COLLECT_LOCAL_PLAYERS, payload: localPlayers });
                }); // FB lng
            }); // FB lat
          }
        }
      }); // FB users
    }); // geo
  }
}
