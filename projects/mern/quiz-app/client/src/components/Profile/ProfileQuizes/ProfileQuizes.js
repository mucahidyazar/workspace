import React from "react";

export default function ProfileQuizes({ userQuizes }) {
  return (
    <div className="profile-quizes">
      <div className="profile-quizes__title">Quizes</div>
      {userQuizes ? (
        <div className="profile-quizes__body">
          {userQuizes.map((userQuiz, index) => (
            <div key={index} className="profile-quizes__body--item">
              <div>{userQuiz.quizTitle}</div>
              <div>{userQuiz.quizCategory}</div>
              <div>{userQuiz.quizQuestions.length}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>There is no quiz</p>
      )}
    </div>
  );
}
