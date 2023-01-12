/* eslint-disable prettier/prettier */
import {
  ADD_USER,
} from '../types';

export const addUser = user => ({
  type: ADD_USER,
  user,
});