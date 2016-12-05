
import { TEXT_CHANGED } from 'Demo_Flux/src/flux/actions/types';

const INIT_STATE = { text: '' };

export default (state = INIT_STATE, action) => {
  let result;

  switch (action.type) {
    case TEXT_CHANGED:
      result = { ...state, text: action.payload };
      break;
    default:
      result = state;
  }

  return result;
};
