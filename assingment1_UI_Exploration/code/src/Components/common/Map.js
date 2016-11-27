
import React from 'react';
import { Dimensions, MapView, StatusBar } from 'react-native';

// custom components
import { FixedWrapper } from 'UI_Exploration/src/Components/';

const { width, height } = Dimensions.get('window');

const styles = {
  mapArea: {
    height,
    width,
  },
};

const Map = (props) => {

//  const { followUser, goToMarker, markerCollection, onDragMap } = props;
// onFocus: function
// onBlur: function

  // let newRegion;
  // if (goToMarker.latitude !== null && goToMarker.longitude !== null) {
  //   newRegion = goToMarker;
  // } else {
  //   newRegion = {};
  // }

  return (
    <FixedWrapper>
      <MapView
        style={ styles.mapArea }
        followUserLocation={ true }
        showsUserLocation={ true }
      />
    </FixedWrapper>
  );
};

export { Map };
