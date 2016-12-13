import {
  COLLECT_LOCAL_PLAYERS,
} from 'sharks_in_the_water/src/controllers/actions/types';

const INIT_STATE = {
  // players: {},
};

const LocalPlayers = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  let result;

  switch (type) {
    case COLLECT_LOCAL_PLAYERS:
      result = payload;
      break;
    default:
      result = state;
  }

  return result;
};

export { LocalPlayers };
