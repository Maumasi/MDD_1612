import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { mapMove, findUser, playersNearUser, mapMarkerFocus, mapMarkerBlur } from 'sharks_in_the_water/src/controllers/actions/';

import { MapArea, GameButton } from 'sharks_in_the_water/src/views/components/';


const styles = {
  wrapper: {
    // position: 'relative',
  },

  statusBarBack: {
    height: 25,
    // backgroundColor: 'rgba(26, 188, 156, 0.7)',
    backgroundColor: 'rgba(197, 244, 249, 0.7)',
    flexGrow: 1,
  },
};
class MapScreen extends Component {

  state = { Markers: [], lat: 0, lng: 0, onUser: true };

  componentWillMount() {
    this.props.playersNearUser();

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
  collectMapMarkers({ nearByPlayers }) {
    const markers = _.map(nearByPlayers, (player) => {
      const resolveAssetSource = require('resolveAssetSource');

      //this.setState({ Markers: markers });
      return {
        latitude: player.lat,
        longitude: player.lng,
        // title: player.title,
        // subtitle: player.message,
        // image: imgSrc,
        onFocus: () => {
          this.props.mapMarkerFocus(player);
        },
        onBlur: () => {
          this.props.mapMarkerBlur();
        },
      };
    });

    this.setState({ Markers: markers });
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

    console.log(this.props);

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
          <GameButton />
        </View>
      </View>
    );
  }
}




const mapStateToProps = (state) => {
  const { mapChange } = state;
  const { mapMarker } = state;

  const nearByPlayers = _.map(state.dbPlayers, (val, uid) => {
    return { ...val, uid };
  });

  return {
    nearByPlayers,
    mapChange,
    mapMarker,
  };
};

MapScreen = connect(mapStateToProps, { mapMove, findUser, playersNearUser, mapMarkerFocus, mapMarkerBlur })(MapScreen);
export { MapScreen };
