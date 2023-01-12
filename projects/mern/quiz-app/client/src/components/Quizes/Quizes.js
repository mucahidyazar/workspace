import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCurrentQuizes } from "../../services/quizServices";

//Components
import QuizCard from "./QuizCard/QuizCard";
import Spinner from "../Spinner/Spinner";
import InputSelect from "../Layout/InputSelect/InputSelect";

//REDUX ACTIONS
import {
  searchQuizes,
  setDifficulty,
  sortQuizes,
  getQuizes,
} from "../../redux/actions";

const Quizes = ({ dispatch, quizes, filteredQuizes }) => {
  useEffect(() => {
    if (dispatch) {
      getCurrentQuizes().then((res) => {
        dispatch(getQuizes(res.data));
      });
    }
  }, [dispatch]);

  const [activeNav, setActiveNav] = useState("all");
  const [sortVisibility, setSortVisibility] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const activeQuizNav = (difficulty = "all") => {
    dispatch(setDifficulty(difficulty));
    setActiveNav(difficulty);
  };

  const onSearchQuizes = (e) => {
    dispatch(searchQuizes(e.target.value.toLowerCase()));
  };

  const onSortYourQuizesBy = (type) => {
    dispatch(sortQuizes(type));
    setSelectedSort(type);
  };

  function activeNavFunction(value) {
    return activeNav === value ? "active-quiz-nav" : "";
  }

  if (!quizes.length) return <Spinner />;
  return (
    <div className="quizes">
      <div className="quizes__nav">
        <div className="quizes__nav--top">
          <div
            className={`all-quizes ${activeNavFunction("all")}`}
            onClick={() => activeQuizNav("all")}
          >
            All
          </div>
          <div
            className={`easy-quizes ${activeNavFunction("easy")}`}
            onClick={() => activeQuizNav("easy")}
          >
            Easy
          </div>
          <div
            className={`medium-quizes ${activeNavFunction("medium")}`}
            onClick={() => activeQuizNav("medium")}
          >
            Medium
          </div>
          <div
            className={`hard-quizes ${activeNavFunction("hard")}`}
            onClick={() => activeQuizNav("hard")}
          >
            Hard
          </div>
        </div>
        <div className="quizes__nav--bottom">
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={onSearchQuizes}
          />
          <div
            className="sort"
            onClick={() => setSortVisibility(!sortVisibility)}
          >
            <span className="sort__span">Sort by</span>
            <InputSelect
              selectedSort={selectedSort}
              sortVisibility={sortVisibility}
            >
              <div
                className="sort__options--item"
                onClick={() => onSortYourQuizesBy("date")}
              >
                Date
              </div>

              <div
                className="sort__options--item"
                onClick={() => onSortYourQuizesBy("title")}
              >
                Title
              </div>

              <div
                className="sort__options--item"
                onClick={() => onSortYourQuizesBy("question")}
              >
                Question
              </div>
            </InputSelect>
          </div>
        </div>
      </div>
      <section className="quizes__board">
        {(filteredQuizes ? filteredQuizes : quizes).map((quiz, index) => (
          <QuizCard key={index + 1} index={index + 1} quiz={quiz} />
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quizes: state.quiz.quizes,
  filteredQuizes: state.quiz.filteredQuizes,
});

export default connect(mapStateToProps)(Quizes);

//Category"Books Type:Multiple Difficult:Hard
