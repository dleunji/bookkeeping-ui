import { combineReducers } from 'redux';
import auth from './auth';
import home from './home';
import entry from './entry';
import journal from './journal';
import statistics from './statistics';
import charge from './charge';
const rootReducer = combineReducers({
	home,
	auth,
	entry,
	journal,
  statistics,
  charge
});

export default rootReducer;
