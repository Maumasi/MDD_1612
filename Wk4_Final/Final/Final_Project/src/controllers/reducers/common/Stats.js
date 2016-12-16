import {
  USER_STATS,
} from 'sharks_in_the_water/src/controllers/actions/types';

const INIT_STATE = {
  userStats: {},
};

const Stats = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  let result;

  switch (type) {
    case USER_STATS:
      result = { ...state, userStats: { ...payload } };
      break;
    default:
      result = state;
  }

  return result;
};

export { Stats };
