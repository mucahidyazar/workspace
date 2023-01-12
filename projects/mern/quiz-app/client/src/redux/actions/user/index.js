import axios from "../../../services/axios";
import {
  UPDATE_USER,
  CLEAR_ERRORS,
  GET_USERS,
  GET_USER_QUIZES,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  GET_USER,
} from "../../types";

//NEW
export const getUser = (user) => ({
  type: GET_USER,
  user,
});

export const addAvatar = (data) => {
  return async (dispatch) => {
    try {
      await axios.post("user/upload-avatar", data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const getUsers = () => {
  return async (dispatch) => {
    const users = await axios.get("user/me");
    dispatch({
      type: GET_USERS,
      users: users.data,
    });
  };
};

export const getUserQuizes = async (dispatch) => {
  try {
    const userQuizes = await axios.get("quiz/me");
    console.log(userQuizes.data);
    dispatch({
      type: GET_USER_QUIZES,
      quizes: userQuizes.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const login = (formData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("user/login", formData);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const register = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("user", data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.message,
      });
    }
  };
};

export const userUpdate = (updatedUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch("/user/me", updatedUser);
      dispatch({
        type: UPDATE_USER,
        user: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
