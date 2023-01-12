import React from "react";

//REDUX CONNECTION
import { connect } from "react-redux";
//REDUX ACTIONS
import { addInformation } from "../../../redux/actions";

const QuizInformation = ({ dispatch, quiz, handlerSetNextStep }) => {
  const handlerInput = (value) => {
    dispatch(addInformation(value));
  };

  const handlerImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    dispatch(addInformation({ avatar: data }));
  };

  return (
    <form className="information">
      <label htmlFor="file" className="information__image">
        <img
          src={quiz?.quizImage ? `./img/${quiz.quizImage.filename}` : ""}
          alt=""
        ></img>
        <i className="fas fa-image"></i>Upload an image
        <input
          id="file"
          type="file"
          className="form-control"
          name="file"
          onChange={handlerImage}
        />
      </label>

      <input
        type="text"
        name="quiztitle"
        placeholder="Quiz Title"
        className="information__title"
        value={quiz?.quizTitle && quiz.quizTitle}
        onChange={(e) => handlerInput({ quizTitle: e.target.value })}
      />
      <textarea
        type="text"
        name="quizdescription"
        placeholder="Quiz Desctiption"
        className="information__description"
        value={quiz?.quizDescription && quiz.quizDescription}
        onChange={(e) => handlerInput({ quizDescription: e.target.value })}
      ></textarea>
      <div className="information__informations">
        <select
          className="information__informations--category"
          value={quiz?.quizCategory && quiz.quizCategory}
          onChange={(e) => handlerInput({ quizCategory: e.target.value })}
        >
          <option value="general">General</option>
          <option value="books">Books</option>
          <option value="film">Film</option>
          <option value="music">Music</option>
          <option value="musical & theatres">Musical & Theatres</option>
        </select>
        <select
          className="information__informations--type"
          value={quiz?.quizType && quiz.quizType}
          onChange={(e) => handlerInput({ quizType: e.target.value })}
        >
          <option value="multiple">Multiple</option>
        </select>
        <select
          className="information__informations--difficulty"
          value={quiz?.quizDifficulty && quiz.quizDifficulty}
          onChange={(e) => handlerInput({ quizDifficulty: e.target.value })}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="create__buttons">
        <div className="create__buttons--next" onClick={handlerSetNextStep}>
          Next<i className="fas fa-arrow-alt-circle-right"></i>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(QuizInformation);
