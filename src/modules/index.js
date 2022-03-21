import { combineReducers } from 'redux';
import auth from './auth';
import home from './home';
import entry from './entry';
import journal from './journal';
import statistics from './statistics';
import charge from './charge';
import term from './term';
import error from './error';
const rootReducer = combineReducers({
	home,
	auth,
	entry,
	journal,
	statistics,
	charge,
	term,
	error,
});

export default rootReducer;
