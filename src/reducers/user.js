import {USER_AUTH, USER_GET} from '../actions/types';

const initialState = {
  username: '',
  userObject: {},
  accessToken: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        username: '',
        accessToken: ''
      };
    case USER_GET:
      return {
        ...state,
        username: action.username,
        userObject: action.userObject,
        accessToken: action.accessToken
      };
    default:
      return state;
  }
};

export default user;
