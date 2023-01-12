/* eslint-disable prettier/prettier */
import {
  ADD_USER,
} from '../types';
import users from '../../data/users';
import messages from '../../data/messages';

const initialState = {
  users,
  messages,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    default:
      return state;
  }
}

export default authReducer;