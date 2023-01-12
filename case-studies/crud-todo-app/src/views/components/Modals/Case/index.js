import React from "react";
import "./styles.scss";
import Button from "../../Button";

function Case({ title, children, message, yes, no }) {
  let isActive = true;

  const handlerYes = () => {
    yes(null);
    isActive = false;
  };

  const handlerNo = () => {
    no(null);
    isActive = false;
  };

  if (isActive) {
    return (
      <div className="case">
        <p>{title || message || children}</p>
        <div className={"buttons" + (!no ? " ThereIsOneButton" : " ")}>
          {yes && (
            <Button type="success" onClick={handlerYes}>
              OK
            </Button>
          )}
          {no && (
            <Button type="danger" onClick={handlerNo}>
              NO
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Case;
