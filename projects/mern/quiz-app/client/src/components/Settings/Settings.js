import React, { useState, useEffect } from "react";

//REDUX CONNECTION
import { connect } from "react-redux";
//REDUX ACTIONS
import { userUpdate } from "../../redux/actions";

function Settings({ dispatch, history, user }) {
  if (!user) {
    history.push("/");
  }

  useEffect(() => {
    if (user) {
      setNewUserInfo({
        ...user,
      });
    }
  }, [user]);

  const [newUserInfo, setNewUserInfo] = useState(null);

  const handlerUpdateUser = (newItem) => {
    setNewUserInfo({
      newsLetter: user.newsLetter,
      ...newUserInfo,
      ...newItem,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(userUpdate(newUserInfo));
    history.push(`/${user.username}`);
  };

  return (
    <div className="settings">
      <form className="settings__form" onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder={newUserInfo?.username || "Username"}
          name="username"
          onChange={(e) => handlerUpdateUser({ username: e.target.value })}
        />
        <input
          type="text"
          placeholder={newUserInfo?.firstName || "First Name"}
          name="firstName"
          onChange={(e) => handlerUpdateUser({ firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder={newUserInfo?.lastName || "Last Name"}
          name="lastName"
          onChange={(e) => handlerUpdateUser({ lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder={newUserInfo?.email || "Email"}
          name="email"
          onChange={(e) => handlerUpdateUser({ email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handlerUpdateUser({ password: e.target.value })}
        />
        <input
          type="date"
          name="birthday"
          value={newUserInfo?.birthday || "1991-01-01"}
          onChange={(e) => handlerUpdateUser({ birthday: e.target.value })}
        />
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={newUserInfo?.newsLetter}
            onChange={(e) => {
              handlerUpdateUser({ newsLetter: !newUserInfo?.newsLetter });
            }}
          />
          Subscribe to Newsletter
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Settings);
