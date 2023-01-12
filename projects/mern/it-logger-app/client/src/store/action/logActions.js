import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./actionTypes";
import axios from "axios";

export const getLogs = () => {
  return async dispatch => {
    try {
      setLoading();

      const res = await axios.get("/api/logs");
      dispatch({
        type: GET_LOGS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
};

export const addLogs = log => {
  return async dispatch => {
    const config = {
      header: {
        "Content-type": "applciation/json"
      }
    };
    try {
      setLoading();

      const res = await axios.post("/api/logs", log, config);
      dispatch({
        type: ADD_LOG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response
      });
    }
  };
};

export const deleteLog = id => {
  return async dispatch => {
    try {
      setLoading();

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
      await axios.delete(`/api/logs/${id}`);
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
};

export const updateLog = log => {
  return async dispatch => {
    const config = {
      header: {
        "Content-type": "applciation/json"
      }
    };
    try {
      setLoading();

      const res = await axios.put(`/api/logs/${log.id}`, log, config);
      console.log(res.data);
      dispatch({
        type: UPDATE_LOG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response
      });
    }
  };
};

export const searchLogs = text => {
  return async dispatch => {
    try {
      setLoading();

      dispatch({
        type: SEARCH_LOGS,
        payload: text
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
};

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => ({
  type: SET_LOADING
});
