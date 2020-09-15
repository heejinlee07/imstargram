import { combineReducers } from 'redux';
// import PostReducer from './PostReducer';
import InfiniteScrollReducer from './InfiniteScrollReducer';

const rootReducer = combineReducers({
  infiniteScroll: InfiniteScrollReducer,
});

export default rootReducer;
