import axios from "axios";

import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "./actionTypes";

// Get techs from server
export const getTechs = () => {
  return async dispatch => {
    try {
      setLoading();

      const res = await axios.get("/api/techs");
      dispatch({
        type: GET_TECHS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.data
      });
    }
  };
};

export const addTech = tech => {
  return async dispatch => {
    const config = {
      header: {
        "Content-type": "applciation/json"
      }
    };
    try {
      setLoading();

      const res = await axios.post("/api/techs", tech, config);
      dispatch({
        type: ADD_TECH,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response
      });
    }
  };
};

export const deleteTech = id => {
  return async dispatch => {
    try {
      setLoading();
      dispatch({
        type: DELETE_TECH,
        payload: id
      });
      await axios.delete(`/api/techs/${id}`);
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response
      });
    }
  };
};

// Set loading to true
export const setLoading = () => ({
  type: SET_LOADING
});
