import axios from "../../../services/axios";
import {
  ADD_INFORMATION,
  SET_STEP,
  TEMPLATE_QUESTION,
  TEMPLATE_ANSWERS,
  NEW_ANSWER,
  CHOOSE_ANSWER,
  SAVE_QUIZ,
  GET_QUIZ,
  ADD_IMAGE,
  CLEAR_ERROR,
  SEND_ERROR,
  SHOW_ERROR,
} from "../../types";

export const addImage = (data, photoType) => {
  return async (dispatch) => {
    const datas = await axios.post("/upload-image", data, photoType, {});
    dispatch({
      type: ADD_IMAGE,
      imageData: datas.data,
    });
  };
};

export const clearError = (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

// export const addNewAnswer = () => ({
//   type: ACTION_ADD_NEW_ANSWER,
// });

export const addInformation = (value) => ({
  type: ADD_INFORMATION,
  value,
});

export const setStep = (value) => ({
  type: SET_STEP,
  value,
});

export const showError = (error) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ERROR,
      error,
    });
    setTimeout(() => {
      clearError(dispatch);
    }, 3000);
  };
};

export const templateQuestion = (value) => ({
  type: TEMPLATE_QUESTION,
  value,
});

export const templateAnswers = (value, index) => ({
  type: TEMPLATE_ANSWERS,
  value,
  index,
});

export const newAnswer = () => ({
  type: NEW_ANSWER,
});

export const saveQuiz = (quiz) => {
  return async (dispatch) => {
    try {
      const data = {
        quizImage: quiz.avatar,
        quizTitle: quiz.quizTitle,
        quizDescription: quiz.quizDescription,
        quizCategory: quiz.quizCategory,
        quizType: quiz.quizType,
        quizDifficulty: quiz.quizDifficulty,
        quizQuestions: quiz.quizQuestions,
      };
      await axios.post("/quiz", data);

      dispatch({
        type: SAVE_QUIZ,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const chooseAnswer = (index) => ({
  type: CHOOSE_ANSWER,
  index,
});

export const getQuiz = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/quiz/${id}`);
    dispatch({
      type: GET_QUIZ,
      quiz: response.data,
    });
  };
};

// export const addQuizQuestion = (question, answers, correct) => {
//   (dispatch) => {
//     dispatch({
//       type: ACTION_ADD_QUIZ_QUESTION,
//       question,
//       answers,
//       correct,
//     });
//     clearValues();
//   };
// };

// export const changeCreateQuizCategory = (value) => ({
//   type: ACTION_CHANGE_CREATE_QUIZ_CATEGORY,
//   value,
// });

// export const changeCreateQuizDescription = (value) => ({
//   type: ACTION_CHANGE_CREATE_QUIZ_DESCRIPTION,
//   value,
// });

// export const changeCreateQuizDifficulty = (value) => ({
//   type: ACTION_CHANGE_CREATE_QUIZ_DIFFICULTY,
//   value,
// });

// export const changeCreateQuizTitle = (value) => ({
//   type: ACTION_CHANGE_CREATE_QUIZ_TITLE,
//   value,
// });

// export const changeCreateQuizType = (value) => ({
//   type: ACTION_CHANGE_CREATE_QUIZ_TYPE,
//   value,
// });

export const sendError = (error) => {
  return (dispatch) => {
    dispatch({
      type: SEND_ERROR,
      error,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
      });
    }, 3000);
  };
};

// export const clearValues = () => ({
//   type: ACTION_CLEAR_VALUES,
// });

// export const getImageInformation = (imageData) => ({
//   type: GET_IMAGE,
//   imageData,
// });

// export const previousQuestion = () => {
//   (dispatch) => {
//     if (state.questions.length > 0) {
//       const prevQuestionObject = state.questions[state.questions.length - 1];
//       const prevQuestion = prevQuestionObject.question;
//       const prevAnswersArray = prevQuestionObject.incorrect_answers;
//       const prevCorrectAnswer = prevQuestionObject.correct_answer;
//       const prevCorrect = prevQuestionObject.correct;
//       prevAnswersArray.splice(prevCorrect, 0, prevCorrectAnswer);

//       dispatch({
//         type: ACTION_PREVIOUS_QUESTION,
//         question: prevQuestion,
//         answers: prevAnswersArray,
//         correct: prevCorrect,
//       });
//     } else if (state.questions.length <= 0) {
//       dispatch({
//         type: ACTION_PREVIOUS_QUIZ_INFORMATION,
//         quiz_title: state.quiz_title,
//         quiz_description: state.quiz_description,
//         quiz_category: state.quiz_category,
//         quiz_type: state.quiz_type,
//         quiz_difficulty: state.quiz_difficulty,
//       });
//     }
//   };
// };

// export const removeAndAddImage = async (data) => {
//   axios.put("/quiz/delete-image", data, {});
// };

// export const saveQuiz = (
//   imageInformation,
//   quiz_title,
//   quiz_description,
//   quiz_category,
//   quiz_type,
//   quiz_difficulty
// ) => {
//   addQuizQuestion(state.question, state.answers, state.correct_answer);

//   dispatch({
//     type: ACTION_SAVE_QUIZ,
//     imageInformation,
//     quiz_title,
//     quiz_description,
//     quiz_category,
//     quiz_type,
//     quiz_difficulty,
//   });
// };

// export const saveScores = (trueVal, passVal, falseVal) => {
//   const data = {
//     totalSolved: trueVal + passVal + falseVal,
//     totalTrue: trueVal,
//     totalPass: passVal,
//     totalFalse: falseVal,
//   };
//   axios.put("/users", data);
// };

// export const saveScoreToQuiz = (id, trueVal, passVal, falseVal) => {
//   const score = {
//     totalTrue: trueVal,
//     totalPass: passVal,
//     totalFalse: falseVal,
//     totalPoint: trueVal * 10,
//   };
//   axios.put(`/quiz/${id}`, score);
// };

// export const setAnswer = (value, index) => ({
//   type: ACTION_SET_ANSWER,
//   value,
//   index,
// });

// const setClearCreateQuiz = () => ({
//   type: ACTION_SET_CLEAR_CREATE_QUIZ,
// });

// const setQuestion = (question) => ({
//   type: ACTION_SET_QUESTION,
//   question,
// });

// const trueOrFalseAction = (index) => ({
//   type: ACTION_TRUE_OR_FALSE_ACTION,
//   payload: index,
// });
