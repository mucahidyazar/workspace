import axios from "../../../services/axios";
import {
  GET_QUIZES,
  DELETE_QUIZ,
  SET_DIFFICULTY,
  GET_QUIZ_SCOREBOARD,
  SEARCH_QUIZES,
  SORT_QUIZES,
} from "../../types";

export const getQuizes = (quizes) => ({
  type: GET_QUIZES,
  quizes,
});

export const deleteQuiz = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/quiz/${id}`);
      dispatch({
        type: DELETE_QUIZ,
        id,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getQuizScoreboard = (quizScoreboard) => ({
  type: GET_QUIZ_SCOREBOARD,
  quizScoreboard,
});

export const searchQuizes = (value) => ({
  type: SEARCH_QUIZES,
  value,
});

export const setDifficulty = (difficult) => ({
  type: SET_DIFFICULTY,
  difficult,
});

export const sortQuizes = (by) => ({
  type: SORT_QUIZES,
  by,
});

export const savePoint = (quizId, correct, incorrect, empty) => {
  return async (dispatch) => {
    try {
      await axios.post("/scoreboard", {
        quizId,
        correct,
        incorrect,
        empty,
      });
      //return dispatch({});
    } catch (error) {
      console.log(error);
    }
  };
};
