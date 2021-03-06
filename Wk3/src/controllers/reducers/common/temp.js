
// type constants
import { EMAIL_CHANGED } from 'sharks_in_the_water/src/controllers/actions/types';

const INIT_STATE = { email: '' };

export default (state = INIT_STATE, action) => {
  let result;

  switch (action.type) {
    case EMAIL_CHANGED:
      result = { ...state, email: action.payload };
      break;
    default:
      result = state;
  }

  return result;
};
