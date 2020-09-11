export const POSTS_SET_LOADING = 'POSTS_SET_LOADING';
export const POSTS_HAS_ERROR = 'POSTS_HAS_ERROR';
export const POSTS_SET_DATA = 'POSTS_SET_DATA';
export const POST_SET_DATA = 'POST_SET_DATA';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

const initialState = {
  status: 'idle',
  posts: [],
  post: {},
  error: null,
};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_SET_LOADING:
      return { ...state, status: 'loading' };
    case POSTS_HAS_ERROR:
      return { ...state, status: 'error', error: action.payload };
    case POSTS_SET_DATA:
      return { ...state, posts: action.payload, status: 'completed' };
    case POST_SET_DATA:
      return { ...state, post: action.payload, status: 'completed' };
    case ADD_POST:
      return { ...state, post: action.payload, status: 'completed' };
    case DELETE_POST:
      return {
        ...state,
        posts: state.cart.filter((item) => item.id !== action.payload),
      };
    case UPDATE_POST:
      return { ...state, posts: state.cart.concat(action.payload) };
    default:
      return state;
  }
}
