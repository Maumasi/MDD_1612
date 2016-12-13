import { combineReducers } from 'redux';

// reducers
import { Auth } from 'sharks_in_the_water/src/controllers/reducers/common/Auth';
import { MenuState } from 'sharks_in_the_water/src/controllers/reducers/common/MenuState';
import { BreadCrumbForm } from 'sharks_in_the_water/src/controllers/reducers/common/BreadCrumbForm';
import { Map } from 'sharks_in_the_water/src/controllers/reducers/common/Map';
import { DBPlayers } from 'sharks_in_the_water/src/controllers/reducers/common/DBPlayers';
import { MapMarker } from 'sharks_in_the_water/src/controllers/reducers/common/MapMarker';
import { Stats } from 'sharks_in_the_water/src/controllers/reducers/common/Stats';
import { LocalPlayers } from 'sharks_in_the_water/src/controllers/reducers/common/LocalPlayers';

// combine all reducers
export default combineReducers({
  auth: Auth,
  menu: MenuState,
  breadCrumbs: BreadCrumbForm,
  mapChange: Map,
  mapMarker: MapMarker,
  dbPlayers: DBPlayers,
  stats: Stats,
  localPlayers: LocalPlayers,
});
