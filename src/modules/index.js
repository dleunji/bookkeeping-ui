import { combineReducers } from 'redux';
import auth from './auth';
import home from './home';
import entry from './entry';
import journal from './journal';
import statistics from './statistics';
const rootReducer = combineReducers({
	home,
	auth,
	entry,
	journal,
  statistics
});

export default rootReducer;
