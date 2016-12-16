import { combineReducers } from 'redux';

// reducers
import { Auth } from 'sharks_in_the_water/src/controllers/reducers/common/Auth';
import { Map } from 'sharks_in_the_water/src/controllers/reducers/common/Map';
import { DBPlayers } from 'sharks_in_the_water/src/controllers/reducers/common/DBPlayers';
import { Stats } from 'sharks_in_the_water/src/controllers/reducers/common/Stats';
import { LocalPlayers } from 'sharks_in_the_water/src/controllers/reducers/common/LocalPlayers';

// combine all reducers
export default combineReducers({
  auth: Auth,
  mapChange: Map,
  dbPlayers: DBPlayers,
  stats: Stats,
  localPlayers: LocalPlayers,
});
