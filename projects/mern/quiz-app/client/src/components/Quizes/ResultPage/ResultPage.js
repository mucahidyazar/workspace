import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { savePoint } from "../../../redux/actions";

function ResultPage({ dispatch, location, history }) {
  const quiz = location.state.quiz;
  const yourAnswers = location.state.yourAnswers;
  const quizAnswers = location.state.quizAnswers;

  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
    empty: 0,
  });

  const handleTrue = () => {
    yourAnswers.forEach((answer, index) => {
      if (quizAnswers[index].answerIndex === answer) {
        setResult({
          ...result,
          correct: result.correct++,
        });
      } else if (answer === "" || answer === undefined) {
        setResult({
          ...result,
          empty: result.empty++,
        });
      } else {
        setResult({
          ...result,
          incorrect: result.incorrect++,
        });
      }
    });
  };

  const calcWidth = (value) => {
    return (quizAnswers.length / value) * 100 + "%";
  };

  const handlerSavePoint = () => {
    dispatch(
      savePoint(quiz._id, result.correct, result.incorrect, result.empty)
    );
    history.push("/quizes");
  };

  const handleReturnHome = () => {
    history.push("/");
  };

  useEffect(() => {
    if (yourAnswers.length) {
      handleTrue();
    }
  });

  return (
    <div className="resultpage">
      <div className="resultpage-tfp">
        <div className="tfp__true" style={{ width: calcWidth(result.correct) }}>
          <div className="tfp__true--point">{result.correct}</div>
          <div className="tfp__true--type">TRUE</div>
        </div>
        <div className="tfp__pass" style={{ width: calcWidth(result.empty) }}>
          <div className="tfp__pass--point">{result.empty}</div>
          <div className="tfp__pass--type">PASS</div>
        </div>
        <div
          className="tfp__false"
          style={{ width: calcWidth(result.incorrect) }}
        >
          <div className="tfp__false--point">{result.incorrect}</div>
          <div className="tfp__false--type">FALSE</div>
        </div>
      </div>
      <div className="resultpage-total">
        <div className="tfp__point">
          {(result.correct * 100) / yourAnswers.length}
        </div>
      </div>
      <div className="resultpage__options">
        <Link to="/scoreboard" onClick={handlerSavePoint}>
          <i className="fas fa-thumbtack"></i>
          <span>Save Your Score</span>
        </Link>
        <Link to="/" onClick={handleReturnHome}>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
}

export default connect()(ResultPage);
