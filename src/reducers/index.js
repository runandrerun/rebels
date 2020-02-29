import { combineReducers } from 'redux';
import shopReducer from './shopReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  shopState: shopReducer,
  userState: userReducer
});

export default rootReducer;
