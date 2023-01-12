import React, { useState } from "react";
import { connect } from "react-redux";
import defaultUser from "../../public/png/default-user.png";
import quizImage from "../../public/img/quiz-time.jpg";

//REDUX ACTIONS
import { getQuizScoreboard, searchQuizes } from "../../redux/actions";

const Leaderboard = ({
  dispatch,
  filteredQuizes,
  quizes,
  specialQuizScoreboard,
  users,
}) => {
  const onSearchQuizes = (e) => {
    dispatch(searchQuizes(e.target.value));
    if (e.target.value === "") {
      setScoreboardHeader("Leaderboard");
    }
  };

  const [scoreboardHeader, setScoreboardHeader] = useState("Leaderboard");
  const onGetQuizScoreboard = (quiz) => {
    dispatch(getQuizScoreboard(quiz.quizScoreboard));
    setScoreboardHeader(quiz.quizTitle);
  };

  const quizSB = specialQuizScoreboard
    ? specialQuizScoreboard.map((score, index) => (
        <div className="leaderboard__board" key={index}>
          <div className="leaderboard__nav--rank">{index + 1}</div>
          <div className="leaderboard__nav--avatar">
            <div className="leaderboard__nav--image">
              <img src={defaultUser} alt="default user" />
            </div>
          </div>
          <div className="leaderboard__nav--username">{score.username}</div>
          <div className="leaderboard__nav--true">{score.totalTrue}</div>
          <div className="leaderboard__nav--pass">{score.totalPass}</div>
          <div className="leaderboard__nav--false">{score.totalFalse}</div>
          <div className="leaderboard__nav--total">{score.totalPoint}</div>
        </div>
      ))
    : null;

  return (
    <section className="leaderboard">
      <div className="leaderboard__header">
        <div className="leaderboard__header--search">
          <input
            type="text"
            placeholder="Search a quiz"
            onChange={onSearchQuizes}
          />

          <div className="foundeded__quizes">
            {filteredQuizes
              ? filteredQuizes.map(
                  (quiz, index) =>
                    index < 5 && (
                      <div
                        className="foundeded__quizes--item"
                        onClick={() => onGetQuizScoreboard(quiz)}
                      >
                        <img
                          src={quizImage}
                          className={`foundeded__quizes--image foundeded__quizes--easy`}
                          alt=""
                        />
                        <div className="foundeded__quizes--title">
                          {quiz.quizTitle}
                        </div>
                      </div>
                    )
                )
              : null}
          </div>
        </div>
      </div>
      <div className="leaderboard__title">{scoreboardHeader}</div>

      <div className="leaderboard__nav">
        <div className="leaderboard__nav--rank">#</div>
        <div className="leaderboard__nav--avatar">Avatar</div>
        <div className="leaderboard__nav--username">Username</div>
        {!quizSB ? (
          <div className="leaderboard__nav--created">Created</div>
        ) : null}
        {!quizSB ? (
          <div className="leaderboard__nav--completed">Completed</div>
        ) : null}
        {!quizSB ? (
          <div className="leaderboard__nav--solved">Solved</div>
        ) : null}
        <div className="leaderboard__nav--true">True</div>
        <div className="leaderboard__nav--pass">Pass</div>
        <div className="leaderboard__nav--false">False</div>
        <div className="leaderboard__nav--total">Total</div>
      </div>
      {quizSB !== null
        ? quizSB
        : users
        ? users.map((user, index) => (
            <div className="leaderboard__board" key={index}>
              <div className="leaderboard__nav--rank">{index + 1}</div>
              <div className="leaderboard__nav--avatar">
                <div className="leaderboard__nav--image">
                  {user?.profilePhoto?.filename ? (
                    <img
                      src={`./img/${user.profilePhoto.filename}`}
                      alt="default user"
                    />
                  ) : (
                    <img src={`./img/profile.jpg`} alt="default user" />
                  )}
                </div>
              </div>
              <div className="leaderboard__nav--username">{user.username}</div>
              <div className="leaderboard__nav--created">{user.totalQuiz}</div>
              <div className="leaderboard__nav--completed">
                {user.totalCompleted}
              </div>
              <div className="leaderboard__nav--solved">{user.totalSolved}</div>
              <div className="leaderboard__nav--true">{user.totalTrue}</div>
              <div className="leaderboard__nav--pass">{user.totalPass}</div>
              <div className="leaderboard__nav--false">{user.totalFalse}</div>
              <div className="leaderboard__nav--total">{user.totalPoint}</div>
            </div>
          ))
        : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredQuizes: state.quiz.filteredQuizes,
    quizes: state.quiz.quizes,
    specialQuizScoreboard: state.quiz.specialQuizScoreboard,
    users: state.user.users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
