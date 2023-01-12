import React from "react";
import styled from "styled-components";
import {
  setBorder,
  setColor,
  setLetterSpacing,
  setRem,
  setShadow,
  setTransition,
} from "../../styles";
import { SmallBtn } from "../globals/Buttons";

const Room = ({ className, room }) => {
  const {
    image = "/assets/images/room1.jpeg",
    title = "",
    info = "",
    price = 0,
  } = room;

  return (
    <article className={className}>
      <div className="img-container">
        <img src={image} alt="single room" />
        <div className="price">{price}</div>
      </div>
      <div className="room-info">
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
      <SmallBtn>Small Btn</SmallBtn>
    </article>
  );
};

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  ${setShadow.dark};
  ${setTransition()};

  &:hover {
    ${setShadow.darkest};
  }

  .img-container {
    background: ${setColor.mainBlack};
    position: relative;

    img {
      width: 100%;
      display: block;
      ${setTransition()};
    }

    &:hover img {
      opacity: 0.5;
    }

    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing()};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }

    &:hover .price {
      opacity: 1;
    }
  }

  .room-info {
    padding: ${setRem()};

    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }

    p {
      ${setLetterSpacing()};
    }
  }
`;
