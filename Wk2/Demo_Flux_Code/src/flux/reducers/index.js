import { combineReducers } from 'redux';
import TextAreaState from 'Demo_Flux/src/flux/reducers/common/TextAreaState';

export default combineReducers({
  textArea: TextAreaState,
});
