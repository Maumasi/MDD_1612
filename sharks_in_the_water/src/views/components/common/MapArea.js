
import React from 'react';
import { Dimensions, MapView, StatusBar } from 'react-native';

// custom components
import { ScreenWrapper } from 'sharks_in_the_water/src/views/components/';

const { width, height } = Dimensions.get('window');
const styles = {
  mapArea: {
    height,
    width,
  },
};

const MapArea = (props) => {

  const { followUser, goToMarker, markerCollection, onDragMap } = props;
// onFocus: function
// onBlur: function

  let newRegion;
  if (goToMarker.latitude !== null && goToMarker.longitude !== null) {
    newRegion = goToMarker;
  } else {
    newRegion = {};
  }

  return (
    <ScreenWrapper>
    <StatusBar
       barStyle="dark-content"
     />
      <MapView
        style={ styles.mapArea }
        followUserLocation={ followUser }
        showsUserLocation={ followUser }
        annotations={ markerCollection }
        region={ newRegion }
        onRegionChangeComplete={ onDragMap }
      />
    </ScreenWrapper>
  );
};

export { MapArea };
