import {
  ADD_INFORMATION,
  ADD_IMAGE,
  CLEAR_ERROR,
  SET_STEP,
  TEMPLATE_QUESTION,
  TEMPLATE_ANSWERS,
  CHOOSE_ANSWER,
  SAVE_QUIZ,
  GET_QUIZ,
  SEND_ERROR,
  SHOW_ERROR,
  NEW_ANSWER,
} from "../../types";

const initialState = {
  step: 1,
  quiz: {
    avatar: null,
    quizCategory: "General",
    quizType: "multiple",
    quizDifficulty: "easy",
    quizTitle: null,
    quizDescription: null,
    quizQuestions: [
      {
        question: null,
        answers: [
          {
            value: "",
            answer: false,
          },
        ],
      },
    ],
  },
  quizError: null,
  selectedQuiz: null,
};

export const create = (state = initialState, action) => {
  const questions = [...state.quiz.quizQuestions];

  switch (action.type) {
    // case ACTION_ADD_NEW_ANSWER:
    //   return {
    //     ...state,
    //     answers: [...state.answers, ""],
    //   };

    case ADD_INFORMATION:
      console.log(action);
      return {
        ...state,
        quiz: {
          ...state.quiz,
          quizCategory: "general",
          quizType: "multiple",
          quizDifficulty: "easy",
          ...action.value,
        },
      };

    case ADD_IMAGE:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          quizImage: action.imageData,
        },
      };

    case CLEAR_ERROR:
      return {
        ...state,
        quizError: "",
      };

    case SET_STEP:
      if (state.step < 2) {
        return {
          ...state,
          step: state.step + action.value,
        };
      } else if (
        state.step > 1 &&
        (state.quiz.quizQuestions[state.step - 2].question === "" ||
          state.quiz.quizQuestions[state.step - 2].answers.some(
            (item) => item.value === ""
          ))
      ) {
        return {
          ...state,
          quizError: "Please do not let empty any area",
        };
      } else if (
        action.value === -1 &&
        state.quiz.quizQuestions[state.step - 2]
      ) {
        return {
          ...state,
          step: state.step + action.value,
        };
      } else if (
        action.value === 1 &&
        state.quiz.quizQuestions[state.step - 2].question !==
          state.quiz.quizQuestions[state.quiz.quizQuestions.length - 1].question
      ) {
        return {
          ...state,
          step: state.step + action.value,
        };
      } else {
        return {
          ...state,
          quiz: {
            ...state.quiz,
            quizQuestions: [
              ...state.quiz.quizQuestions,
              {
                question: null,
                answers: [
                  {
                    value: "",
                    answer: false,
                  },
                ],
              },
            ],
          },
          quizError: null,
          step: state.step + action.value,
        };
      }

    case SHOW_ERROR:
      return {
        ...state,
        quizError: action.error,
      };

    case TEMPLATE_QUESTION:
      questions[state.step - 2].question = action.value;
      return {
        ...state,
        quiz: {
          ...state.quiz,
          quizQuestions: questions,
        },
      };

    case TEMPLATE_ANSWERS:
      questions[state.step - 2].answers[action.index].value = action.value;
      return {
        ...state,
        quiz: {
          ...state.quiz,
          quizQuestions: questions,
        },
      };

    case NEW_ANSWER:
      questions[state.step - 2].answers.push({
        value: "",
        answer: false,
      });
      return {
        ...state,
        quiz: {
          ...state.quiz,
          quizQuestions: questions,
        },
      };

    case CHOOSE_ANSWER:
      questions[state.step - 2].answers[action.index].answer = !questions[
        state.step - 2
      ].answers[action.index].answer;
      return {
        ...state,
        quiz: {
          ...state.quiz,
          quizQuestions: questions,
        },
      };

    case SAVE_QUIZ:
      return {
        ...state,
        step: 1,
        quiz: {
          avatar: null,
          quizCategory: "General",
          quizType: "multiple",
          quizDifficulty: "easy",
          quizTitle: null,
          quizDescription: null,
          quizQuestions: [
            {
              question: null,
              answers: [
                {
                  value: "",
                  answer: false,
                },
              ],
            },
          ],
        },
        quizError: null,
      };

    case GET_QUIZ:
      return {
        ...state,
        selectedQuiz: action.quiz,
      };

    case SEND_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
