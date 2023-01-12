import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  //,useEffect fonksiyonu bitiminde , koyup [] icine bir kosul tanimlarsak sadece o deger degistiginde yani update oldugunda eseEffectimiz calisir. Tipki componentDidUpdate gibi.
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleButtonRef.current.click();
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);

    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  const assignedClasses = [];

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
