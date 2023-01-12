import styled from "styled-components";
import { setFlex, setBackground } from "../../styles";

const Hero = styled.header`
  ${setFlex({ x: "center", y: "center" })}
  min-height: 100vh;
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,0.5)" })}
`;

export default Hero;
