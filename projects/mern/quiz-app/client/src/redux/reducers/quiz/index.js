import moment from "moment";
import {
  DELETE_QUIZ,
  GET_QUIZES,
  GET_QUIZ_SCOREBOARD,
  SEARCH_QUIZES,
  SET_DIFFICULTY,
  SORT_QUIZES,
} from "../../types";

const initialState = {
  quizes: [],
  filteredQuizes: null,
  countdown: 60,
  disabledTime: false,
  disabledTwoOff: false,
  quizesLoading: true,
  sortedQuizes: null,
  specialQuizScoreboard: null,
  validQuizes: null,
};

export const quiz = (state = initialState, action) => {
  let quizesData;

  switch (action.type) {
    case GET_QUIZES:
      return {
        ...state,
        quizes: action.quizes,
      };

    case DELETE_QUIZ:
      return {
        ...state,
        quizes: state.quizes.filter((quiz) => quiz._id === action.id),
      };

    case GET_QUIZ_SCOREBOARD:
      return {
        ...state,
        specialQuizScoreboard: action.quizScoreboard,
      };

    case SEARCH_QUIZES:
      quizesData = state.filteredQuizes ? state.filteredQuizes : state.quizes;
      if (action.value === "") {
        quizesData = state.quizes;
      } else {
        quizesData = state.quizes.filter(
          (quiz) =>
            (quiz.quizTitle.toLowerCase().includes(action.value) && quiz) ||
            (quiz.quizDescription.toLowerCase().includes(action.value) &&
              quiz) ||
            (quiz.quizCategory.toLowerCase().includes(action.value) && quiz) ||
            (quiz.quizType.toLowerCase().includes(action.value) && quiz) ||
            (quiz.quizDifficulty.toLowerCase().includes(action.value) && quiz)
        );
      }
      return {
        ...state,
        filteredQuizes: quizesData,
      };

    case SET_DIFFICULTY:
      if (action.difficult === "all") {
        quizesData = state.quizes;
      } else {
        quizesData = state.quizes.filter(
          (quiz) => quiz.quizDifficulty === action.difficult
        );
      }
      return {
        ...state,
        filteredQuizes: quizesData,
      };

    case SORT_QUIZES:
      quizesData = state.filteredQuizes ? state.filteredQuizes : state.quizes;
      if (action.by === "date") {
        quizesData = state.quizes.sort((a, b) => {
          if (
            moment(a.quizDate).utc().valueOf() <
            moment(b.quizDate).utc().valueOf()
          ) {
            return -1;
          } else if (
            moment(a.quizDate).utc().valueOf() >
            moment(b.quizDate).utc().valueOf()
          ) {
            return -1;
          } else return 0;
        });
      } else if (action.by === "question") {
        quizesData = state.quizes.sort((a, b) => {
          if (a.quizQuestions.length < b.quizQuestions.length) {
            return -1;
          }
          if (a.quizQuestions.length > b.quizQuestions.length) {
            return -1;
          }
          return 0;
        });
      } else if (action.by === "title") {
        quizesData = state.quizes.sort((a, b) => {
          let titleA = a.quizTitle.toLowerCase();
          let titleB = b.quizTitle.toLowerCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return -1;
          }
          return 0;
        });
      }
      return {
        ...state,
        filteredQuizes: quizesData,
      };
    default:
      return state;
  }
};
