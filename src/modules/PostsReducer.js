export const POST_SET_DATA = 'POST_SET_DATA';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

/**
 * async operation
 */
export const POSTS = 'POSTS';
export const POSTS_LOADING = `${POSTS}_LOADING`;
export const POSTS_SUCCESS = `${POSTS}_SUCCESS`;
export const POSTS_FAILURE = `${POSTS}_FAILURE`;

const initialState = {
  status: 'idle',
  posts: [],
  post: {},
  error: null,
};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_LOADING:
      return { ...state, status: 'loading' };
    case POSTS_FAILURE:
      return { ...state, status: 'error', error: action.error };
    case POSTS_SUCCESS:
      return { ...state, posts: action.payload, status: 'completed' };
    case POST_SET_DATA:
      return { ...state, post: action.payload, status: 'completed' };
    case ADD_POST:
      return { ...state, post: action.payload, status: 'completed' };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    case UPDATE_POST:
      return { ...state, posts: state.posts.concat(action.payload) };
    default:
      return state;
  }
}
