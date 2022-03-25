import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_USER_LIST = 'auth/INITIALIZE_USER_LIST';
const INITIALIZE_NEW_USER = 'auth/INITIALIZE_NEW_USER';
const CHANGE_USER = 'auth/CHANGE_USER';
const DELETE_USER = 'auth/DELETE_USER';
const CREATE_USER = 'auth/CREATE_USER';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const CHANGE_USER_INFO = 'auth/CHANGE_USER_INFO';

export const initializeUserList = createAction(INITIALIZE_USER_LIST, users => users);
export const initializeNewUser = createAction(INITIALIZE_NEW_USER);
export const changeUser = createAction(CHANGE_USER, user => user);
export const deleteUser = createAction(DELETE_USER, userId => userId);
export const createUser = createAction(CREATE_USER, user => user);
export const changeField = createAction(CHANGE_FIELD, ({ name, value }) => ({
  name,
  value,
}));
export const changeUserInfo = createAction(
  CHANGE_USER_INFO,
  ({ pocketBalance, accBalance, unpaidBill }) => ({ pocketBalance, accBalance, unpaidBill })
);

const initialState = {
  userList: [],
  currentUser: null,
  newUser: {
    // SQL INSERT 이후 확정
    userFirstName: '',
    userLastName: '',
    userId: null,
  },
};
const auth = handleActions(
  {
    [INITIALIZE_USER_LIST]: (state, { payload: users }) => ({
      ...state,
      userList: users,
    }),
    [INITIALIZE_NEW_USER]: state => ({
      ...state,
      newUser: {
        ...state.newUser,
        userId: null,
        userFirstName: '',
        userLastName: '',
      },
    }),
    [CHANGE_USER]: (state, { payload: user }) => ({
      ...state,
      currentUser: user,
    }),
    [DELETE_USER]: (state, { payload: userId }) => ({
      ...state,
      userList: state.userList.filter(user => user.userId !== userId),
    }),
    [CREATE_USER]: (state, { payload: user }) => ({
      ...state,
      userList: [...state.userList, user],
    }),
    [CHANGE_FIELD]: (state, { payload: { name, value } }) => ({
      ...state,
      newUser: { ...state.newUser, [name]: value },
    }),
    [CHANGE_USER_INFO]: (state, { payload: { pocketBalance, accBalance, unpaidBill } }) => ({
      ...state,
      currentUser: {
        ...state.currentUser,
        pocketBalance,
        accBalance,
        unpaidBill,
      },
    }),
  },
  initialState
);

export default auth;
