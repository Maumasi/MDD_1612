
import { Actions } from 'react-native-router-flux';

// type constants
import { MAP_MOVE, MAP_MARKER_FOCUS, MAP_MARKER_BLUR, MAP_FOCUS_ON_USER } from 'sharks_in_the_water/src/controllers/actions/types';

export const mapMove = (value) => {
  return {
    type: MAP_MOVE,
    payload: value,
  };
};

export const findUser = () => {
  return {
    type: MAP_FOCUS_ON_USER,
  };
};

export const mapMarkerFocus = (markerObj) => {
  return {
    type: MAP_MARKER_FOCUS,
    payload: markerObj,
  };
};

export const mapMarkerBlur = () => {
  return {
    type: MAP_MARKER_BLUR,
  };
};
