import { combineReducers } from 'redux';
import auth from './auth';
import home from './home';
import entry from './entry';
import journal from './journal';
import statistics from './statistics';
import charge from './charge';
import term from './term';
import error from './error';
import card from './card';
import complete from './complete';
import payAgree from './payAgree';
import pgCard from './pgCard';

const rootReducer = combineReducers({
	home,
	auth,
	entry,
	journal,
	statistics,
	charge,
	term,
	error,
	card,
	complete,
	payAgree,
	pgCard,
});

export default rootReducer;
