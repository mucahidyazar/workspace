import React from "react";

export default function ProfileStats({ user }) {
  return (
    <div className="stats">
      <div className="stats__title">Stats</div>
      <div className="stats__body">
        <div className="stats__body--item">
          <span>{user.totalTrue}</span>
          <span>True</span>
        </div>
        <div className="stats__body--item">
          <span>{user.totalQuiz}</span>
          <span>Quiz</span>
        </div>
        <div className="stats__body--item">
          <span>{user.totalSolved}</span>
          <span>Solved</span>
        </div>
        <div className="stats__body--item">
          <span>{user.totalPoint}</span>
          <span>Point</span>
        </div>
      </div>
    </div>
  );
}
