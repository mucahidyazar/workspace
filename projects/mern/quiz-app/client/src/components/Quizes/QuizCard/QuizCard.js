import React from "react";
import imgQuizTime from "../../../public/img/quiz-time.jpg";
import { Link } from "react-router-dom";

//REDUX
import { connect } from "react-redux";
//REDUX ACTIONS
import { deleteQuiz } from "../../../redux/actions";

const QuizCard = ({ quiz, user, dispatch }) => {
  return quiz ? (
    <div className={`quiz quiz--${quiz.quizDifficulty}`}>
      <div className="quiz__header">
        <div className="quiz__header--date">{quiz.quizDate}</div>
        <div className="quiz__header--question">
          {quiz.quizQuestions.length} Question
        </div>
        <div className="quiz__header--img">
          {quiz.quizImage ? (
            <img src={`./img/${quiz.quizImage}`} alt=""></img>
          ) : (
            <img src={imgQuizTime} alt="Quiz Time" />
          )}
          {user && user._id === quiz.quizAuthor ? (
            <div
              className="quiz__header--delete-button"
              onClick={() => dispatch(deleteQuiz(quiz._id))}
            >
              <i className="far fa-trash-alt"></i>
            </div>
          ) : null}
        </div>
      </div>

      {/*QUIZ BODY*/}
      <div className="quiz__body">
        <div className="body__header">
          <div className="body__header--title">{quiz.quizTitle}</div>
          <div className="body__header--description">
            {quiz.quizDescription}
          </div>
        </div>

        <div className="body__information">
          <div className="body__information--category">{quiz.quizCategory}</div>
          <div className="body__information--type">{quiz.quizType}</div>
          <div className="body__information--difficulty">
            {quiz.quizDifficulty}
          </div>
        </div>
      </div>

      <Link
        to={`/quizes/${quiz._id}`}
        className={`quiz__button quiz__button--${quiz.quizDifficulty}`}
      >
        Start
      </Link>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(QuizCard);
