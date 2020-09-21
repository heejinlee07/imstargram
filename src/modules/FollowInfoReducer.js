export const FOLLOW_SET_DATA = 'FOLLOW_SET_DATA';
export const ADD_FOLLOWS = 'ADD_FOLLOWS';
export const DELETE_FOLLOWS = 'DELETE_FOLLOWS';
export const UPDATE_FOLLOWS = 'UPDATE_FOLLOWS';

/**
 * async operation
 */
export const FOLLOWS = 'FOLLOWS';
export const FOLLOWS_LOADING = `${FOLLOWS}_LOADING`;
export const FOLLOWS_SUCCESS = `${FOLLOWS}_SUCCESS`;
export const FOLLOWS_FAILURE = `${FOLLOWS}_FAILURE`;

const initialState = {
  status: 'idle',
  follows: [],
  error: null,
};

export default function FollowinfoReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOWS_LOADING:
      return { ...state, status: 'loading' };
    case FOLLOWS_FAILURE:
      return { ...state, status: 'error', error: action.error };
    case FOLLOWS_SUCCESS:
      return { ...state, follows: action.payload, status: 'completed' };
    case ADD_FOLLOWS:
      return { ...state, follows: action.payload, status: 'completed' };
    case DELETE_FOLLOWS:
      return {
        ...state,
        follows: state.follows.filter((item) => item.id !== action.payload),
      };
    case UPDATE_FOLLOWS:
      return { ...state, follows: state.follows.concat(action.payload) };
    default:
      return state;
  }
}
