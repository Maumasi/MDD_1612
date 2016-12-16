import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { collectNearByPlayers, mapMove, findUser, playersNearUser, mapMarkerFocus, mapMarkerBlur, getUserStats } from 'sharks_in_the_water/src/controllers/actions/';

import { MapArea, GameButton } from 'sharks_in_the_water/src/views/components/';


const styles = {
  wrapper: {
    // position: 'relative',
  },

  statusBarBack: {
    height: 25,
    backgroundColor: 'rgba(197, 244, 249, 0.7)',
    flexGrow: 1,
  },
};
class MapScreen extends Component {

  state = { Markers: [], lat: 0, lng: 0, onUser: true };

  componentWillMount() {
    this.props.collectNearByPlayers();
    this.props.playersNearUser();
    this.props.getUserStats();

    navigator.geolocation.getCurrentPosition((geo) => {
      const { latitude, longitude } = geo.coords;
      this.setState({ lat: latitude, lng: longitude });
    });

    this.collectMapMarkers(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps : next set of props component will render
    //  this.props will still be the old props
    this.collectMapMarkers(nextProps);
  }

  // helper for data
  collectMapMarkers({ localPlayers }) {
    let markers;
    markers = _.map(localPlayers, (player) => {
      const resolveAssetSource = require('resolveAssetSource');

      console.log(player);
      const imgSrc = () => {
        let result;
        if(player.status == 'shark') {
          result = resolveAssetSource(require('sharks_in_the_water/src/views/resources/map_marker_shark_6x16.png'));
        } else {
          result = resolveAssetSource(require('sharks_in_the_water/src/views/resources/map_marker_fish_6x16.png'));
        }
        return result;
      }

      //this.setState({ Markers: markers });
      return {
        latitude: player.lat,
        longitude: player.lng,
        // title: player.title,
        // subtitle: player.message,
        image: imgSrc(),
        onFocus: () => {
          this.props.mapMarkerFocus(player);
        },
        onBlur: () => {
          this.props.mapMarkerBlur();
        },
      };
    });

    console.log(this.props);
    this.setState({ Markers: [...markers] });
    console.log(this.state);

  }


  navToLeaderBoard() {
    console.log("Leader board button pressed");
    console.log(this.props);
    Actions.leaderBoard();

  }


  findARegion() {
    let result;
    const { latitude, longitude } = this.props.mapChange.marker;
    const { lat, lng } = this.state;

    if (latitude !== null && longitude !== null) {
      result = this.props.mapChange.marker;
    } else {
      result = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      };
    } // if
    return result;
  } // findARegion

  mapDragFinish() {
    // this.setState({ onUser: false });
  }

  render() {

    return (
      <View style={ [styles.wrapper] }>
        <View>
          <MapArea
            followUser
            goToMarker={ this.findARegion() }
            markerCollection={ this.state.Markers }
            onDragMap={ this.mapDragFinish.bind(this) }
          />
          <View style={ styles.statusBarBack } />
          <GameButton status={ this.props.stats.userStats.status } onPress={ this.navToLeaderBoard.bind(this) } />
        </View>
      </View>
    );
  }
}




const mapStateToProps = (state) => {
  const { mapChange } = state;
  const { mapMarker } = state;
  const { stats } = state;
  const { localPlayers } = state;


  console.log(state.dbPlayers);
  console.log(localPlayers);

  let nearByPlayers = _.map(state.dbPlayers, (val, uid) => {
    return { ...val, uid };
  });

  console.log(nearByPlayers);

  return {
    nearByPlayers,
    localPlayers,
    mapChange,
    mapMarker,
    stats,
  };
};

MapScreen = connect(mapStateToProps, { collectNearByPlayers, getUserStats, mapMove, findUser, playersNearUser, mapMarkerFocus, mapMarkerBlur })(MapScreen);
export { MapScreen };
