import React from "react";

//REDUX CONNECTION
import { connect } from "react-redux";
//REDUX ACTIONS
import {
  templateQuestion,
  templateAnswers,
  newAnswer,
  chooseAnswer,
  saveQuiz,
} from "../../../redux/actions";

const CreateQuizQuestions = ({
  handlerSetBackStep,
  handlerSetNextStep,
  history,
  dispatch,
  step,
  quiz,
}) => {
  const handlerQuestion = (e) => {
    dispatch(templateQuestion(e.target.value));
  };

  const handlerNewAnswer = () => {
    dispatch(newAnswer());
  };

  const handlerSaveQuiz = () => {
    dispatch(saveQuiz(quiz));
    history.push("/quizes");
  };

  const question = quiz?.quizQuestions[step - 2]?.question || null;
  const answers = quiz?.quizQuestions[step - 2]?.answers || [];

  return (
    <div className="question">
      <textarea
        className="question__question"
        placeholder='Your question? For example: In which film does Humphrey Bogart say the famous line, "Here&#039;s looking at you, kid"?'
        value={question ? question : ""}
        onChange={handlerQuestion}
      ></textarea>
      <div className="question__answers">
        {answers.map((item, index) => {
          return (
            <div className="question__answer" key={index}>
              <div
                className={
                  "question__answer--icon " + (item.answer ? "checked" : "")
                }
                onClick={() => {
                  dispatch(chooseAnswer(index));
                }}
              >
                <i class={"fas fa-check" + (item.answer ? "-double" : "")}></i>
              </div>
              <input
                type="text"
                placeholder="Enter your answer as you wish"
                className="question__answer--input"
                onChange={(e) => {
                  dispatch(templateAnswers(e.target.value, index));
                }}
                value={item.value}
              />
            </div>
          );
        })}
        {answers.length < 5 && (
          <div className="question__add" onClick={handlerNewAnswer}>
            <i className="fas fa-plus-square"></i>
          </div>
        )}
      </div>
      <div className="create__buttons">
        <div className="create__buttons--back" onClick={handlerSetBackStep}>
          <i className="fas fa-arrow-alt-circle-left"></i>Back
        </div>
        <div className="create__buttons--next" onClick={handlerSetNextStep}>
          Next<i className="fas fa-arrow-alt-circle-right"></i>
          {question !== null && answers.length > 0 && answers[0].value !== "" && (
            <div className="create__save" onClick={handlerSaveQuiz}>
              <i className="fas fa-save"></i>
              <p>Save</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.create.step,
    quiz: state.create.quiz,
  };
};

export default connect(mapStateToProps)(CreateQuizQuestions);
