export const USER_SET_DATA = 'USER_SET_DATA';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

/**
 * async operation
 */
export const USERS = 'USERS';
export const USERS_LOADING = `${USERS}_LOADING`;
export const USERS_SUCCESS = `${USERS}_SUCCESS`;
export const USERS_FAILURE = `${USERS}_FAILURE`;

const initialState = {
  status: 'idle',
  users: [],
  user: {},
  error: null,
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOADING:
      return { ...state, status: 'loading' };
    case USERS_FAILURE:
      return { ...state, status: 'error', error: action.error };
    case USERS_SUCCESS:
      return { ...state, users: action.payload, status: 'completed' };
    case USER_SET_DATA:
      return { ...state, user: action.payload, status: 'completed' };
    case ADD_USER:
      return { ...state, user: action.payload, status: 'completed' };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case UPDATE_USER:
      return { ...state, users: state.users.concat(action.payload) };
    default:
      return state;
  }
}
