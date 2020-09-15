import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import UsersReducer from './UsersReducer';
import FollowinfoReducer from './FollowInfoReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  follows: FollowinfoReducer,
});

export default rootReducer;
