import { FETCH_USER } from '../actions/types';

const initialState = {
  user: {
    id: 1,
    token: 721028102
  }
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_USER:
    return {
      ...state
    };

    default:
    return state;
  };
};

export default userReducer;
