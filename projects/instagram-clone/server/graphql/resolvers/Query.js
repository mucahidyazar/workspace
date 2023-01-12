/* eslint-disable prettier/prettier */
import { User } from '../../model/User';

export default {
  users: () => User.find()
}