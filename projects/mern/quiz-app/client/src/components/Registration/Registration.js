import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

//REDUX
import { connect } from "react-redux";
//REDUX ACTIONS
import {} from "../../redux/actions";

const Registration = ({
  dispatch,
  user,
  sectionLogin,
  sectionRegister,
  history,
}) => {
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    if (user && history) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="section__registration">
      <div className="registration">
        <div className="registration__header">
          <div
            className={
              "registration__header--login " +
              (activeTab === "login" ? "registration__header--active" : "")
            }
            onClick={() => setActiveTab("login")}
          >
            Login
          </div>
          <div
            className={
              "registration__header--register " +
              (activeTab === "register" ? "registration__header--active" : "")
            }
            onClick={() => setActiveTab("register")}
          >
            Register
          </div>
        </div>
        {activeTab === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    sectionLogin: state.user.sectionLogin,
    sectionRegister: state.user.sectionRegister,
  };
};

export default connect(mapStateToProps)(Registration);
