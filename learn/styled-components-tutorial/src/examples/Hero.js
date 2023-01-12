import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.big ? "100vh" : "50vh")};
  background-image: url(${(props) =>
    props.img ? props.img : "./assets/img/image0003.jpeg"});
  background-postion: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
