
import { TEXT_CHANGED } from 'Demo_Flux/src/flux/actions/types';

export const textChanged = (newText) => {
  return {
    type: TEXT_CHANGED,
    payload: newText,
  };
};
