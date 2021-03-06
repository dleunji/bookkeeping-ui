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
import ordinary from './ordinary';
import registeredAccount from './registeredAccount';
import virtualAccount from './virtualAccount';
import pgVirtualAccount from './pgVirtualAccount';
import pgAccountTransfer from './pgAccountTransfer';
import accountTransfer from './accountTransfer';
import voucher from './voucher';
import phone from './phone';
import postPayment from './postPayment';
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
	ordinary,
	virtualAccount,
	pgVirtualAccount,
	accountTransfer,
	pgAccountTransfer,
	registeredAccount,
	voucher,
	phone,
	postPayment,
});

export default rootReducer;
