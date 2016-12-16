// type constants
import {
  PLAYERS_IN_AREA,
} from 'sharks_in_the_water/src/controllers/actions/types';

const INIT_STATE = {};

const DBPlayers = (state = INIT_STATE, action) => {
  let result;

  switch (action.type) {
    case PLAYERS_IN_AREA:
      result = action.payload;
      break;

    default:
      result = state;
  }

  return result;
};


export { DBPlayers };
