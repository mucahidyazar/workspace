import React, { useState, useEffect } from "react";
import axios from "../../../services/axios.js";

//REDUX
import { connect } from "react-redux";
//REDUX ACTIONS
import {} from "../../../redux/actions";

const QuizPage = ({ dispatch, history, match }) => {
  const [quiz, setQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [yourAnswers, setYourAnswers] = useState();
  const [question, setQuestion] = useState(0);
  const [disableJokerOne, setDisableJokerOne] = useState(false);
  const [jokerAnswers, setJokerAnswers] = useState(null);
  const [disableJokerTwo, setDisableJokerTwo] = useState(false);
  const [countdown, setCountdown] = useState(60);

  // const handlerCalculate = (value) => {
  //   if (value === true) {
  //     setSummary({
  //       ...summary,
  //       correct: summary.correct++,
  //       empty: summary.empty--,
  //     });
  //   } else if (value === false) {
  //     setSummary({
  //       ...summary,
  //       incorrect: summary.incorrect++,
  //       empty: summary.empty--,
  //     });
  //   }
  // };

  // SOME SETTINGS
  // if (quiz) {
  //   history.push("/quizes");
  // }

  const handlerNext = () => {
    if (question === quiz.quizQuestions.length - 1) {
      history.push({
        pathname: `/result/${match.params.id}`,
        state: {
          quiz,
          yourAnswers,
          quizAnswers,
        },
      });
    }

    setSelectedAnswer(null);
    setJokerAnswers(null);
    setQuestion((prev) => prev + 1);
  };

  // PUSH RESULT PAGE
  if (countdown < 1) {
    history.push({
      pathname: `/result/${match.params.id}`,
      state: {
        quiz,
        yourAnswers,
        quizAnswers,
      },
    });
  }

  const handlerJokerOne = () => {
    const que = quiz.quizQuestions[question];
    const corAnswer = que.answers.filter((answer) => answer.answer === true);
    const incorAnswers = que.answers.filter(
      (answer) => answer.answer === false
    );
    const choAnswer = incorAnswers.splice(
      Math.round(Math.random() * 10) - 7,
      1
    );
    const newAnswers = [...choAnswer, ...corAnswer];
    setJokerAnswers(newAnswers);
    setDisableJokerOne(true);
  };

  const handlerJokerTwo = () => {
    setCountdown((prev) => prev + 15);
    setDisableJokerTwo(true);
  };

  // // NEXT QUESTION
  // const onClickNext = () => {
  //   if (!answers[question]) {
  //     setAnswers([...answers, "PASS"]);
  //   }
  //   if (question > quiz.length - 2) {
  //     props.history.push({
  //       pathname: `/result/${props.match.params.id}`,
  //       state: {
  //         answers,
  //         correctAnswers,
  //         id: quizes[props.match.params.id - 1]._id,
  //       },
  //     });
  //   } else {
  //     setQuestion(question + 1);
  //     setCountdown(countdown + 15);
  //     setChosenAnswer([]);
  //   }
  // };

  useEffect(() => {
    if (quiz?.quizQuestions.length) {
      setYourAnswers(new Array(quiz?.quizQuestions?.length));
    }
  }, [quiz]);

  useEffect(() => {
    const getQuiz = async () => {
      return await axios.get(`/quiz/${match.params.id}`);
    };
    getQuiz().then((response) => {
      setQuiz(response.data);
      setQuizAnswers(
        response.data.quizQuestions.map((item, index) => ({
          questionIndex: index,
          answerIndex: item.answers.findIndex(
            (answer) => answer.answer === true
          ),
        }))
      );
    });
  }, [match]);

  useEffect(() => {
    setInterval(() => {
      setCountdown((prevSetCountDown) => prevSetCountDown - 1);
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  const answerSection = () => {
    return (jokerAnswers || quiz.quizQuestions[question].answers).map(
      (answer, index) => {
        return (
          <div
            className={
              "section__answers " + (selectedAnswer === index ? "chosen" : "")
            }
            key={index}
            onClick={(e) => {
              setSelectedAnswer(index);
              setYourAnswers((prev) => {
                const data = [...prev];
                data[question] = index;
                prev = data;
                return prev;
              });
            }}
          >
            {answer.value}
          </div>
        );
      }
    );
  };

  return quiz && yourAnswers ? (
    <div className="section__quizpage">
      <div className="section__information">
        <div className="section__information-countdown">{countdown}</div>
      </div>
      <div className="section__question">
        {quiz.quizQuestions[question].question}
      </div>
      <div className="section__answers">{answerSection()}</div>
      <div className="section__buttons">
        <div className="jokers">
          <button
            className={`jokers__half ${disableJokerOne ? "disabled" : ""}`}
            disabled={disableJokerOne}
            onClick={handlerJokerOne}
          >
            <i className="fas fa-hands-helping"></i> 2 OUT
          </button>
          <button
            className={`jokers__time ${disableJokerTwo ? "disabled" : ""}`}
            disabled={disableJokerTwo}
            onClick={handlerJokerTwo}
          >
            <i className="far fa-clock"></i> +15
          </button>
        </div>
        <div className="options">
          <div className="section__buttons-finish">
            <i className="fas fa-times-circle"></i> FINISH
          </div>
          <div className="section__buttons-next" onClick={handlerNext}>
            <i className="fas fa-arrow-circle-right"></i> NEXT
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

const mapStateToProps = (state) => ({
  quiz: state.quiz.selectedQuiz,
});

export default connect(mapStateToProps)(QuizPage);
