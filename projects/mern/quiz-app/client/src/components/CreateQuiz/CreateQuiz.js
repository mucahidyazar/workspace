import React from "react";
//Components
import CreateQuizInformation from "./CreateQuizInformation/CreateQuizInformation";
import CreateQuizQuestions from "./CreateQuizQuestions/CreateQuizQuestions";

//REDUX CONNECTION
import { connect } from "react-redux";
//REDUX ACTIONS
import { setStep, showError } from "../../redux/actions";

const CreateQuiz = ({
  history,
  dispatch,
  step,
  quiz,
  quizAnswers,
  quizError,
  templateQuestion,
  templateAnswers,
}) => {
  const handlerSetNextStep = () => {
    if (step === 1 && (!quiz.quizTitle || !quiz.quizDescription)) {
      dispatch(showError("Please fill the all requirements sections"));
    } else {
      dispatch(setStep(1));
    }
  };

  const handlerSetBackStep = () => {
    dispatch(setStep(-1));
  };

  return (
    <div className="create">
      {quizError && <div className="create__error">{quizError}</div>}

      {step < 2 && (
        <CreateQuizInformation
          quiz={quiz}
          handlerSetNextStep={handlerSetNextStep}
        />
      )}
      {step > 1 && (
        <CreateQuizQuestions
          handlerSetBackStep={handlerSetBackStep}
          handlerSetNextStep={handlerSetNextStep}
          history={history}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.create.step,
    quiz: state.create.quiz,
    quizAnswers: state.create.quizAnswers,
    quizError: state.create.quizError,
    templateQuestion: state.create.templateQuestion,
    templateAnswers: state.create.templateAnswers,
  };
};

export default connect(mapStateToProps)(CreateQuiz);
