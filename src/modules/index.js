import { combineReducers } from 'redux';
// import PostReducer from './PostReducer';
import UsersReducer from './UsersReducer';
import PostsReducer from './PostsReducer';
import FollowinfoReducer from './FollowInfoReducer';
import InfiniteScrollReducer from './InfiniteScrollReducer';

const rootReducer = combineReducers({
  infiniteScroll: InfiniteScrollReducer,
  posts: PostsReducer,
  users: UsersReducer,
  follows: FollowinfoReducer,
});

export default rootReducer;
